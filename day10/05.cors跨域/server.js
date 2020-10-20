const express = require("express");
//注册一个服务
const app = express();

app.use(express.static("./public"));

//获取post请求体 挂载到req上  只能处理urlencoded编码格式的请求
app.use(express.urlencoded({
    extended: true
}))

//获取post请求体，并挂载到req上  只能处理json字符串格式的请求
app.use(express.json());

app.get("/user", (req, res) => {
    console.log(req.headers);
    //cors跨域
    // res.set("Access-Control-Allow-Origin", "*")


    //设置白名单
    const safeUrl = ["http://127.0.0.1:5500", "http://baidu.com"];
    const userURL = req.headers.origin;
    if (safeUrl.includes(userURL)) {
        res.set("Access-Control-Allow-Origin", userURL)

        /* 
            Access-Control-Allow-Credentials: true
            当请求是非get的时候，或者请求头有特殊字段的时候,浏览器会发送一个预检请求（请求方式是options）
            预检请求检查当前是否允许跨域，如果不行 则直接拒绝不在发送
            Access-Control-Allow-Headers：x-class0721-hello
            允许以上设置的请求头字段可以跨域
            Access-Control-Allow-Methods: GET, OPTIONS, HEAD, PUT, POST、
            允许跨域请求的方法
            Access-Control-Allow-Origin: https://juejin.im
            允许跨域请求的地址
            Access-Control-Max-Age: 1800
            预检请求的缓存时间
        */
    }

    res.send("");
})


//启动服务
app.listen(3000, (err) => {
    if (err) {
        console.log("服务器启动错误" + err);
        return;
    }
    console.log("服务器启动成功 http://127.0.0.1:3000");
})