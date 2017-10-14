var logisticsData = require('../../data/logistics-data.js')
var app = getApp();
Page({
  data: {
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      swiper_img_key: logisticsData.swiper_img,
      icons_key: logisticsData.icons
    })
  }
})