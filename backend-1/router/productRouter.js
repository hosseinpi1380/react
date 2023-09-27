const express=require('express');
const productRouter=express.Router();
const sabzlearnDb=require('../db');

productRouter.get('/',(req,res)=>{
    sabzlearnDb.query('SELECT * FROM products',(err,result)=>{
        if(err){
            res.send(null)
        }else{
            res.send(JSON.stringify(result))
        }
    })
})
productRouter.delete('/:id',(req,res)=>{
    let {id}=req.params;
    let query = `DELETE FROM products WHERE id=${id}`;
    sabzlearnDb.query(query,(err,result)=>{
        if(err){
           res.send(err)
           res.send(JSON.stringify('محصول پاک نشد!'))
        }else{
            
            res.send(result)
            res.send(JSON.stringify('محصول پاک ششد!'))
        }
    })
})
module.exports=productRouter;