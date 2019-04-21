Page({
   data: {
/*订单列表数据
* @param {Number} _id 订单的id标识;
* @param {String} corver商品的封面;
* @param {String} show_name订单名称;
* @param {String} sn订单号;
* @param {Object} show_status 订单状态;
*/
orders:[
{corver:'/res/manager/tabs/bg1.jpg',show_name:'VR虚拟现实课程'
,sn:'1625498256542',show_status:{style:'red',name:'待付款'},_id:'1'}
  ],
 top: ["active", "", ""],
  },
//顶部标签切换，并根据点击的标签增加active状态
  topbar:function(e){
    var that = this;
    var item = e.target.dataset.item;
    console.log(item)
    var top = [];
    for(var i=0;i<3;i++){
      if(i == item){
        top[i] = "active";
      }else{
        top[i] = "";
      }
    }
      that.setData({ top: top });
  },

  // 转向订单详情页
  detail: function (e) {
    var data = e.target.dataset;
    console.log(data)
    wx.navigateTo({
      url: '/pages/store/order/detail/detail?id=' + data['id'],
      complete: function () { }
    });
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