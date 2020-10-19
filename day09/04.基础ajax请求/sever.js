const express = require("express");
//注册一个服务
const app = express();

app.use(express.static("./public"));

app.get("/userinfo", (req, res) => {
    //得到请求体
    console.log(req.query);

    //响应一个json数据
    res.json({
        name: "xiaowang",
        age: 18
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