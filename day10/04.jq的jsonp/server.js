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
    console.log(req.query);
    //取到回调函数的名字
    const {
        callback
    } = req.query;
    //要发送给前端的数据
    const data = {
        name: "laowang",
        age: 16
    }
    //如果是script标签请求的，当我们返回一个字符串的话，script标签会把这个字符串换成代码解析
    // res.send("alert(1)");
    // 'fn({name:"laowang",age:16})'
    res.send(`${callback}(${JSON.stringify(data)})`)
})

//启动服务
app.listen(3000, (err) => {
    if (err) {
        console.log("服务器启动错误" + err);
        return;
    }
    console.log("服务器启动成功 http://127.0.0.1:3000");
})