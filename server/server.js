const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const model = require('./model')
const Chat = model.getModel('chat')
// Chat.remove({},function(e,d){})
const path=require('path')
const app = express()
// work with express
const server = require('http').Server(app)

const io = require('socket.io')(server)

io.on('connection',function(socket){
	console.log('user login')
	socket.on('sendmsg',function(data){
		console.log(data)
		const {from, to, msg} = data
		const chatid = [from,to].sort().join('_')
		Chat.create({chatid,from,to,content:msg},function(err,doc){
			io.emit('recvmsg', Object.assign({},doc._doc))
		})
		// console.log(data)
		// io.emit('recvmsg',data)
	})
})



const userRouter = require('./user')

app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter)
app.use(function (req, res, next){
  //定义路由 白名单 ，把静态资源放置进去；
  //如果url路径是/user或者/static 说明是 用户的请求 或者静态的资源，这样就还是执行原来的下一个方法
  if (req.url.startsWith("/user/") || req.url.startsWith("/static/")) {
    return next();
  }
  //否则就去加载 静态资源路径了；
  return res.sendFile(path.resolve("build/index.html"));
});

app.use('/',express.static(path.resolve('build')))
server.listen(9093,function(){
	console.log('Node app start at port 9093')
})



