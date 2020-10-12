const fs = require("fs");
const path = require("path");

//拼接路径
const readFilePath = "C:\\Users\\lipeihua\\Desktop\\class0721\\day28-nodeJS\\02.可写流.mp4";
const writeFilePath = path.resolve(__dirname, "./a.mp4")
//创建一个可读流
const rs = fs.createReadStream(readFilePath);
//创建一个可写流
const ws = fs.createWriteStream(writeFilePath)

//pipe方法就是管道  可以直接把可读流通过管道写入可写流
rs.pipe(ws);