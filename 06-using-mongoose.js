/* 
การใช้งาน mongoose

    - ติดตั้ง Mongoose
    - เชื่อม MongoDB ด้วย Mongoose
    - ออกแบบ Schema และ Model
    - นำโมเดลไปใช้งาน

การติดตั้ง Mongoose

    -npm install mongoose

โครงสร้างคำสั่ง
    -mongoose.connect('mongodb://<hostname:port>/<database>')

เชื่อม MongoDB ด้วย Mongoose

const mongoose = require('mongoose')
mongoose.connect('mongodb:'//<hostname:port>/<database>;{
    useNewUrlParser:true;
    useUnifiedTopology:true;
}).catch(err=>console.log(err))

การสร้าง Schema และ Model

Schema คือโครงสร้างในการเก็บข้อมูล

mongoose.Schema({
    field:type,
    fiedl:type
})

const productSchema = mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    imagePath:String
})

การสร้าง model

mongoose.model (ชื่อ 'collection',schema)

model คือ ส่วนที่ใช้ในการจัดการกับข้อมูล เช่น
let Product = mongoose.model(ชื่อ collection,productSchema)
module.exports = Product;


ตัวอย่างการใช้ mongoose เชื่อมต่อฐานข้อมูล mongoDB
 ใช้งาน mongoose
const mongoose = require('mongoose')

 เชื่อมไปยัง MongoDB
const dbUrl = 'mongodb://127.0.0.1:27017/productDB'
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(err=>console.log(err))

ออกแบบ Schema
let productSchema = mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    description:String
})


 สร้างโมเดล
let Product = mongoose.model("products",productSchema)

 ส่งออกโมเดล
module.exports = Product



*/