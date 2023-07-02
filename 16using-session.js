/* 
#การใช้งาน session

npm install express-session

#ตั้งค่าการใช้งาน

const session = require('express-session')
app.use(session({
    secret:"key สำหรับสร้าง session id",
    resave:false,
    saveUninitialized:false
}
))

#การเก็บข้อมูล session
req.session. ชื่อ session = ค่าใน session

#การอ่านข้อมูลใน session

req.session.ชื่อ session

#การกำหนดอายุ session
req.session.cookie.maxAge = หน่วยมิลลิวินาที

#การลบ Session
res.session.destroy((err)=>{
    การทำงานเมื่อลบ session เสร็จ
})

*/