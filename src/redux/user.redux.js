import axios from 'axios'
//type
const REGISTER_SUC = 'REGISTER_SUC'
const ERROR_MSG = 'ERROR_MSG'
//用户初始状态action
const initState={
  isAuth:false,
  msg:'',
  user:'',
  pwd:'',
  type:''
}
//user reduce
export function user(state=initState,action){
  switch(action.type){
    case REGISTER_SUC:
    return {
      ...state,
      isAuth: true,
      msg: '',
      ...action.payload
    }
    case ERROR_MSG:
    return {
      ...state,
      isAuth:false,
      msg:action.msg}
    default:
    return state
  }
}
//成功信息
function registerSuc(data){
  return {
    type: REGISTER_SUC,
    payload:data 
  }
}
//报错信息
function errorMSG(msg){
  return {
    msg,
    type: ERROR_MSG
  }
}

//验证用户密码和type
export function register({user,pwd,repeatpwd,type}){
  if(!user||!pwd||!type){
    return errorMSG('未输入用户密码！')
  }
  if(pwd!==repeatpwd){
    return errorMSG('密码和确认密码不一致！')
  }
  return dispatch=>{
    axios.post('/user/register',{user,pwd,type})
    .then(res=>{
      //验证响应并返回成功或错误信息
      if(res.status===200 && res.data.code===1){
        dispatch(registerSuc({user,pwd,type}))
      }else{
        //后端定义错误信息
        dispatch(errorMSG(res.data.msg))
      }
    })
  }
}