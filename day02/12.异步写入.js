const fs = require("fs");
const path = require("path");

//同步写入文件

//获取被写入文件的路径
const filePath = path.resolve(__dirname, "./01.txt");

//异步读取文件(异步方法没有返回值，都在回调函数的参数中)
const fd = fs.open(filePath, "a", (err, fd) => {
    //错误优先处理机制
    if (err) {
        console.log(err);
        return;
    }
    console.log("文件打开成功")
    //异步写入文件
    fs.write(fd, "蛋黄的长裙！", (err) => {
        if (err) {
            console.log(err);
        }
        console.log("文件写入成功")
        //异步关闭文件
        fs.close(fd, (err) => {
            if (err) {
                console.log(err);
            }
            console.log("文件关闭成功")
        });
    })
})