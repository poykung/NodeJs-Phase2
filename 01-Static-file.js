/* Static file

    คือ file ที่ไม่มีการเปลี่ยนแปลงเนื้อหา เช่น video sound หรือ file บางชนิด เช่น html,css,js เป็น file ที่มีเนื้อหาตายตัว
    หากนำ file ดังกล่าวมารันก็จะได้ผลลัพธ์ตามที่ได้กำหนดไว้ใน file ถ้ามีการเขียนโปรแกรมกำหนดเงื่อนไขขึ้นมา file นั้นก็จะไม่มี
    การเปลี่ยนแปลงเนื้อหาตามเขื่อนไขที่กำหนดขึ้น

    การตั้งค่า static file
    
    const express = require('express')
    const app = express()
    app.use.(express.static('public'))

    app.listen(8080,()=>{

    })

*/