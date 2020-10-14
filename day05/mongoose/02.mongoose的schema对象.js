//引入mongoose包
const mongoose = require("mongoose");

//连接MongoDB数据库
//connect第一个参数：mongodb://域名:端口号/连接的数据库名称
mongoose.connect("mongodb://127.0.0.1:27017/atguigu", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//对mongoose对象的connection对象绑定事件，当数据库连接的时候会触发open事件
mongoose.connection.once("open", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("MongoDB连接成功")
})


//创建一个集合的约束
//实例化mongoose.schema,传入约束对象进行约束
//并不是直接对某个集合做约束，而是写好一个约束以后给某个集合使用
//返回一个schema对象
const teacherSchema = new mongoose.Schema({
    //name字段是字符串格式
    // name: String,
    name: {
        type: String, //类型是字符串
        unique: true,
        required: true,
    },

    //age字段必须是number格式
    age: Number,
    sex: String,
    //兴趣必须是数组格式
    // hobby: Array,
    hobby: [String], //数组的值必须都是字符串
    //创建时间字段必须是 时间对象
    createTime: {
        type: Date,
        default: Date.now
    },
})

//model对象就相当于集合 对集合操作
//创建model对象（teacher集合），并传入约束
const Teacher = mongoose.model("teacher", teacherSchema);

//创建document对象（创建文档）
//实例化model对象，并传入初始值
new Teacher({
    name: "赵四",
    age: "21",
    sex: "女",
    hobby: ["喝酒", "烫头"],
    createTime: Date.now()
}).save((err) => {
    if (err) {
        console.log("初始化文档错误" + err);
        return;
    }
    console.log("初始化文档成功")
})