const express = require('express')
const userRoute=require('./user')

const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const app=express()
const models = require('./mongo.js')
const Chat = models.getModel('chat')
const server = require('http').Server(app)
const io=require('socket.io')(server)
//socket事件
io.on('connection',function(socket){
  socket.on('sendmsg',function(data){
  //socket.emit('recmsg',data)
  const {from,to,msg}=data
  const chatid=[from,to].sort().join('_')
  Chat.create({chatid,from,to,content:msg},function(err,doc){
    io.emit('recmsg',Object.assign({},doc._doc))
  })
})
})

//解析cookie
app.use(cookieParser())
//解析post json
app.use(bodyParser.json())
//user
app.use('/user',userRoute)
//监听port8888
server.listen(8888,function(){
  console.log('this port at 8888 is listening')
})