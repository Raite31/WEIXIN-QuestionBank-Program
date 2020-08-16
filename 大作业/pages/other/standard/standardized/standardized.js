//调用key.js
const key = require('../../../../utils/key.js')
//创建全局变量
var app = getApp();

Page({
  data: {
    index: 0,
    test1: []
  },
  onLoad: function (options) {
    //显示模拟对话框
    wx.showLoading({
      title: '努力加载中'
    })
    //请求数据
    //从别处调来的数据，大多用that=this
    var that = this;
    //生成随机数，用于随机选取试卷
    var i = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    //用接口请求服务器
    key('test/topic').then((res) => {
      //隐藏模拟对话框
      wx.hideLoading();
      that.setData({
        //把返回的数据设置到data里的test1
        //这里用三目运算符解决经常找不到test1的问题
        test1: res.data[i] ? res.data[i] : null
      });
      // console.log("data[i]：", res.data[i]);
      // console.log("this.data：", this.data);

      //把题目和正确答案设置在异步数据缓存；题目在resultBook页面被获取
      wx.setStorage({
        key: 'standardized', //设置关键字，给取值时用的
        data: res.data[i], //设置数据
      })
    }, () => {
      wx.hideLoading()
    });
  },

  //单选按钮回调事件，选择选项时触发
  radioChange: function (e) {
    // console.log("触发：" + e.detail.value);
    //将用户选择的选项放入同步数据缓存，该数据在下一个函数被获取；注意！同页面传值用同步数据缓存（血训！）
    wx.setStorageSync('answer', e.detail.value);
  },

  exam: function () {
    //设置好idnex，用于给下面rightAnswer的获取做准备
    var index = this.data.index;
    //从数据缓存中获取用户选择的选项
    var userAnswer = wx.getStorageSync('answer'); 
    // console.log("用户选择的选项：",userAnswer );
    //把用户的选项存到全局变量里
    app.globalData.examAnswer[index].select = userAnswer;
    // console.log("index:" + this.data.index);
    //设置当前页面对象
    var currPage = this;
    //设置下一题的题号
    var currIndex = currPage.data.index + 1;
    //如果题号大于7，直接跳转到查看考试详情页面 
    if (currIndex >= 7) {
      wx.redirectTo({
        url: '../result/result',
      })
    }
    //刷新页面信息
    currPage.setData({ 
      index: currIndex
    })
  },
})