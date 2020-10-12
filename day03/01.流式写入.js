const fs = require("fs");
const path = require("path");

//拼接路径
const filePath = path.resolve(__dirname, "./01.txt");

//创建一个可写流
const ws = fs.createWriteStream(filePath);

//分批次写入
ws.write("锄禾日当午1！");
ws.write("锄禾日当午2！");
ws.write("锄禾日当午3！");
ws.write("锄禾日当午4！");

//写完之后要关闭管道
// ws.close();//关闭末尾，可能会丢失数据
ws.end(); //关闭开头，常用

//可写流有open和close事件 监听可写流的开启和关闭
ws.on("open", () => {
    console.log("open啦")
})
ws.on("close", () => {
    console.log("close啦")
})