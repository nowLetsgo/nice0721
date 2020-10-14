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

/* 
    create：创建操作
        - create方法第一个参数是一个对象（添加一条数据的时候）或一个数组（当添加多条数据的时候），第二个参数是回调函数
        - 当前create方法也可以返回promise对象，就可以不用书写回调函数了

*/
/* Teacher.create({
    name: "王八",
    age: "22",
    sex: "男",
    hobby: ["写代码", "洗头发"],
    createTime: Date.now()
}, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("添加文档成功")

}) */
/* 
const result = Teacher.create([{
        name: "李二",
        age: "24",
        sex: "女",
        hobby: ["吃饭", "扫地"],
        createTime: Date.now()
    },
    {
        name: "李三",
        age: "5",
        sex: "男",
        hobby: ["拖地", "洗碗"],
        createTime: Date.now()
    }
])

console.log(result);
result.then((value) => {
    console.log(value) //添加成功以后，value就是添加的数据
}).catch((err) => {
    console.log(err);
}) */



/* 
    find查找：
        find方法返回一个promise对象，promise对象中的值就是查找到的值


*/
/* const result = Teacher.find({
    age: {
        $lt: 20
    }
})
result.then((value) => {
    console.log(value);
}).catch((err) => {
    console.log(err)
}) */


/* 
    update--改

*/

/* const result = Teacher.updateMany({}, {
    $inc: {
        age: 1
    }
})
result.then((value) => {
    console.log(value);
}).catch((err) => {
    console.log(err)
}) */


/* 
    delete:删除

*/
const result = Teacher.deleteOne({
    name: "王八"
});
result.then((value) => {
    console.log(value);
}).catch((err) => {
    console.log(err)
})