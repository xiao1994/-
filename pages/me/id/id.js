var logisticsData = require('../../../data/logistics-data.js')
var inputContent = {}
Page({

  data: {
    inputContent: {},
    avatarImg: "/images/input/user.png",
  },

  onLoad: function (options) {
    this.setData({
      id_content_key: logisticsData.id_content,
      id_img_key: logisticsData.id_img,
    })
  },

  avatarTap: function (e) {
    var that = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        that.setData({ avatarImg: tempFilePaths })
      }
    })
  },

  inputBlur: function (e) {
    inputContent[e.currentTarget.id] = e.detail.value
    if ('telephone' == e.currentTarget.id) {
      var telephone = inputContent[e.currentTarget.id];
      if (telephone.length <= 4 || telephone.length >= 11) {
        wx.showToast({
          title: '号码有误！',
          icon: 'loading',
          duration: 1500
        })
        this.data.telephone = 'fail'
      } else {
        this.data.telephone = telephone
      }
    }
    if ('idName' == e.currentTarget.id) {
      var idName = inputContent[e.currentTarget.id];
      if (idName.length >= 6 || idName.length <= 1) {
        wx.showToast({
          title: '真实姓名有误',
          icon: 'loading',
          duration: 1500
        })
        this.data.idName = 'fail'
      } else {
        this.data.idName = idName
      }
    }
    if ('address' == e.currentTarget.id) {
      var address = inputContent[e.currentTarget.id];
      if (address.length >= 18 || address.length <= 1) {
        wx.showToast({
          title: '住址有误',
          icon: 'loading',
          duration: 1500
        })
        this.data.address = 'fail'
      } else {
        this.data.address = address
      }
    }
    if ('idNumber' == e.currentTarget.id) {
      var idNumber = inputContent[e.currentTarget.id];
      if (idNumber.length != 18) {
        wx.showToast({
          title: '身份证号有误',
          icon: 'loading',
          duration: 1500
        })
        this.data.idNumber = 'fail'
      } else {
        this.data.idNumber = idNumber
      }
    }
  },

  idImgTap: function (event) {
    var that = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      loading: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        that.setData({
          img: tempFilePaths,
        })
      }
    })
  },


  idFinishTap: function (event) {
    if (this.data.idName == 'fail' || this.data.idName == undefined) {
      wx.showToast({
        title: '真实姓名有误',
        icon: 'loading',
        duration: 1500
      })
      return false
    }

    if (this.data.idNumber == 'fail' || this.data.idNumber == undefined) {
      wx.showToast({
        title: '身份证号码有误',
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
        'telephone': this.data.telephone,
        'address': this.data.address,
        'type': 1,
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
          })
          wx.switchTab({
            url: "../../me/me"
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

})