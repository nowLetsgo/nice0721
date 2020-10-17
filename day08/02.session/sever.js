const express = require("express");

//引入seesion设置的包 和 依赖的session设置到数据库的包
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

//连接数据库模块
require("./db")

//引入正则校验路由
const userRegRouter = require("./router/userReg-router");
//引入登录注册路由
const userRouter = require("./router/user-router");
//引入个人中心路由
const centerRouter = require("./router/center-router");


//注册一个服务
const app = express();

//session设置的配置中间件
app.use(session({
    secret: 'keyboard cat',
    saveUninitialized: false, // don't create session until something stored
    resave: false, //don't save session if unmodified
    store: new MongoStore({
        url: 'mongodb://127.0.0.1:27017/atguigu',
        ttl: 14 * 24 * 60 * 60 // = 14 days. Default
    }),
    cookie: {
        maxAge: 14 * 24 * 60 * 60,
        httpOnly: true
    }
}));



const ejs = require("ejs");
//给app设置模板引擎格式
app.set("view engine", "ejs");
//设置模板储存位置
app.set("views", "views")

//中间件：处理post的请求体 挂载在req对象的body属性上
app.use(express.urlencoded({
    extended: true
}))
app.use(express.static("./public"))

app.use(centerRouter);

//正则校验中间件
app.use(userRegRouter)

//引入登录注册管理的中间件
app.use(userRouter)

//启动服务
app.listen(3000, (err) => {
    if (err) {
        console.log("服务器启动错误" + err);
        return;
    }
    console.log("服务器启动成功 http://127.0.0.1:3000")
})