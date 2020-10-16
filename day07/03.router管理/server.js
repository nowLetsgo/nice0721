const express = require("express");
const router = require("./router")

//注册一个服务
const app = express();

//把外边写好的路由管理 挂载到app上
app.use(router);

//启动服务
app.listen(3000, (err) => {
    if (err) {
        console.log("服务器启动错误" + err);
        return;
    }
    console.log("服务器启动成功 http://127.0.0.1:3000")
})