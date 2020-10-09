// console.log(global);
setTimeout(() => {
    console.log("timeout")
}, 1000)

//setImmediate:立即执行函数，异步代码，当同步代码执行完成后会立即调用
setImmediate(() => {
    console.log("Immediate");
})

//异步代码 这个是语义化的微任务设置 立即执行函数
queueMicrotask(() => {
    console.log("queueMicrotask");
})

console.log("global")

//立即执行函数，也是一个微任务。但是优先一切异步代码执行。当同步代码执行完成直接就执行nextTick
process.nextTick(() => {
    console.log("nextTick")
})