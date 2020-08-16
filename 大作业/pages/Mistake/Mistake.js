// pages/Mistake/Mistake.js
Page({
  data: {
    index: [0],
    result: []
  },

  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'misTake',
      success(res) {
        // console.log(res.data)
        that.setData({
          result: res.data,
        })
      }
    });
  },
  // onReady: function () {
  //   var index = this.data.index;
  //     console.log("1111:",this.data.result[index].radio[index])
  // }
})