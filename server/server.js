const express = require('express')
const userRoute=require('./user')


const app=express()
app.use('/user',userRoute)
//监听port8888
app.listen(8888,function(){
  console.log('this port at 8888 is listening')
})