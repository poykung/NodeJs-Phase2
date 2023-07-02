/* 
การใช้งาน cookie

#ติดตั้ง module
    - npm install cookie-parser

#การตั้งค่าการใช้งาน
const cookieParser = require('cookie-parser')
app.use(cookieParser())

#การเก็บข้อมูล cookie
res.cookie('ชื่อ cookie','ค่าใน cookie')

#การอ่านข้อมูลใน cookie
req.cookie. ชื่อ cookie

#การกำหนดอายุ cookie
res.cookie('ชื่อ cookie','ค่าใน cookie',{maxAge:หน่วยมิลลิวินาที})

#การลบ cookie
res.clearCookie('ชื่อ cookie ที่ต้องการลบ')


*/