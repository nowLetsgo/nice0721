// require("jquery")
// console.log(module)
/* 
    module对象的exports对象就是模块暴露的对象

    exports  引用地址指向了 module.exports
*/
const {
    JSDOM
} = require("jsdom");

const {
    window
} = new JSDOM("");
const $ = require("jquery")(window);
console.log($.each);