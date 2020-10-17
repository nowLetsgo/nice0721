const express = require("express");
const eTag = require("etag");
const zlib = require("zlib");
const open = require("./util/open")

//可以改造异步方法 返回promise对象
const {
    promisify
} = require("util");

const {
    resolve
} = require("path");
const fs = require("fs");
//注册一个服务
const app = express();

app.get("/", (req, res) => {
    const filePath = resolve(__dirname, "./public/index.html")
    const rs = fs.createReadStream(filePath)

    res.set("Content-Type", "text/html;charset=utf-8")
    rs.pipe(res);
})

app.get("/js/index.js", (req, res) => {
    const filePath = resolve(__dirname, "./public/js/index.js")
    const rs = fs.createReadStream(filePath)

    //设置强制缓存 http1.1
    res.set("cache-control", "max-age=10");
    //设置强制缓存 http1.0
    res.set("expires", new Date(Date.now() + 1000 * 3600).toGMTString())

    res.set("Content-Type", "application/javascript;charset=utf-8")

    //通过请求头 获取客户端支持的压缩格式
    const acceptEncoding = req.headers['accept-encoding'];
    console.log(acceptEncoding);

    //支持gzip压缩
    if (acceptEncoding.includes("gzip")) {
        //创建一个新的gzip压缩格式 并把流式读取的文件写入
        const fileGzip = rs.pipe(zlib.createGzip());
        //在响应头中添加 一个压缩格式
        res.set("Content-Encoding", "gzip");
        //响应压缩后的文件
        fileGzip.pipe(res);
        return;
    }
    //支持br压缩
    if (acceptEncoding.includes("br")) {
        //创建一个新的gzip压缩格式 并把流式读取的文件写入
        const fileBr = rs.pipe(zlib.createBrotliCompress());
        //在响应头中添加 一个压缩格式
        res.set("Content-Encoding", "br");
        //响应压缩后的文件
        fileBr.pipe(res);
        return;
    }
    //支持deflate压缩
    if (acceptEncoding.includes("deflate")) {
        //创建一个新的gzip压缩格式 并把流式读取的文件写入
        const fileDeflate = rs.pipe(zlib.createDeflate());
        //在响应头中添加 一个压缩格式
        res.set("Content-Encoding", "deflate");
        //响应压缩后的文件
        fileDeflate.pipe(res);
        return;
    }

    rs.pipe(res);
})


app.get("/css/index.css", async (req, res) => {
    const filePath = resolve(__dirname, "./public/css/index.css")

    //fs.stat可以读取到文件的所有详细信息 是一个Stats对象
    const stat = promisify(fs.stat); //把fs.stat方法 转换成返回promise对象的方法
    //等待stat方法 去读取文件的详细信息 并返回出来
    const fileStat = await stat(filePath);

    //获取请求时候携带的文件唯一标识 和 文件最后修改时间
    const ifNoneMatch = req.headers["if-none-match"];
    const ifModifiedSince = req.headers["if-modified-since"];

    //获取文件的最后一次修改时间 并转换位时间对象字符串
    const lastModified = new Date(fileStat.mtime).toGMTString();
    //获取文件的唯一标识
    const fileEtag = eTag(fileStat);
    // console.log(lastModified, fileEtag)

    if (ifNoneMatch === fileEtag && ifModifiedSince === lastModified) {
        //当比对完成并都相等的时候  返回响应读取缓存
        res.status(304).end();
        return;
    }

    //只要协商缓存不相等  则重新设置最新的响应头 并返回新的响应
    res.set("eTag", fileEtag);
    res.set("last-modified", lastModified);

    const rs = fs.createReadStream(filePath)
    res.set("Content-Type", "text/css;charset=utf-8")
    rs.pipe(res);
})


//启动服务
app.listen(3000, (err) => {
    if (err) {
        console.log("服务器启动错误" + err);
        return;
    }
    console.log("服务器启动成功 http://127.0.0.1:3000");
    open("http://127.0.0.1:3000");
})