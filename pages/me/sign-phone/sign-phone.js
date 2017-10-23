var logisticsData = require('../../../data/logistics-data.js')
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
      sign_phone_key: logisticsData.sign_phone,
    })
  },

  signPhoneTap: function (event) {
    wx.navigateTo({
      url: "../password/password"
    })
  }
// 判断跳转
  // signPhoneTap: function (event) {
  //   wx.switchTab({
  //     url: "../../me/me"
  //   })
  // }
})