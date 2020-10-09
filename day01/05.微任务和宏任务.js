/* 
    微任务和宏任务：
        1.nodejs把所有的异步操作代码分为了微任务代码和宏任务代码
        2.nodejs会优先执行微任务代码，然后才执行宏任务代码
        3.微任务：process.nextTick，Promise的then\catch\finally、queueMicrotask
        4.process.nextTick一定是最先执行，其他微任务根据书写代码依次执行
        5.在宏任务每次执行下一个阶段之前，都会去检查微任务队列中是否有微任务需要执行，然后才会执行下一个阶段

*/