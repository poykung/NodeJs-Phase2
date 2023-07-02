/* อัพโหลด file ด้วย multer
ประกอบด้วย 5 ขั้นตอน

 - ติดตั้ง multer
    npm install multer

 - ตั้งค่า form
    enctype="multipart/form-data"
    
    เรียกใช้ module multer
    const multer = require('multer')
    const storage = multer.diskStorage({
        destination:function(req,file,cb){ //ตำแหน่งเก็บ file ภาพ
            cb(null,'/public/images/products);
        }
    },
    filename:function(req,file,cb){
        cb(null,Date,now() +".jpg") //กำหนด file ไม่ซ้ำกันโดยใช้ Date
    }
 - กำหนด option (ตำแหน่งจัดเก็บ file , ชื่อ file (ชื่อ file จะต้องไม่ซ้ำกัน))
 - กำหนดการ upload file
 - บันทึกข้อมูล


 -- ตัวอย่าง code การ upload file
const storage =  multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/images/products') // ตำแหน่งจัดเก็บ file
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+".jpg")//เปลี่ยนชื่อ file และป้องกันชื่อ file ซ้ำ
    }
})

/เริ่มต้น upload
const upload = multer({
    storage:storage
})

router.post('/insert',upload.single("image"),(req,res)=>{
    let data = new Product({
        name:req.body.name,
        price:req.body.price,
        image:req.file.filename,
        detail:req.body.detail
    })
    data.save()
    .then(()=>{
        console.log("document saved successful..")
    })
    .catch((err)=>{
        console.log("Uncessful")
    })
    res.redirect('/')
})
*/