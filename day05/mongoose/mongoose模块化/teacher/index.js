const mongoose = require("mongoose")
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

module.exports = teacherSchema;