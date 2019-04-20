import io from 'socket.io-client'
import axios from 'axios'


const socket = io('ws://localhost:8888')
//消息列表
const MSG_LIST = 'MSG_LIST'
//接收消息
const MSG_REC = 'MSG_REC'
//已读信息
const MSG_READ = 'MSG_READ'
//initstate
const initState={
  chatmsg:[],
  unread:0
}
//reducer
export function chat(state = initState,action) {
  switch(action.type){
  case MSG_LIST:
  return {...state,chatmsg:action.payload,unread:action.payload.filter(v=>!v.read).length}
  case MSG_REC:
  return {...state,chatmsg:[...state.chatmsg,action.payload],unread:state.unread+1}
  case MSG_READ:
  default:
    return state
  }
}
function msgList(msgs){
  return {type:MSG_LIST,payload:msgs}
}
export function getLetter({from,to,msg}){
  return dispatch=>{
    socket.emit('sendmsg',{from,to,msg})
  }
}
function sendMSG(data){
  return {type:MSG_REC,payload:data}
}
export function recMsg(){
  return dispatch=>{
    socket.on('recmsg',function(data){
      dispatch(sendMSG(data))
    })
  }
}
//get请求
export function getMsg(){
  return dispatch=>{
    axios.get('/user/getMsg')
    .then(res=>{
      if(res.status===200&&res.data.code===0){
        dispatch(msgList(res.data.msgs))
      }
    })
  }
}