//入口文件 index.js  main.js
// 有三种模块：自定义模块、第三方模块、nodejs模块
// 使用require方法来引入模块,其实引入的是module.exports所代表的对象
// 在使用引入模块的时候，一定要清晰的知道当前的模块是怎么暴露的
/* const {add} = require("./add.js");
console.log(add(1,2,3,4,5)) */

const add = require("./add.js");
console.log(add(1,2,3,4,5)) 

const {mins} = require("./mins.js")
console.log(mins(4,1))
