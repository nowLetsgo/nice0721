const express = require("express");
const {
    resolve
} = require("path");

//创建application对象
const app = express();

//官方静态资源服务器 中间件 可以直接访问当前文件夹中的所有静态资源
//ex: http://localhost:3001/db/index.js
app.use(express.static("./02.登录注册功能"))

//express.urlencoded({extended: true})  可以将req对象处理，比如可以直接通过req.body获取请求体
app.use(express.urlencoded({
    extended: true
}))

/* app.use((req, res) => {
    console.lohg('123');
    next();
})
//错误处理中间件
app.use((err, req, res, next) => {
    console.log(err + "11111");
}) */

app.post("/ppp", (req, res) => {
    // req.body是接受报文体数据
    // console.log(req.query);//只能接受查询字符串
    console.log(reqs.body);
})




app.use((req, res, next) => {
    if (req.url === '/favicon.ico') return res.send();

    // res.send("我是中间件");
    console.log("中间件");

    //中间件可以给req或res扩展属性和方法
    req.xxx = "xxx";
    next();
})

app.get("/user", (req, res) => {
    console.log(req.xxx);
    res.send("当前在user目录")
})


app.get("/:id", (req, res) => {})


app.get("/", (req, res) => {})






//启动服务
app.listen(3001, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("服务器启动成功 http://localhost:3001")
})