/* 

router.get('/:id',(req,res)=>{
    const p_id = req.params.id
    console.log(p_id)
    Product.findOne({_id:p_id}).exec((err,doc)=>{
        res.render('product',{product:doc})
    })
   
})

*/