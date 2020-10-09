//promise end  then1 then2 setTimeout
setTimeout(() => {
    console.log('setTimeout') //宏任务
}, 0)

new Promise((resolve) => {
        console.log('promise') //同步
        resolve()
    })
    .then(() => {
        console.log('then1') //微任务
    })
    .then(() => {
        console.log('then2') //微任务
    })

console.log('end') //同步 