const express = require('express')
const userRoute=require('./user')

const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const app=express()
//解析cookie
app.use(cookieParser())
//解析post json
app.use(bodyParser.json())
//user
app.use('/user',userRoute)
//监听port8888
app.listen(8888,function(){
  console.log('this port at 8888 is listening')
})