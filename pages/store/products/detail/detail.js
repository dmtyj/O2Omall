Page({
  data: {
    autoplay: true,                                  //是否自动播放
    interval: 3000,                                  //滚动时间
    order:'/pages/store/order/detail/detail',        //跳转订单详情界面
    images: ['/res/manager/tabs/bg1.jpg','/res/manager/tabs/bg2.jpg'],//商品轮播图
    name: 'VR虚拟现实课程',                           //商品名称
    body: '本课程对沉浸式虚拟现实、全实景虚拟现实和虚实结合的增强现实等技术进行了一个入门级的讲解，意在引导同学们进入到虚拟现实的开发队伍中来。课程讲解了虚拟现实的基本概念、基本原理，以及基于Unity平台的虚拟现实开发方法和开发实例。该课程系统全面、深入浅出、易学易会、实例讲解，适合于虚拟现实开发的初学者学习。',                                     //商品详情介绍
    price: 120,                                    //商品价格
    cart: { total: 0, show_price: 0 }               //购买数量及总价
  },

  linkto: function (e) {                          //跳转到指定链接
    var data = e.currentTarget.dataset;
    var link = data.link || '/pages/index/index';
    console.log(link);
    if ( link != '/pages/404/404') {
      wx.navigateTo({ url: link });
    }
  },

//购买触发事件
  buy:function(e){
    var that=this;
    var total = that.data.cart.total;
    total+=1;
    var data = e.currentTarget.dataset;
    var price = data.price;
    var show_price = that.data.cart.show_price;
    show_price += price;
    that.setData({
      cart: { total: total, show_price: show_price }
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