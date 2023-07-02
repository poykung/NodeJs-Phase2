/* 

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
*/