/* 
HTML Form

<form method="get/post" action="path">

element

</form>

รูปแบบการรับส่งข้อมูล

method="get" หรือ "post" (รูปแบบของการส่งข้อมูล)
- get ส่งข้อมูลพร้อมแนบข้อมูลไปพร้อมกับ url
(ไม่มีความปลอดภัยเพราะข้อมูลถูกมองเห็นและไม่ควรใช้ร่วมกับข้อมูลที่เป็น senstive data)
- post ส่งข้อมูลพร้อมซ่อนค่าข้อมูลระหว่างทางที่ส่งไป (มีความปลอดภัย)

action="path" ระบุ path ปลายทางเพื่อรับข้อมูลที่ส่งไปจาก form

การรับค่าข้อมูลจาก form
app.get() //รับข้อมูลจากแบบ form get method
app.post() //รับข้อมูลจากแบบ form post method

จัดการข้อมูลที่มีการส่งแบบ GET
ส่ง----
<form method="get" action="path"></form>
รับ----
app.get('path',(req,res)=>{
    console.log(req.query) ---object ข้อมูลที่ส่งจาก form
})

จัดการข้อมูลที่มีการส่งแบบ POST
ส่ง----
<form method="post" action="path"></form>
รับ----
app.post('path',(req,res)=>{
    console.log(req.body) ---object ข้อมูลที่ได้จากแบบ form
})

การตั้งค่าใน app.js
app.use(express.urlencoded({extended:false}));
ต้องระบุก่อน router
*/