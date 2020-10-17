const express = require("express");
const router = new express.Router();
router.use((req, res, next) => {
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
        // return res.send("用户名必须是 大写字母开头 后边跟数字字母下划线  总长度6-10位");
        const errData = {
            errMes: "用户名必须是 大写字母开头 后边跟数字字母下划线  总长度6-10位",
            errPassMes: ""
        }
        if (isRegisterReq) {
            res.render("register.ejs", errData)
            return;
        } else {
            res.render("login.ejs", errData)
            return;
        }

    }

    //只有注册请求才会进行密码正则校验
    if (isRegisterReq && !passReg.test(pass)) {
        const errData = {
            errMes: "",
            errPassMes: "密码必须是 6-8位的数字"
        }
        res.render("register.ejs", errData)
        return;
    }

    //如果校验规则通过 则执行下一个路由
    next();
})

module.exports = router;

