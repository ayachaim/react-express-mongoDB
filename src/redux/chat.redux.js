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
  users:{},
  unread:0
}
//reducer
export function chat(state = initState,action) {
  switch(action.type){
  case MSG_LIST:
  return {...state,chatmsg:action.payload.msgs,users:action.payload.users,unread:action.payload.msgs.filter(v=>!v.read&&v.to==action.payload.userid).length}
  case MSG_REC:
  const n=action.payload.to==action.userid?1:0
  return {...state,chatmsg:[...state.chatmsg,action.payload],unread:state.unread+n}
  case MSG_READ:
  default:
    return state
  }
}
function msgList(msgs,users,userid){
  return {type:MSG_LIST,payload:{msgs,users,userid}}
}
export function getLetter({from,to,msg}){
  return dispatch=>{
    socket.emit('sendmsg',{from,to,msg})
  }
}
function sendMSG(data,userid){
  return {userid,type:MSG_REC,payload:data}
}
export function recMsg(){
  return (dispatch,getState)=>{
    socket.on('recmsg',function(data){
      const userid=getState().user._id
      dispatch(sendMSG(data,userid))
    })
  }
}
//get请求
export function getMsg(){
  return (dispatch, getState)=>{
    axios.get('/user/getMsg')
    .then(res=>{
      if(res.status===200 && res.data.code===0){
        const userid=getState().user._id
        dispatch(msgList(res.data.msgs,res.data.users,userid))
      }
    })
  }
}