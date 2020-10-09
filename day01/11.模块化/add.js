function add(...rest){
    return rest.reduce((p,c)=>{return p+c},0)
}
// module.exports对象就是你要暴露出去的对象
// 给module.exports扩展了一个add的方法
// module.exports.add = add;

//把module.exports 暴露的对象 直接变为了add 其实就是直接暴露出去了add方法
module.exports = add;