var API_URL = "https://api.douban.com/v2/movie/"
var app = getApp()
Page({
    data: {
        favored: '收藏',
        movie: {},
        userName: ''
    },
    onLoad: function (params) {
        var that = this
        app.getUserInfo(function (userInfo) {
            //更新数据
            that.setData({
                userName: userInfo.nickName
            })
            console.log(that.data.movie)
        })

        wx.request({
            url: API_URL + params.id,
            // url: API_URL + '1292052',
            data: {},
            header: {
                'Content-Type': 'json'
            }, // 设置请求的 header
            success: function (res) {
                wx.hideToast();
                that.setData({
                    movie: res.data,
                })
                console.log(that.data.movie)
                // success
            },
            fail: function () {
                console.log("fail1")
                // fail
            },
            complete: function () {
                console.log("complete1")
                // complete
            }
        })
    },
    // favorTap: function () {
    //     var that = this
    //     console.log(that.data.userName)
    //     wx.getStorage({
    //         key: that.data.userName,
    //         success: function (res) {
    //             var userData = res.data
    //             for (var i = 0; i < favorite.length; i++) {
    //                 if (favorite[i].id == that.data.movie.alt) {
    //                     favorite[i].favored = !favorite[i].favored
    //                 }
    //             }
    //             wx.setStorage({
    //                 key: that.data.userName,
    //                 data: favorite,
    //                 success: function (res) {
    //                     console.log(res)
    //                 },
    //                 fail: function () {
    //                     console.log("fail2")
    //                     // fail
    //                 },
    //                 complete: function () {
    //                     console.log("complete2")
    //                     console.log(res)
    //                 }
    //             })
    //         },
    //         fail: function () {
    //             console.log("fail3")
    //             // fail
    //         },
    //         complete: function () {
    //             console.log("complete3")
    //             // complete
    //         }
    //     })
    // }
})