const express = require("express");
const ejs = require("ejs");
const {
    response
} = require("express");
const app = express();

//给app设置模板引擎格式
app.set("view engine", "ejs");
//设置模板储存位置
app.set("views", "views")



app.get("/single", (req, res) => {
    //定义模板的数据
    const data = {
        name: "<strong>lucy</strong>",
        age: "<strong>18</strong>"
    }

    //res.render  把数据和模板合在一起渲染 并返回响应
    res.render("./single.ejs", data);
})

app.get("/more", (req, res) => {
    //定义模板的数据 多个数据写成这样，可以直接拿到user进行遍历
    const data = {
        user: [{
            name: "lucy",
            age: 18
        }, {
            name: "lily",
            age: 10
        }, {
            name: "xiaoming",
            age: 28
        }]
    }

    //res.render  把数据和模板合在一起渲染 并返回响应
    res.render("./more.ejs", data);
})


//启动服务
app.listen(3000, (err) => {
    if (err) {
        console.log("服务器启动错误" + err);
        return;
    }
    console.log("服务器启动成功 http://127.0.0.1:3000")
})