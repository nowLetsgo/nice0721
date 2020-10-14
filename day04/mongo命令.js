//使用某个数据库(如果数据库不存在，则自动创建)
use atguigu
//查看所有的数据库
show databases
//查看当前所在的数据库
db
//给students集合插入1条数据(如果这个集合不存在，则自动创建当前的集合)
//insert方法是插入数据的，参数是一个对象
db.students.insert({name:"李四",age:20,sex:"男"})

//给students集合插入多条数据
db.students.insert([{name:"李九",age:18,sex:"女"},{name:"黄三",age:7,sex:"男"}])

//查找某个数据库的某个集合的所有数据  使用find方法 不加任何参数
db.students.find()

//查找年龄是18岁的人的数据
db.students.find({age:18})

//查找id是XXX的人的数据
db.students.find({_id:ObjectId("5f855ab14dcd7dc5334031e7")})

//$gt $gte $lt $lte $ne 操作符  > >= < <= !=
//查找年龄大于20岁的人
db.students.find({age:{$gt:20}})

//查找年龄小于等于20岁的人
db.students.find({age:{$lte:20}})

//查找性别不是男的
db.students.find({sex:{$ne:"男"}})

//查找年龄大于18 或者是男性的人
db.students.find({$or:[{age:{$gt:18}},{sex:"男"}]})

//查找年龄是18岁的和20岁的  方法1
db.students.find({$or:[{age:18},{age:20}]})

//查找年龄大于20岁和小于30岁的
db.students.find({$and:[{age:{$gt:20}},{age:{$lt:30}}]})

//查找年龄是18岁的和20岁的  方法2
db.students.find({age:{$in:[18,20]}})

//查找姓名是以三为结尾的
db.students.find({name:/三$/})

//查找姓名是以张为开头的
db.students.find({name:/^张/})

//$where查找数据 查找年龄大于10 小于25岁的人
db.students.find({$where:function(){
    //this：指向当前进来的数据（数据会一条条的进入）
	return this.age>10 && this.age<25;
}})



