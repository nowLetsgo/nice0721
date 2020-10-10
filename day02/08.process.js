/* 
    process:不需要require引入  负责进程相关的东西

*/

/* 
    //获取启动命令的 node路径 和 文件路径  启动命令的其他值
    [
    'C:\\Program Files\\nodejs\\node.exe',
    'C:\\Users\\lipeihua\\Desktop\\nice0721\\day02\\08.process.js',
    '-hello'
    ]
*/
console.log(process.argv);
if (process.argv.includes("-hello")) {
    console.log("欢迎光临");
} else if (process.argv.includes("-world")) {
    console.log("滚")
}

console.log(process.argv0);


//cwd返回当前 node 的工作目录
console.log(process.cwd());
console.log(__dirname);

let a = 1;
setInterval(() => {
    a++;
    if (a > 6) {
        process.exit("");
    }
    console.log(a)
}, 500)