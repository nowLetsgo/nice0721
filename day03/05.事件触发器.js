//引入events模块
const EventEmitter = require('events');

//定一个一个新的类 继承引入的EventEmitter类
class MyEmitter extends EventEmitter {}

//因为模块返回的是一个类，所以实例化以后才能够使用
const myEmitter = new MyEmitter();

//实例化对象有一个方法on  可以让我们自定义一个事件
/* myEmitter.on('hello', () => {
    console.log('hello world');
}); */
myEmitter.once('hello', () => {
    console.log('hello world');
});

//实例化对象有一个emit的方法，可以触发你自定义的某个事件
myEmitter.emit('hello');

setTimeout(() => {
    myEmitter.emit("hello")
}, 2000)