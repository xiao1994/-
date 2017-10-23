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
      city_container_key: logisticsData.city_container,
    })
  },

  cancelTab: function (event) {
    wx.switchTab({
      url: "../../home/home"
    })
  },

  returnTab: function (event) {
    wx.navigateBack({
      delta: 1
    })
  },
})