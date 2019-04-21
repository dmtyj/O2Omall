//获取应用实例
Page({
  data: {
    array: ['中国', '美国', '巴西', '日本'],
    index: 0,
    dates: '2018-01-25',
    times: '12:00',
    type:"detail",
  },

service:function(e){  
        this.setData({  
          index: e.detail.value  
        })  
    }  ,

 //  点击时间组件确定事件  
  bindTimeChange: function (e) {
    this.setData({
      times: e.detail.value
    })
  },
  //  点击日期组件确定事件  
  bindDateChange: function (e) {
     console.log(e.detail.value)
    this.setData({
      dates: e.detail.value
    })
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