//จัดการ ruuting
const express = require('express');
const router = express.Router()
//เรียกใช้งาน model
const Product = require('../models/products');
//upload file
const multer = require('multer');

const storage =  multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/images/products') // ตำแหน่งจัดเก็บ file
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+".jpg")//เปลี่ยนชื่อ file และป้องกันชื่อ file ซ้ำ
    }
})

//เริ่มต้น upload
const upload = multer({
    storage:storage
})

router.get('/',(req,res)=>{
    Product.find().exec((err,doc)=>{
        res.render('index',{products:doc})
    })
    //res.render('index',{product:product})
})

router.get('/add-products',(req,res)=>{
    if(req.session.login){
        res.render('form') //บันทึกสินค้า
    }else{
        res.render('admin') //เข้าสู่ระบบ
    }
    res.render('admin')
})

router.get('/manage',(req,res)=>{
    if(req.session.login){
        Product.find().exec((err,doc)=>{
            res.render('manage',{products:doc})
        })
    }else{
        res.render('admin')
    }
})

//category
router.get('/addctg',(req,res)=>{
    res.render('insert_category')
})



router.get('/delete/:id',(req,res)=>{
   Product.findByIdAndDelete(req.params.id,{useFindAndModify:false}).exec(err=>{
    if(err) console.log(err)
    res.redirect('/manage')
   })
})

//logout
router.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        res.redirect('/manage')
    })
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

router.get('/:id',(req,res)=>{
    const p_id = req.params.id
    console.log(p_id)
    Product.findOne({_id:p_id}).exec((err,doc)=>{
        res.render('product',{product:doc})
    })
   
})

router.post('/edit',(req,res)=>{
    const edit_id = req.body.edit_id
    Product.findOne({_id:edit_id}).exec((err,doc)=>{
        res.render('edit',{product:doc}) //นำข้อมูลเดิมที่ต้องการแก้ไขมาแสดงใน form
    })
})

router.post('/update',(req,res)=>{
    //ข้อมูลใหม่ที่ถูกส่งมาจาก form แก้ไข
    const update_id = req.body.update_id
    let data = {
        name:req.body.name,
        price:req.body.price,
        detail:req.body.detail
    }
    //update data
    Product.findByIdAndUpdate(update_id,data,{data,useFindAndModify:false}).exec(err=>{
        res.redirect('/manage')
    })
})

//login
router.post('/login',(req,res)=>{
    const username = req.body.username
    const password = req.body.password
    const timeExpire = 30000 //30 sec.

    if(username === "admin" && password === "123"){
        //create session
        req.session.username = username
        req.session.password = password
        req.session.login = true
        req.session.cookie.maxAge = timeExpire
        res.redirect('/manage')
    }else{
        res.render('404')
    }
})


module.exports = router