x = 'http%3A%2F%2F127.0.0.1%3A3000%2Fwechat_login'

y = decodeURIComponent(x)
console.log(y)
z = 'http%3A//127.0.0.1%3A5000/wechat_login'
// m = encodeURIComponent(z)
m = decodeURIComponent(z)
console.log(m)
// let host = `http://127.0.0.1:3000`
// // 授权后重定向url地址 注意是编码后url，不编码#后面的参数会消失
// let redirectUrl = encodeURIComponent(`${host}/wechat_login`)
// console.log(redirectUrl)

// var http = require('http')

// var server = http.createServer(function(req, res) {
//   res.writeHead(301, { Location: 'http://www.baidu.com/' })
//   console.log(res._header)
//   res.end()
// })

// server.listen(3001)
