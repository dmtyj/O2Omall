Page({
  data: {
    size: 'mini',
    src: '/res/icons/lcc.png',
    user: '/pages/store/user/user/user',
    userdata: { nickName: 'tjpccy', mobile: '182398765', addr_01: '', addr_02: ''}
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