/* 
    POST请求报文：
        请求报文首行
            POST http://192.168.20.25:3000/ HTTP/1.1
        
        请求报文头部
            Host: 192.168.20.25:3000
            Connection: keep-alive
            - 请求数据的字节长度
            Content-Length: 25
            Cache-Control: max-age=0
            Upgrade-Insecure-Requests: 1
            Origin: null
            - 请求的MIME类型 form表单请求
            Content-Type: application/x-www-form-urlencoded
            User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36
            Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,* /*;q=0.8,application/signed-exchange;v=b3;q=0.9
            Accept-Encoding: gzip, deflate
            Accept-Language: zh,zh-TW;q=0.9,en-US;q=0.8,en;q=0.7
        请求报文空行

        请求报文体
            user=lipeihua&pass=123456

*/

/* 
    POST的响应报文
        HTTP/1.1 200 OK
        Content-Type: text/html;charset=utf-8
        Date: Mon, 12 Oct 2020 08:39:32 GMT
        Connection: keep-alive
        Keep-Alive: timeout=5
        Content-Length: 24

        <h1>湖人总冠军</h1>


*/