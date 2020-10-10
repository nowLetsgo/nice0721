//1 2 9 4 10 13 3 15 16 5 6 8 7
console.log(1);
new Promise(function (resolve) {
    resolve();
    console.log(2);
    setTimeout(function () {
        console.log(3);
    }, 0);
    Promise.resolve().then(function () {
        console.log(4);
        setTimeout(function () {
            console.log(5);
        }, 0);
        setTimeout(function () {
            (async function () {
                console.log(6);
                return function () {
                    console.log(7);
                };
            })().then(function (fn) {
                console.log(8);
                fn();
            });
        }, 0);
    });
    new Promise(function (resolve) {
        console.log(9);
        resolve();
    }).then(function () {
        new Promise(function (resolve, reject) {
            console.log(10);
            reject();
        }).then(function () {
            setTimeout(function () {
                console.log(11);
            }, 0);
            console.log(12);
        }).catch(function () {
            console.log(13);
        });
    });
});
setTimeout(function () {
    console.log(15);
    Promise.resolve().then(function () {
        console.log(16);
    });
}, 0);