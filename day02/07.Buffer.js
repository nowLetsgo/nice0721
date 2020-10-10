/* 
    1字节 1byte ---> 8位(00000000--11111111) 8bit
    1kb --- 1024byte
    1Mb --- 1024kb
    1Gb --- 1024Mb
    1Tb --- 1024Gb
    1个英文字母符号 -- 1字节
    1个汉字        -- 3字节
*/


const buf1 = Buffer.alloc(10, "atguigu");
//在内存中开辟一块干净的区域，长度固定，如果没有填充内容，则区域保存的都是0  
//打印显示的时候 显示的是十六进制数据
console.log(buf1) //<Buffer 61 74 67 75 69 67 75 61 74 67>
console.log(buf1.toString()); //将buffer数据转换出来

//去内存中找一个空间（这个空间可能还没有被清理干净）
const buf2 = Buffer.allocUnsafe(10);
console.log(buf2)
console.log(buf2.toString())


const buf3 = Buffer.from("atguigutg001");
console.log(buf3)
console.log(buf3.toString());

buf3.forEach((item, index) => {
    console.log(item);
})