const express=require('express')
const utils = require('utility')
const Router=express.Router()
const models=require('./mongo.js')
const User=models.getModel('user')
//MD5+salt重新加密
function MD5pwd(pwd){
  const salt='fuck_your_mother_bastard'
  return utils.md5(utils.md5(salt+pwd))
}
//获取数据库用户注册信息
Router.get('/list',function(req,res){
  //清除数据库内容
  //User.remove({},function(e,d){})
  User.find({},function(err,doc){
    return res.json(doc)
  })
})
//获取/login页面user登录信息,查询密码后隐藏密码
Router.post('/login',function(req,res){
  const {user,pwd}=req.body
  User.findOne({user,pwd:MD5pwd(pwd)},{'pwd':0},function(err,doc){
    if(!doc){
      return res.json({code:1,msg:'用户不存在或者密码错误'})
    }
      return res.json({code:0,data:doc})
    })
  })


//获取/register页面user注册信息
Router.post('/register',function(req,res){
  
  const {user,pwd,type}=req.body
  //查询一次user是否已注册
  User.findOne({user},function(err,doc){
    if(doc){
      return res.json({code:1,msg:'用户名重复'})
    }
    //没注册就创建一个新的user 数据入库加密为MD5
    User.create({user,type,pwd:MD5pwd(pwd)},function(err,doc){
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