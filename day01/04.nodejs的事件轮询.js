/* 
    nodeJS的事件轮询：
        1.nodeJS使用了第三方库libuv，nodeJS会把一些异步操作（I/O、文件的读写）交给libuv处理。nodejs的主线程没有必要等待，可以继续处理其他事情。
        2.libuv会开启多个线程去执行这些异步操作，当异步代码操作完毕以后，会把回调函数放到回调队列中，主线程在适当的时候回去轮询回调队列。

        3.nodeJs把异步代码分为了两大类，分别是微任务和宏任务。微任务优先宏任务执行。

        4.宏任务也是根据异步代码不同，而产生多种回调队列，nodejs会依次轮询这几个回调队列：timers、pendding callback、idle、poll、check、close

*/

/* 

    宏任务的轮询顺序
        1.timers阶段：处理setTimeout和setInterval的回调函数
        2.pedding阶段：处理系统级别操作的回调函数
        3.idle阶段：处理nodejs内部的回调函数
        4.poll阶段：处理I/O或者网络请求等异步操作的回调函数
            - 当poll阶段不为空的时候，那么执行完回调函数，就继续执行下个阶段check了
            - 当poll阶段为空，会一直等待poll中有其他的回调函数
                - 当时当 timer阶段的计时器到期了，或者check阶段有setImmediate等待执行的时候，会直接跳入check阶段
        5.check阶段：setImmediate的回调函数
        6.close阶段：执行一些关闭的函数

*/