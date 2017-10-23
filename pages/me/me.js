var logisticsData = require('../../data/logistics-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  signInTap: function (event) {
    wx.switchTab({
      url: "../home/home"
    })
  },

  signPhoneTap: function (event) {
    wx.navigateTo({
      url: "sign-phone/sign-phone"
    })
  }
})