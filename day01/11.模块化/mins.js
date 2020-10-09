function mins(a,b){
    return a-b;
}

//nodejs还提供了一个简易的暴露方式 直接使用exports
//exports对象 指向的其实就是moudle.exports对象
exports.mins = mins;
//千万不要直接把对象赋值给exports，因为exports本身指向的是module.exports对象，如果你直接赋值的话，就把exports对象的指向修改了。但是模块只能暴露moudule.exports的对象
// exports = mins;