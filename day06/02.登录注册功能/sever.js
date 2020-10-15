const express = require("express");

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

//注册的接口
app.get("/register", async (req, res) => {
    /* 
        1.获取用户数据
        2.判断是否已经注册
        3.如果没有注册，则保存在数据库
        4.返回相应
    */

    // 1.获取用户数据
    // console.log(req.query)//{ user: '123', pass: '456' }
    const {
        user,
        pass
    } = req.query;
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
        pass: pass[0]
    })
    console.log(saveResult);

    res.send("注册成功");
})

app.listen(3000, (err) => {
    if (err) {
        console.log("服务器启动错误" + err);
        return;
    }
    console.log("服务器启动成功 http://127.0.0.1:3000")
})