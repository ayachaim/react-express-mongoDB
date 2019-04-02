const express=require('express')
const Router=express.Router()
//route:user/info
Router.get('/info',function(req,res){
  //用户是否有cookie,code=1，返回json
  return res.json({code:1})
})
module.exports=Router