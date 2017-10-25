
Page({
  data: {
    company_content: {
      start:"北京",
      end:"呼和浩特",
      company_name:"豪臣物流",
      company_location:"宝安区新安",
      company_distance:"距此999+km",
      browse:"5023人看过",
      big_route_content:"true",
      big_tag_content:"",
      company_big_tags: [
        ['/images/icon/real.png'],
        ['/images/icon/protect.png'],
        ['/images/icon/recommend.png'],
      ],
      big_route_tags: [
        ['直达'],
        ['往返专线'],
      ],
      big_tags: [
        ['个人'],
        ['公司'],
        ['厂房搬迁'],
      ]
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

  companyChooseTap: function (event) {
    wx.navigateTo({
      url: "../detail-choose/detail-choose"
    })
  },

  companyDetailTap: function (event) {
    wx.navigateTo({
      url: "../company-detail/company-detail"
    })
  },
})