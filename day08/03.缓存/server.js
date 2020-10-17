const express = require("express");
const {
    resolve
} = require("path");
const fs = require("fs");
//注册一个服务
const app = express();

app.get("/", (req, res) => {
    const filePath = resolve(__dirname, "./public/index.html")
    const rs = fs.createReadStream(filePath)

    res.set("Content-Type", "text/html;charset=utf-8")
    rs.pipe(res);
})

app.get("/js/index.js", (req, res) => {
    const filePath = resolve(__dirname, "./public/js/index.js")
    const rs = fs.createReadStream(filePath)

    //设置强制缓存 http1.1
    res.set("cache-control", "max-age=10");

    //设置强制缓存 http1.0
    res.set("expires", new Date(Date.now() + 1000 * 3600).toGMTString())

    res.set("Content-Type", "application/javascript;charset=utf-8")
    rs.pipe(res);
})


//启动服务
app.listen(3000, (err) => {
    if (err) {
        console.log("服务器启动错误" + err);
        return;
    }
    console.log("服务器启动成功 http://127.0.0.1:3000")
})