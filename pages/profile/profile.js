//获取应用实例
var app = getApp()
Page({
  data: {
    title: '',
    content: '',
    motto: 'Hello World',
    userInfo: {}
  },
  onLoad: function () {
    var that = this
    var key = ''
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      key = userInfo.nickName
      console.log(key)
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
    wx.getStorage({
      key: key,
      fail: function (res) {
        wx.setStorage({
          key: key,
          favorite: {}
        })
      }
    })
  }
})
