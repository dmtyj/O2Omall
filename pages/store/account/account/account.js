Page({
  data: {
    ewm: '/res/icons/ewm.png',
    payin: '/pages/store/history/payin/payin',
    payout: '/pages/store/history/payout/payout',
    userurl: '/pages/store/account/profile/profile',
    user: {
      nickName: 'admin',
      cid: '192015658546',
    },
    amount: '10'
  },
  linkto: function (e) {
    var data = e.currentTarget.dataset;
    console.log(data);
    var link = data.link || '/pages/index/index';
    if (link != '/pages/404/404') {
      wx.navigateTo({ url: link });
    }
  },
  // 支付
  payout: function () {
    wx.navigateTo({ url: '/pages/store/account/income/income' });
  },
  onLoad: function () {
  }
})