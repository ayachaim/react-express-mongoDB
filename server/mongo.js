const mongoose = require('mongoose')
//链接mongodb
const DB_URL = 'mongodb://127.0.0.1:27017/wang'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
  console.log('mongo connect success')
})
//用户模型
const models ={
  user:{
    'user':{'type':String,'require':true},
    'pwd':{'type':String,'require':true},
    'type':{'type':String,'require':true},
    //头像
    'avatar':{'type':String,'require':true},
    //个人简介
    'desc':{'type':String,'require':true},
    //职位名
    'title':{'type':String,'require':true},
    //公司名
    'company':{'type':String,'require':true},
    //钱数
    'monney':{'type':String,'require':true},
  },
  chat:{

  }
}
for(let i in models){
  mongoose.model(i,new mongoose.Schema(models[i]))
}
module.exports={
  getModel:function(name){
    return mongoose.model(name)
  }
}