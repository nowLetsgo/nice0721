const fs = require("fs");
const path = require("path");

//获取被写入文件的路径
const filePath = path.resolve(__dirname, "./01.txt");

//简单写入 writeFile
fs.writeFile(filePath, "锄禾日当午", {
    flag: "a"
}, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("文件快速写入成功")
})