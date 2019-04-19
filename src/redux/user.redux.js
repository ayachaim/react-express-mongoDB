import axios from 'axios'
import {
  getRedirectPath
} from '../util.js'
//action
const AUTH_SUC = 'AUTH_SUC'
const LOGOUT = 'LOGOUT'
const LOAD_DATA = 'LOAD_DATA'
const ERROR_MSG = 'ERROR_MSG'
//用户初始状态state
const initState={
  redirectTo:'',
  msg:'',
  user:'',
  type:''
}
//user reduce
export function user(state=initState,action){
  switch(action.type){
    case AUTH_SUC:
    return {
      ...state,
      redirectTo: getRedirectPath(action.payload),
      msg: '',
      ...action.payload
    }
    case LOGOUT:
    return {
      ...initState, redirectTo:'/login'
    }
    case LOAD_DATA:
    return {
      ...state,
      ...action.payload
    }
    case ERROR_MSG:
    return {
      ...state,
     
      msg:action.msg,
    }
    default:
    return state
  }
}
export function loadData(userinfo){
  return {type:LOAD_DATA,payload:userinfo}
}
//login成功信息
function authSuc(obj) {
  //屏蔽password，从data主体中清除
  const {pwd,...data}=obj
  
  return {
    type: AUTH_SUC,
    payload:data
  }
}

//register报错信息
function errorMSG(msg){
  return {
    ...msg,
    type: ERROR_MSG
  }
}
//bossinfo update请求
export function update(data){
  return dispatch=>{
    axios.post('/user/update',data)
    .then(res=>{
       if (res.status === 200 && res.data.code === 0) {
         dispatch(authSuc(res.data.data))
      
       } else {
           
         dispatch(errorMSG(res.data.msg))
       }
    })
  }
}
//login页面验证账号密码
export function login({user,pwd}){
  if(!user||!pwd){
    return errorMSG('用户名密码必须输入')
  }
  return dispatch => {
   axios.post('/user/login',{user,pwd})
    .then(res=>{
      //验证响应并返回成功或错误信息
      if(res.status===200 && res.data.code===0){
        dispatch(authSuc(res.data.data))
      }else{
        //后端定义错误信息
        
        dispatch(errorMSG(res.data.msg))
      }
    })
  }
}
//refister页面验证用户信息
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
      if(res.status===200 && res.data.code===0){
        dispatch(authSuc({user,pwd,type}))
      }else{
        //后端定义错误信息
        dispatch(errorMSG(res.data.msg))
      }
    })
  }
}
export function logoutSub(){
  return {type:LOGOUT}
}