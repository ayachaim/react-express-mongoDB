const express=require('express')
const utils = require('utility')
const Router=express.Router()
const models=require('./mongo.js')
const User=models.getModel('user')
const Chat=models.getModel('chat')
const _filter = {
  'pwd': 0,
  '__v':0
}
//MD5+salt重新加密
function MD5pwd(pwd){
  const salt='fuck_your_mother_bastard'
  return utils.md5(utils.md5(salt+pwd))
}
//获取数据库用户注册信息,注意返回隐藏pwd和文档类型，key值可以取_id的值
Router.get('/list',function(req,res){
  const {type}=req.query
  //清除数据库数据
  //User.remove({},function(e,d){})
  User.find({type},_filter,function(err,doc){
    return res.json({code:0,data:doc})
  })
})
//updata接口,如果cokie有用户id，就返回成功，没有就返回code:1
Router.post('/update',function(req,res){
  const userid=req.cookies.userid
  if(!userid){
    return JSON.stringify({code:1})
  }
    const body=req.body
    User.findByIdAndUpdate(userid,body,function(err,doc){
      const data=Object.assign({},{
        userid:doc.user,
        type:doc.type
      },body)
   return res.json({code:0,data})
  }
)
})

//获取/login页面user登录信息,查询密码后隐藏密码
Router.post('/login',function(req,res){
  const {user,pwd}=req.body
  User.findOne({user,pwd:MD5pwd(pwd)},_filter,function(err,doc){
    if(!doc){
      return res.json({code:1,msg:'用户不存在或者密码错误'})
    }
    //写入cookie
      res.cookie('userid',doc._id)
      return res.json({code:0,data:doc})
    })
  })


//获取/register页面user注册信息
Router.post('/register',function(req,res){
  const {user,pwd,type}=req.body
  //查询一次user是否已注册
  User.findOne({user,type,pwd},function(err,doc){
    if(err){
      return res.json({code:1,msg:'用户名重复'})
    }
    //没注册就创建一个新的user 数据入库加密为MD5
    const userModel=new User({user,type,pwd:MD5pwd(pwd)})
    userModel.save(function(err,doc){
      if(err){
        return res.json({code:1,msg:'后端出错'})
      }
      const {user,type,_id}=doc 
      res.cookie('userid',_id)
      return res.json({code:0,data:{user,type,_id}})
    })
    })
  })
  //msg聊天信息
Router.get('/getMsg',function(req,res){
  const user=req.cookies.userid
  User.find({},function(e,userdoc){
    let users={}
    userdoc.forEach(v=>{
      users[v._id]={name:v.user,avatar:v.avatar}
    }) 
    Chat.find({'$or':[{from:user},{to:user}]},function(err,doc){
      if(!err){
        return res.json({code:0,msgs:doc,users:users})
    }
  })

  })
})

//:user/info
Router.get('/info',function(req,res){
  //用户是否有cookie,code=1，返回json
  const {userid}=req.cookies
  if(!userid){
    return res.json({code:1})
  }
  User.findOne({_id:userid},_filter,function(err,doc){
    if(err){
      return res.json({code:1,msg:'后端出错'})
    }
    if(doc){
      return res.json({code:0,data:doc})
    }
    
  })
  
})
module.exports=Router