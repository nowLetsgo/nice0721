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

app.get("/userinfo", (req, res) => {
    //得到请求体
    console.log(req.query);

    //响应一个json数据
    res.json({
        name: "xiaowang",
        age: 21
    })
})
app.post("/userinfo", (req, res) => {
    //得到post请求的请求体
    console.log(req.body);

    //响应一个json数据
    res.json({
        name: "xiaozhang",
        age: 12
    })
})

//启动服务
app.listen(3000, (err) => {
    if (err) {
        console.log("服务器启动错误" + err);
        return;
    }
    console.log("服务器启动成功 http://127.0.0.1:3000");
})