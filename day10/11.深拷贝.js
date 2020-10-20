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

//浅拷贝
/* const obj1 = Object.assign({}, obj);
obj1.name = "xiaoli";
obj1.hobby.one = "抽烟";
console.log(obj) */


// 封装一个检测数据类型的方法
function checkType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1);
}

function deepClone(obj) {
    let re;
    if (checkType(obj) === "Object") {
        re = {}
    } else if (checkType(obj) === "Array") {
        re = [];
    } else {
        return obj
    }

    for (let i in obj) {
        re[i] = deepClone(obj[i])
    }
    return re;
}

const newObj = deepClone(obj);
newObj.hobby.one = "抽烟";
console.log(obj);