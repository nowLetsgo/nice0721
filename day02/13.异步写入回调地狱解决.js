const fs = require("fs");
const path = require("path");

//获取被写入文件的路径
const filePath = path.resolve(__dirname, "./01.txt");


function openFile() {
    return new Promise((resolve, reject) => {
        fs.open(filePath, "a", (err, fd) => {
            //错误处理 如果错误则返回一个失败的promise对象 并把错误信息返回
            if (err) {
                reject(err);
            }
            //如果成功 则把fd返回出去
            resolve(fd);
        })
    });
}

function writeFile(fd) {
    return new Promise((resolve, reject) => {
        fs.write(fd, "锄禾日当午！", (err) => {
            if (err) {
                reject(err);
            }
            resolve()
        })
    })
}

function closeFile(fd) {
    return new Promise((resolve, reject) => {
        fs.close(fd, (err) => {
            if (err) {
                reject(err)
            }
            resolve();
        })
    })
}

(async () => {
    //await的返回值是后边等待的promise对象成功值
    const fd = await openFile();
    await writeFile(fd);
    await closeFile(fd);
})().then(() => {
    console.log("成功")
}).catch((err) => {
    console.log("err:" + err)
})