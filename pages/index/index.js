//index.js
var API_URL = "https://api.douban.com/v2/movie/in_theaters"
Page({
  data: {
    title:'加载中...',
    movies:[]
  },
  onLoad:function(){
    var that = this
    wx.showToast({
      title:"加载中...",
      icon:"loading",
      duration:10000
    });
    wx.request({
      url: API_URL,
      data: {},
      header: {
        'Content-Type':'json'
      }, // 设置请求的 header
      success: function(res){
        var data = res.data
        wx.hideToast();
        that.setData({
          title:data.title,
          movies:data.subjects
        })
        console.log(that.data.title)
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})
