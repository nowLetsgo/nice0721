//1 2  10 5  6 8 9 3
const p1 = () => (new Promise((resolve, reject) => {
    console.log(1);
    let p2 = new Promise((resolve, reject) => {
        console.log(2);
        const timeOut1 = setTimeout(() => {
            console.log(3);
            resolve(4);
        }, 0)
        resolve(5)
    })
    resolve(6);
    p2.then((arg) => {
        console.log(arg);
    })
}));

const timeOut2 = setTimeout(() => {
    console.log(8);
    const p3 = new Promise(reject => {
        reject(9);
    }).then(res => {
        console.log(res);
    })
}, 0)

p1().then((arg) => {
    console.log(arg);
})
console.log(10)