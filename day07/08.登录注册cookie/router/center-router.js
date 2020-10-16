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


//个人中心验证
router.get("/center.html", async (req, res) => {
    console.log(req.cookies);
    const {
        userID
    } = req.cookies;
    const isHasUser = await userInfo.findOne({
        _id: userID
    });
    if (isHasUser) {
        res.sendFile(resolve(__dirname, "../center/center.html"))
        return;
    } else {
        res.send("拒绝访问")
    }
})
module.exports = router;