var logisticsData = require('../../../data/logistics-data.js')
var inputContent = {}
var countdown = 60;
var settime = function (that) {
  if (countdown == 0) {
    that.setData({
      is_show: true
    })
    countdown = 60;
    return;
  } else {
    that.setData({
      is_show: false,
      last_time: countdown
    })

    countdown--;
  }
  setTimeout(function () {
    settime(that)
  }
    , 1000)
}

Page({
  data: {
    inputContent: {},
    is_show: "true",
    last_time: countdown,
  },

  onLoad: function (options) {
    this.setData({
      sign_up_key: logisticsData.sign_up
    })
  },

  inputBlur: function (e) {
    inputContent[e.currentTarget.id] = e.detail.value
    if ('phone' == e.currentTarget.id) {
      var phone = inputContent[e.currentTarget.id];
      var myreg = /^(((1[0-9]{1}))+\d{9})$/;
      if (phone.length != 11 || !myreg.test(phone)) {
        wx.showToast({
          title: '手机号有误！',
          icon: 'success',
          duration: 1500
        })
        this.data.phone = 'fail'
      } else {
        this.data.phone = phone
      }
    }
    if ('userName' == e.currentTarget.id) {
      var userName = inputContent[e.currentTarget.id];
      if (userName.length >= 12 || userName.length <= 4) {
        wx.showToast({
          title: '用户名有误',
          icon: 'success',
          duration: 1500
        })
        this.data.userName = 'fail'
      } else {
        this.data.userName = userName
      }
    }
    if ('password' == e.currentTarget.id) {
      var password = inputContent[e.currentTarget.id];
      if (password.length >= 12 || password.length <= 5) {
        wx.showToast({
          title: '密码有误',
          icon: 'success',
          duration: 1500
        })
        this.data.password = 'fail'
      } else {
        this.data.password = password
      }
    }
    if ('passwordAgain' == e.currentTarget.id) {
      var passwordAgain = inputContent[e.currentTarget.id];
      if (passwordAgain != this.data.password) {
        wx.showToast({
          title: '两次密码不一致',
          icon: 'success',
          duration: 1500
        })
        this.data.passwordAgain = 'fail'
      } else {
        this.data.passwordAgain = passwordAgain
      }
    }
    if ('code' == e.currentTarget.id) {
      var code = inputContent[e.currentTarget.id];
      if (code.length !=6) {
        wx.showToast({
          title: '验证码6位数字',
          icon: 'success',
          duration: 1500
        })
        this.data.code = 'fail'
      } else {
        this.data.code = code
      }
    }
  },

  agreementTap: function (event) {
    wx.navigateTo({
      url: "../agreement/agreement"
    })
  },

  idTap: function (event) {
    if (this.data.phone == 'fail' || this.data.phone == undefined) {
      wx.showToast({
        title: '手机号有误！',
        icon: 'success',
        duration: 1500
      })
      return false
    }
    if (this.data.userName == 'fail' || this.data.userName == undefined) {
      wx.showToast({
        title: '用户名有误',
        icon: 'success',
        duration: 1500
      })
      return false
    }

    if (this.data.password == 'fail' || this.data.password == undefined) {
      wx.showToast({
        title: '密码有误',
        icon: 'success',
        duration: 1500
      })
      return false
    }
    if (this.data.passwordAgain == 'fail' || this.data.passwordAgain == undefined) {
      wx.showToast({
        title: '两次密码不一致',
        icon: 'success',
        duration: 1500
      })
      return false
    }
    if (this.data.code == 'fail' || this.data.code == undefined) {
      wx.showToast({
        title: '验证码6位数字',
        icon: 'success',
        duration: 1500
      })
      return false
    }
    var that = this//不要漏了这句，很重要
    wx.request({
      method: 'POST',
      url: getApp().data.domain + 'interface/wx/common/user/login',
      url: getApp().data.domain + 'interface/wx/common/sms',
      data: {
        'appId': 'wxb3094e84f2642f59',
        'phone': this.data.phone,
        'password': this.data.password,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        console.log(res.data.code)
        if (res.data.code == 1000) {
          console.log(res.data.msg)
          that.setData({
            loginData: res.data.data,
          })
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 1500
          })
        }

      }
    })
  },
  getSmsTap: function () {
    var that = this;
    // 将获取验证码按钮隐藏60s，60s后再次显示
    that.setData({
      is_show: (!that.data.is_show) //false
    })
    settime(that);
  }

  // getSmsTap: function (event) {
  //   console.log(this.data.phone)
  //   var that = this//不要漏了这句，很重要
  //   if (this.data.phone == 'fail' || this.data.phone == undefined) {
  //     wx.showToast({
  //       title: '手机号有误！',
  //       icon: 'success',
  //       duration: 1500
  //     })
  //     return false
  //   }
    
  //   wx.request({
  //     method: 'POST',
  //     url: getApp().data.domain + 'interface/wx/common/sms',
  //     data: {
  //       'appId': 'wxb3094e84f2642f59',
  //       'phone': this.data.phone,
  //       'type': '1',
  //     },
  //     header: {
  //       'content-type': 'application/x-www-form-urlencoded' // 默认值
  //     },
  //     success: function (res) {
  //       console.log(res.data.code)
  //       if (res.data.code == 1000) {
  //         console.log(res.data.msg)
  //         that.setData({
  //           loginData: res.data.data,
  //         })
  //       } else {
  //         wx.showToast({
  //           title: res.data.msg,
  //           icon: 'success',
  //           duration: 1500
  //         })
  //       }

  //     }
  //   })
  // },

})