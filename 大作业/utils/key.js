module.exports = function(path, data, method) { //用于暴露接口，module.exports比exports更安全
  //使用Promise进行封装，封装后成了一个模块，封装的好处在于方便调用
  return new Promise((resolve, reject) => { //
    wx.request({  //发起HTTP网络请求的API
      url: 'http://localhost:3001/api/' + path, //请求的api地址
      method: method, // 请求方法
      data: data, //参数
      header: {
        'Content-Type': 'json'
      }, // 请求头，默认
      success: resolve,   //请求成功时，执行的操作
      fail: function() {  //请求失败时，执行的操作
        reject()
        wx.showModal({
          showCancel: false,
          title: '失败'
        })
      }
    })
  })
}