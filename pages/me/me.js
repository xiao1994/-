var logisticsData = require('../../data/logistics-data.js')
var inputContent = {}
Page({
  data: {
    inputContent: {},
    sign_in: true,
    me: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      sign_in_key: logisticsData.sign_in,
      me_key: logisticsData.me,
    })
  },


  signUpTap: function (event) {
    wx.navigateTo({
      url: "sign-up/sign-up"
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
          icon: 'loading',
          duration: 1500
        })
        this.data.phone = 'fail'
      } else {
        this.data.phone = phone
      }
    }
    if ('password' == e.currentTarget.id) {
      var password = inputContent[e.currentTarget.id];
      if (password.length >= 12 || password.length <= 5) {
        wx.showToast({
          title: '登陆密码有误！',
          icon: 'loading',
          duration: 1500
        })
        this.data.password = 'fail'
      } else {
        this.data.password = password
      }
    }
  },

  signInTap: function (event) {
    if (this.data.phone == 'fail' || this.data.phone == undefined) {
      wx.showToast({
        title: '手机号有误！',
        icon: 'loading',
        duration: 1500
      })
      return false
    }
    if (this.data.password == 'fail' || this.data.password == undefined) {
      wx.showToast({
        title: '登陆密码有误！',
        icon: 'loading',
        duration: 1500
      })
      return false
    }
    var that = this//不要漏了这句，很重要
    wx.request({
      method: 'POST',
      url: getApp().data.domain + 'interface/wx/common/user/login',
      data: {
        'appId': 'wxb3094e84f2642f59',
        'phone': this.data.phone,
        'password': this.data.password,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      loading: function (res) {
        console.log(res.data.code)
        if (res.data.code == 1000) {
          console.log(res.data.msg)
          that.setData({
            loginData: res.data.data,
            sign_in: false,
            me: true,
          })
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'loading',
            duration: 1500
          })
        }

      }
    })

  },

  signPhoneTap: function (event) {
    wx.navigateTo({
      url: "sign-phone/sign-phone"
    })
  }


})