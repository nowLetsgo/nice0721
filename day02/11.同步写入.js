const fs = require("fs");
const path = require("path");

//同步写入文件

//获取被写入文件的路径
const filePath = path.resolve(__dirname, "./01.txt");

//1.同步打开文件
/* 
    openSync:返回值就是打开的文件标识
    flags:
        'a': 打开文件用于追加。 如果文件不存在，则创建该文件。
        'r': 打开文件用于读取。 如果文件不存在，则会发生异常
        'w': 打开文件用于写入。 如果文件不存在则创建文件，如果文件存在则截断文件
*/
const fd = fs.openSync(filePath, "a");
console.log(fd) //文件标识

/* 
    writeSync:写入已经打开的文件
*/
fs.writeSync(fd, "蛋黄的长裙~")

/* 
    关闭文件 closeSync
*/
fs.closeSync(fd);