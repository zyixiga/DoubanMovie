var API_URL = "https://api.douban.com/v2/movie/search?q="
Page({
    data: {
        movies: {}
    },
    search: function (params) {
        if(!params.detail.value){
            return;
        }
        wx.showToast({
            title: "加载中",
            icon: "loading",
            duration: 10000
        });
        var that = this;
        wx.request({
            url: API_URL + params.detail.value,
            data: {},
            header: {
                'Content-Type': 'json'
            }, // 设置请求的 header
            success: function (res) {
                wx.hideToast();
                that.setData({
                    movies: res.data.subjects
                })
                console.log(that.data.movies)
                console.log(res.data)
                // success
            },
            fail: function () {
                // fail
            },
            complete: function () {
                // complete
            }
        })
    }
})