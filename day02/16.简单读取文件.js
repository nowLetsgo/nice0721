const fs = require("fs");
const path = require("path");

//获取被写入文件的路径
const filePath = path.resolve(__dirname, "./01.txt");

//简单读取 readFile
fs.readFile(filePath, (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
    console.log(data.toString());
})