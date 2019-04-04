const express=require('express')
const Router=express.Router()
const models=require('./mongo.js')
const User=models.getModel('user')
//获取数据库用户注册信息
Router.get('/list',function(req,res){
  User.find({},function(err,doc){
    return res.json(doc)
  })
})
//获取前端user注册信息
Router.post('/register',function(req,res){
  console.log(req.body)
  const {user,pwd,type}=req.body
  //查询一次user是否已注册
  User.findOne({user},function(err,doc){
    if(doc){
      return res.json({code:1,msg:'用户名重复'})
    }
    //没注册就创建一个新的user
    User.create({user,pwd,type},function(err,doc){
      if(err){
        return res.json({code:1,msg:'后端出错了'})
      }
      //注册成功
      return res.json({code:0})
    })
  })
})
//route:user/info
Router.get('/info',function(req,res){
  //用户是否有cookie,code=1，返回json
  return res.json({code:1})
})
module.exports=Router