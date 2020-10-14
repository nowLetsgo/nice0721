const mongoose = require("mongoose")
require("./db")
const teacherSchema = require("./teacher");



//model对象就相当于集合 对集合操作
//创建model对象（teacher集合），并传入约束
const Teacher = mongoose.model("teacher", teacherSchema);
Teacher.create({
    name: "张七",
    age: "21",
    sex: "男",
    hobby: ["写代码", "洗头发"],
    createTime: Date.now()
}).then((value) => {
    console.log(value);
}).catch((err) => {
    console.log(err);
})