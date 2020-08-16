const key = require('../../utils/key.js') //调用key.js
Page({
  data: {
    index: [0],
    test1: []
  },

  onLoad: function (options) {
    wx.showLoading({
      title: '努力加载中'
    })
    //向服务器请求数据
    var that = this;
    key('test/rank').then((res) => {
      wx.hideLoading();
      that.setData({
        test1: res.data
      });
      // console.log("222:", this.data.test1)
    }, () => {
      wx.hideLoading()
    });
  },
})