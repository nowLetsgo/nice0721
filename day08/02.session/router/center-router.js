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
    if (req.session) {
        const re = await userInfo.findOne({
            _id: req.session.userID
        })
        //判断当前user是否存在
        if (re) {
            res.sendFile(resolve(__dirname, "../center/center.html"))
            return;
        }
    }

    //失败状态
    res.status(401).send("你没有权限访问");

})
module.exports = router;