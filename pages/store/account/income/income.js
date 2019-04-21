Page({
  data: {
    size: 'default',    //按钮大小为默认
    type: ''     
  },

  select:function(e){
    var that = this;
    var val = e.target.dataset.flag;
    that.setData({ type: val });
    console.log(this.data.type)
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