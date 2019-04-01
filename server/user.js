const express=require('express')
const Router=express.Router()
//route:user/info
Router.get('/info',function(req,res){
  //用户是否有cookie
  return res.json({code:10})
})
module.exports=Router