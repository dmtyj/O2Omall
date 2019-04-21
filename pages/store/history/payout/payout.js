Page({
  data: {
    xf: [
      { show_name: '云计算在线课程系列', sn: '156254985426', created_at: '2018-01-01', amount: '100'},
      { show_name: '云计算在线课程系列', sn: '156254985426', created_at: '2018-01-01', amount: '100'}
      ]
  },

  onLoad: function (options) {
    console.log("onLoad")
  },
  onReady: function () {
    console.log("onReady")
  },
  onShow: function () {
    console.log("onShow")
  },
  onHide: function () {
    console.log("onHide")
  },
  onUnload: function () {
    console.log("onUnload")
  },
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh")
  },
  onReachBottom: function () {
    console.log("onReachBottom")
  },
  onShareAppMessage: function () {
    console.log("onShareAppMessage")
  }
})