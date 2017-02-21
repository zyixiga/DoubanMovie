#小程序开发中碰到的几个问题
需要准备的东西
apikey，微信公众号账号，微信号
需要使用其他网站的api时需要在微信公众平台登录，进入设置，去服务器配置下增加request合法域名，一个月只能改三次，需谨慎操作，例如要使用豆瓣电影api，就要增添api.douban.com为合法域名
遇到net::ERR_NAME_NOT_RESOLVED，有时刷新即可解决问题
遇到invalid request code：999，需更改header:{
    "Content-Type":"json"
}

#未完成的功能
1. 收藏电影到data_storage
点击任意电影获取storage，取出storage中的收藏列表，取出电影对应的收藏字段，如果是true就已收藏如果false就是收藏，点击toggle这个值，并且付给按钮，同时保存到storage里对应的电影收藏字段
2. 展示收藏的电影列表
