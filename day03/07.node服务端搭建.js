const http = require("http");
const qs = require("querystring");

//创建一个服务
//createServer的回调函数的形参分别是request和response,代表请求和响应
const server = http.createServer((request, response) => {
    if (request.url === '/favicon.ico') return response.end();
    console.log(request.url)
    /* 
    const re = request.url.split("?")[1].split("&").reduce((p, c) => {
        const [key, value] = c.split("=");
        p[key] = value;
        return p;
    }, {})
    console.log(re); */

    const re = qs.parse(request.url.split("?")[1]);
    console.log(re);


    //在返回相应之前，需要设置响应头中的数据格式
    response.setHeader("Content-Type", "text/plain;charset=utf-8")
    //返回相应
    response.end("<h1>湖人总冠军</h1>");
})

//启动服务 使用listen方法，三个参数：端口号，主机地址/域名地址，回调函数
//本地的主机地址：localhost\127.0.0.1 或者是局域网地址 或者是服务器地址
const port = 3000;
const host = "localhost";
server.listen(port, host, (err) => {
    if (err) {
        console.log("服务器启动失败：" + err);
        return;
    }
    console.log(`服务器启动成功:请访问 http://${host}:${port}`)
})