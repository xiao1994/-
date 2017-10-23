var logisticsData = require('../../../data/logistics-data.js')
Page({
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      sign_up_key: logisticsData.sign_up
    })
  },

  agreementTap: function (event) {
    wx.navigateTo({
      url: "../agreement/agreement"
    })
  },

  IDTap: function (event) {
    wx.navigateTo({
      url: "../id/id"
    })
  }
})