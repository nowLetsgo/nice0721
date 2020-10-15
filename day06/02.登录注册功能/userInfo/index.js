const mongoose = require("mongoose")
//创建一个集合的约束
//实例化mongoose.schema,传入约束对象进行约束
//并不是直接对某个集合做约束，而是写好一个约束以后给某个集合使用
//返回一个schema对象
const UserInfoSchema = new mongoose.Schema({
    user: String,
    pass: String
})

module.exports = UserInfoSchema;