const express = require("express");

//通过express对象的Router方法 创建一个路由管理
//把所有的路由和中间件全部绑定在路由管理上
//然后再把路由暴露出去给到app
const router = new express.Router()
//正则校验中间件
router.use((req, res, next) => {
    console.log("user");
    next();
})

//注册的接口
router.get("/register", async (req, res) => {
    res.send("注册接口")
})

//登录的接口
router.get("/login", async (req, res) => {
    res.send("登录接口")
})

module.exports = router;