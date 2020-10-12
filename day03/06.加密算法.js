//引入加密模块
const crypto = require("crypto");
//假设拿到了需要加密的信息
let secret = 'lph15701665563';

//可以给明文加点料
secret += 'nice1';

//使用createHmac方法可以生成一个HMAC对象 参数是加密方式 和 明文
const hash = crypto.createHmac('MD5', secret);

//通过digest可以把HMAC对象转换成16进制显示或保存
const mySecret = hash.digest("hex");


//可以对密文再次加密 然后再存到数据库 会更安全
const hash2 = crypto.createHmac('sha256', mySecret);
const mySecret2 = hash2.digest("hex");

console.log(mySecret2);