//4  3  1 2
process.nextTick(() => {
    console.log('process.nextTick() 333'); //微任务 优先
})

setTimeout(() => {
    console.log('setTimeout()  111'); //宏任务
}, 0)

setImmediate(() => {
    console.log('setImmediate() 222'); //宏任务
})

console.log('全局代码执行完了 444'); //同步