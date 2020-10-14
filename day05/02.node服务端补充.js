const http = require("http");
//querystring库可以处理查询字符串为对象
const qs = require("querystring");


const server = http.createServer((request, response) => {
    //处理favicon的请求
    if (request.url === '/favicon.ico') return response.end();


    //得到请求地址
    console.log(request.url)
    //得到请求方式
    console.log(request.method)

    /* //获取用户get请求发送过来的数据
    const resulte = request.url.split("?")[1].split("&").reduce((p, c) => {
        const [key, value] = c.split("=");
        p[key] = value;
        return p;
    }, {})
    console.log(resulte); */

    // querystring的使用
    const re = qs.parse(request.url.split("?")[1]);
    console.log(re);

    //在返回相应之前，需要设置响应头中的数据格式
    response.setHeader("Content-Type", "text/plain;charset=utf-8")
    //返回相应
    response.end("<h1>湖人总冠军</h1>");
})


const port = 3000;
const host = "localhost";
server.listen(port, host, (err) => {
    if (err) {
        console.log("服务器启动失败：" + err);
        return;
    }
    console.log(`服务器启动成功:请访问 http://${host}:${port}`)
})