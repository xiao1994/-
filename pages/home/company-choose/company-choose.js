// pages/home/choose/choose.js
Page({
  data: {
    location: {
      start:"北京",
      end:"呼和浩特",
    },
    start: "北京",
    end: "呼和浩特",
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  telephoneTap: function (event) {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
})