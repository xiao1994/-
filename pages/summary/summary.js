Page({
  data: {
    // text:"这是一个页面"
    tip: '',
    buttonDisabled: false,
    modalHidden: true,
    show: false
  },
  showModal: function () {
    this.setData({
      modalHidden: !this.data.modalHidden
    })
  },
  modalBindaconfirm: function () {
    this.setData({
      modalHidden: !this.data.modalHidden,
      show: !this.data.show,
      tip: '您点击了【确认】按钮！',
      buttonDisabled: !this.data.buttonDisabled
    })
  },
  modalBindcancel: function () {
    this.setData({
      modalHidden: !this.data.modalHidden,
      tip: '您点击了【取消】按钮！'
    })
  }
})