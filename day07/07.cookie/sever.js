const express = require("express");
var cookieParser = require('cookie-parser')

var app = express()

app.use(cookieParser())

app.get("/login", (req, res) => {
    //当请求login的时候，就设置一个cookie给客户端
    //cookie在客户端是按照域名和浏览器保存的
    //只要在这个域名下，所有的页面都可以访问到cookie
    //换一个浏览器就不能访问其他浏览器的cookie
    //不同域名不可以互相访问cookie
    res.cookie("userID", "12345", {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true //禁止客户端使用document.cookie访问cookie数据
    })
    res.end("success~");
})
app.get("/center", (req, res) => {
    //如果用户有cookie凭证，则显示数据  否则拒绝访问
    //express-parser可以通过req.cookie 获取到cookie
    console.log(req.cookies);
    const {
        userID
    } = req.cookies;
    if (userID === '12345') {
        res.send("欢迎光临")
    } else {
        res.send("拒绝访问")
    }
})
app.get("/quit", (req, res) => {
    // req.clearCookies("userID");

    //删除cookie其实就是给cookie设置一个过去的时间或者是0
    res.cookie("userID", "XXX", {
        maxAge: 0,
    })
    res.send("退出成功")
})
//启动服务
app.listen(3000, (err) => {
    if (err) {
        console.log("服务器启动错误" + err);
        return;
    }
    console.log("服务器启动成功 http://127.0.0.1:3000")
})