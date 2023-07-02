/* 
การแสดงผลข้อมูล

product.find().exec((err,doc)=>{
    res.render('index',{product:doc})
})

ตัวอย่างคำสั่ง
router.get('/manage',(req,res)=>{
    Product.find().exec((err,doc)=>{
        res.render('manage',{products:doc})
    })
})

*/