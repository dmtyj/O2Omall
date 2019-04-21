Page({
  data: {
    goods: [{
      id: "1",
      corver: "/res/manager/tabs/bg1.jpg",
      name: "VR虚拟现实课程",
      show_price: "120",
      sale_price: "120"
    }, ],
    imgUrls: [{
      url: '/res/manager/tabs/bg1.jpg'
    }, {
      url: '/res/manager/tabs/bg2.jpg'
    }],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    menubar: [{
        img: "/res/icons/1.png",
        name: "账户余额",
        link: "accounts"
      },
      {
        img: "/res/icons/2.png",
        name: "充值记录",
        link: "payin"
      },
      {
        img: "/res/icons/3.png",
        name: "消费记录",
        link: "payin"
      },
      {
        img: "/res/icons/4.png",
        name: "个人资料",
        link: "user"
      }
    ],
  },

  // 链接到详情页
  detail: function(e) {
    var data = e.target.dataset;
    wx.navigateTo({
      url: '/pages/store/products/detail/detail?_id=' + data.id
    });
  },



  // 链接到充值记录页
  payin: function(e) {
    wx.navigateTo({
      url: '/pages/store/history/payin/payin'
    });
  },

  // 链接到账户页
  accounts: function(e) {
    wx.switchTab({
      url: '/pages/store/account/account/account'
    });
  },

  // 链接到消费记录页
  payout: function(e) {
    wx.navigateTo({
      url: '/pages/store/history/payout/payout'
    });
  },

  // 链接到个人资料页
  user: function(e) {
    wx.navigateTo({
      url: '/pages/store/account/profile/profile'
    });
  },

  onLoad: function(options) {
    console.log("onLoad")
  },
  onReady: function() {
    console.log("onReady")
  },
  onShow: function() {
    console.log("onShow")
  },
  onHide: function() {
    console.log("onHide")
  },
  onUnload: function() {
    console.log("onUnload")
  },
  onPullDownRefresh: function() {
    console.log("onPullDownRefresh")
  },
  onReachBottom: function() {
    console.log("onReachBottom")
  },
  onShareAppMessage: function() {
    console.log("onShareAppMessage")
  }

});