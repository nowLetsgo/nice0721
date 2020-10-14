//引入mongoose包
const mongoose = require("mongoose");

//连接MongoDB数据库
//connect第一个参数：mongodb://域名:端口号/连接的数据库名称
mongoose.connect("mongodb://127.0.0.1:27017/atguigu", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once("open", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("MongoDB连接成功")

    /* if(!err) console.log("MongoDB连接成功");
    console.log(err); */
})