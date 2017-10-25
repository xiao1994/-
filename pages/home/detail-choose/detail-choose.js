// pages/home/detail-choose/detail-choose.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail_choose_bar: [
    {
      text: "全部",
      img: "/images/icon/arrow-right.png",
    },{
      text: "国际物流",
      img: "/images/icon/arrow-right.png",
    },{
      text: "国际快递",
      img: "/images/icon/arrow-right.png",
    }, {
      text: "全部",
      img: "/images/icon/arrow-right.png",
    }, {
      text: "国际物流",
      img: "/images/icon/arrow-right.png",
    }, {
      text: "国际快递",
      img: "/images/icon/arrow-right.png",
    }, {
      text: "全部",
      img: "/images/icon/arrow-right.png",
    }, {
      text: "国际物流",
      img: "/images/icon/arrow-right.png",
    }, 
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  
  cancelTab: function (event) {
    wx.navigateBack({
      delta: 1
    })
  },

  detailChooseTap: function(event) {
    wx.navigateBack({
      delta: 1
    })
  },

})