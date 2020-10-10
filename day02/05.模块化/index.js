//引入自定义模块，直接书写路径，可以省略后缀
const add = require("./add");
//引入nodejs自有模块
const fs = require("fs");
//引入第三方模块
const $ = require("jquery");
console.log($)

/* const download = require("download-git-repo");
download("github:https://github.com/nowLetsgo/today.git", "test", err => {
    console.log(err);
}) */


const os = require("os");
const mem = os.freemem() / os.totalmem() * 100;
console.log(`内存剩余空间${mem.toFixed(2)}%`);