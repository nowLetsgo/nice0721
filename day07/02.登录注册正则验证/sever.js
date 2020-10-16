const express = require("express");
const {
    resolve
} = require("path");

//引入mongoose模块
const mongoose = require("mongoose")

//连接数据库模块
require("./db")

//userInfo集合约束模块
const UserInfoSchema = require("./userInfo");

//创建一个对userInfo集合的引用
const userInfo = mongoose.model("userInfo", UserInfoSchema);

//注册一个服务
const app = express();

//中间件：处理post的请求体 挂载在req对象的body属性上
app.use(express.urlencoded({
    extended: true
}))
app.use(express.static("./public"))

//正则校验中间件
app.use((req, res, next) => {
    //因为有的校验是校验登录，有的是校验注册，所以先获取当前是登录请求还是注册请求
    const isRegisterReq = req.url === '/register' ? true : false;

    const {
        user,
        pass
    } = req.body;
    //正则
    const userReg = /^[A-Z]\w{5,9}$/g;
    const passReg = /\d{6,8}/g;

    //无论是登录还是注册请求 都会进行用户名正则校验
    if (!userReg.test(user)) {
        return res.send("用户名必须是 大写字母开头 后边跟数字字母下划线  总长度6-10位");
    }

    //只有注册请求才会进行密码正则校验
    if (isRegisterReq && !passReg.test(pass)) {
        return res.send("密码必须是 6-8位的数字");
    }

    //如果校验规则通过 则执行下一个路由
    next();
})

//注册的接口
app.post("/register", async (req, res) => {
    /* 
        1.获取用户数据
        2.判断是否已经注册
        3.如果没有注册，则保存在数据库
        4.返回相应
    */

    // 1.获取用户数据
    console.log(req.body) //{ user: '123', pass: '456' }
    const {
        user,
        pass
    } = req.body;
    console.log(user, pass)

    // 2.判断是否已经注册
    //find返回的是一个数组，findOne返回的是查找的对象
    //find查找不到返回空数组  findOne查找不到 返回null
    const isHasUser = await userInfo.findOne({
        user
    });
    console.log(isHasUser);
    if (isHasUser) {
        if (isHasUser.user === user) {
            res.send("用户名被注册");
            return;
        }
    }


    //3.保存在数据库
    const saveResult = await userInfo.create({
        user,
        pass
    })
    console.log(saveResult);

    //4.返回相应
    // res.send("注册成功");
    //注册成功后直接跳转登录页面
    res.redirect("http://127.0.0.1:3000/login.html")
})

//登录的接口
app.post("/login", async (req, res) => {
    /* 
        1.获取用户的数据
        2.判断是否存在当前用户名
        3.判断密码是否正确
        4.返回成功相应
    */

    // 1. 获取用户的数据
    const {
        user,
        pass
    } = req.body;

    //2.判断用户名是否存在
    const isHasUser = await userInfo.findOne({
        user
    });
    console.log(isHasUser);
    if (!isHasUser) return res.send("用户名不存在");

    //3.判断密码是否正确
    //isHasUser其中已经包含的密码
    if (isHasUser.pass === pass) {
        res.send("登录成功")
    } else {
        res.send("密码错误")
    }
})

//启动服务
app.listen(3000, (err) => {
    if (err) {
        console.log("服务器启动错误" + err);
        return;
    }
    console.log("服务器启动成功 http://127.0.0.1:3000")
})