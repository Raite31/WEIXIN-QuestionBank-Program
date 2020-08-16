Page({
  data: {

  },
  //查看考试详情
  queryResult: function () {
    //页面跳转
    wx.redirectTo({
      url: '/pages/other/standard/resultBook/resultBook',
    })
  }
})