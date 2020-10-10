// 1 2 19 3 5 4 20 9 10 11 17 13 12 6 7 16  8  15 14
console.log(1); //
new Promise((res, rej) => {
    console.log(2); //
    res();
}).then(() => {
    console.log(3); //
    Promise.resolve().then(() => {
        console.log(5);
        setTimeout(function () {
            console.log(6); //
            Promise.resolve().then(function () {
                console.log(7);
            });
            setTimeout(function () {
                console.log(8);
            }, 0);
        }, 0);
    });
}).then(() => {
    console.log(4);
});

new Promise((res) => {
    console.log(19); //
    setTimeout(() => {
        console.log(20); //
    }, 0);
});
Promise.resolve().then(() => {
    setTimeout(() => {
        Promise.resolve().then(() => {
            console.log(12);
        });
        console.log(13); //
    }, 0);
});
setTimeout(() => {
    console.log(9); //
    new Promise((res) => {
        res();
        console.log(10);
    }).then(() => {
        console.log(11);
    });
});
setTimeout(() => {
    setTimeout(() => {
        setTimeout(() => {
            Promise.resolve().then(() => {
                console.log(14);
            });
            console.log(15);
        }, 0);
        console.log(16);
    }, 0);
    console.log(17); //
}, 0);