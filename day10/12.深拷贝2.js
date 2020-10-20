const obj = {
    name: "xiaowang",
    age: 18,
    hobby: {
        one: "喝酒",
        two: "写代码"
    },
    score: [100, 90, 80],
    do() {
        console.log("eat")
    }
}

//深拷贝 但是不能拷贝函数
const newObj = JSON.parse(JSON.stringify(obj))
console.log(newObj)