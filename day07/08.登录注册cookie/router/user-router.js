const express = require("express");
const router = new express.Router();
var cookieParser = require('cookie-parser')
router.use(cookieParser())

const {
    resolve
} = require("path");

//引入数据库操作的内容
//引入mongoose模块
const mongoose = require("mongoose")
//userInfo集合约束模块
const UserInfoSchema = require("../userInfo");
//创建一个对userInfo集合的引用
const userInfo = mongoose.model("userInfo", UserInfoSchema);


//注册的接口
router.post("/register", async (req, res) => {
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
    res.sendFile(resolve(__dirname, "./center/center.html"))
})

//登录的接口
router.post("/login", async (req, res) => {
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
        //成功登录的时候，设置重定向到个人中心页面

        //并设置cookie 方便以后免密登录
        res.cookie("userID", isHasUser._id, {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            httpOnly: true //禁止客户端使用document.cookie访问cookie数据
        })
        res.sendFile(resolve(__dirname, "../center/center.html"));
        return;
    } else {
        res.send("密码错误")
    }
})


module.exports = router;