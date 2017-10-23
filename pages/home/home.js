var logisticsData = require('../../data/logistics-data.js')
var app = getApp();
Page({
  data: {
    location_start: {
      throughout: "/images/icon/start.png",
      content: "北京",
      arrow: "/images/icon/arrow-down.png",
    },
    location_end: {
      throughout: "/images/icon/end.png",
      content: "收货地址",
      arrow: "/images/icon/arrow-down.png",
    },
    },
    onLoad: function (options) {
      // 页面初始化 options为页面跳转所带来的参数
      this.setData({
        swiper_img_key: logisticsData.swiper_img,
        icons_key: logisticsData.icons,
        icons_container_key: logisticsData.icons_container
      })
    },

    locationTap: function (event) {
      wx.navigateTo({
        url: "city-choose/city-choose"
      })
    },

    chooseTap: function (event) {
      wx.navigateTo({
        url: "company-choose/company-choose"
      })
    },
  })