//path模块主要负责处理路径 需要require引入
const path = require("path");

//没有参数的时候，默认是当前文件夹所在绝对路径
const filePath = path.resolve("./test", "../txt/hello");
console.log(filePath)

//获取兄弟08文件的绝对路径
const filePath1 = path.resolve(__dirname, "08.process.js");
console.log(filePath1)