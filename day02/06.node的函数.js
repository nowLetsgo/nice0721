/* console.log(global);
console.log(module);
console.log(exports); */

/* 
    1.在nodejs中，每个js都包裹了一层函数
*/

/* function fn1() {
    console.log(arguments.callee.toString())
}
fn1() */

//只要arguments能打印出来，就说明 外层包裹了一层函数
// console.log(arguments);
console.log(arguments.callee.toString());
/* 
    外层自动包裹的函数：
    function (exports, require, module, __filename, __dirname) {

    }
    exports：指向的是暴露对象module.exports
    require: 引入
    module：module对象
    __dirname:文件夹绝对路径
    __filename：文件的绝对路径


*/
console.log(__dirname) //C:\Users\lipeihua\Desktop\nice0721\day02
console.log(__filename) //C:\Users\lipeihua\Desktop\nice0721\day02\06.node的函数.js