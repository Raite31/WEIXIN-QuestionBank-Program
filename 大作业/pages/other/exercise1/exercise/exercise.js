//调用key.js
const key = require('../../../../utils/key.js')
//创建全局变量
var app = getApp();
Page({
  data: {
    index: 0,
    test1: [],
    answer: {},
    opacity: 0,
    test2: [],
  },

  onLoad: function (options) {
    wx.showLoading({
      title: '努力加载中'
    })
    var that = this;
    //向服务器请求数据
    key('test/study').then((res) => {
      wx.hideLoading();
      for (var i = 0; i < res.data.length; i++) {
        that.setData({
          test1: res.data
        });
      }
      // console.log("222:", this.data.test1[index].items[index])
    }, () => {
      wx.hideLoading()
    });
  },

  //选项发生变化触发的事件
  radioChange: function () {
    this.setData({
      opacity: 1
    })
  },

  //点击事件函数
  exam: function () {
    var index = this.index;
    // console.log("detail:", this.data.test1)
    //下一题的题号
    var currIndex = this.data.index + 1;
    console.log("currIndex:", currIndex)
    if (currIndex >= 10) {
      wx.showToast({
        title: '测试结束！',
      })
      //跳到跳转页
      wx.redirectTo({
        url: '../result/result',
      })
    }
    //刷新页面信息
    this.setData({
      index: currIndex,
      opacity: 0,
    })
  },
})