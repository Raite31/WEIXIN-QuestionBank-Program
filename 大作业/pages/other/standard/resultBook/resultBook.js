var app = getApp();
Page({
  data: {
    //indexs是用于做题目题号的
    indexs: [1, 2, 3, 4, 5, 6, 7],
    //result是正确的答案，userselect是用户选择的答案
    result: null,
    userselect: [],
    //设置a用于装载 要设置进异步数据缓存的数据
    a: []
  },
  onLoad: function () {
    var that = this;
    //从standardized页面拿来的试题和答案数据
    wx.getStorage({
      key: 'standardized',
      success(res) {
        // console.log(res.data)
        //那出试题和正确答案，设置在result里
        that.setData({
          result: res.data,
        })
      }
    });
    //从全局变量获取用户选择的答案设置给userselect
    that.setData({
      userselect: app.globalData.examAnswer,
    });
    // console.log("用户选择的答案：", app.globalData.examAnswer);
  },

  onReady: function () {
    //这里的打印 是数据追踪，可以看到本页面的userselect是否真的获得了数据
    // console.log(this.data.userselect)
  },

  addMistake: function (e) {
    wx.showToast({
      title: '加入成功'
    })
    //把点击按钮获得的需要的数据的index设置为index可以知道点击的是哪道题的索引
    var index = e.target.dataset.index;
    // console.log(this.data.result.test[index].title)
    var b = {
      "title": this.data.result.test[index].title,
      "radio": this.data.result.test[index].items,
      "answer": this.data.result.test[index].result,
      "select": this.data.userselect[index].select,
    };
    //获取本页面的data a
    var a = this.data.a;
    //把点击加入错题本的题目的数据设置到a里
    a.push(b);
    //把a设置到异步数据缓存里，在Mistake页面被获取
    wx.setStorage({
      data: a,
      key: 'misTake'
    });
  },


})