Page({
	data: {
    paytype:'cardpay',
    order: { 
      sn: '1625498256542', 
      contact:'XXX',
      mobile:'139XXXXXXX',
      address:'无锡市太湖西大道2188号',
      total_price: 120
      },
    goods:
     [
      { id: 1, corver: "/res/manager/tabs/bg1.jpg", name: "VR虚拟现实课程", show_price: 120 ,amount:1}
    ]
   
	},

	// 支付方式选择
	come:function(e){
		var that   = this;
		var val = e.target.dataset.value;
    that.setData({paytype:val});
    console.log(this.data.paytype)

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