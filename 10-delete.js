/* 
ลบข้อมูลและยืนยันการลบ

--form
<a href="/delete/<% item._id%>" onclick="return confirm('คุณต้องการลบข้อมูลหรือไม่ ?')">
</a>

--server
router.get('/delete/:id',(req,res)=>{
    Product.findByIdAndDelete(req.params.id,
        {useFindAndModify:false}).exec(err=>{
            res.redirect('/manage')
        })
})
*/