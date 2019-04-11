//根据用户完善信息 进行跳转到boss或者qiancheng
export function getRedirectPath({type,avatar}){
  let url=(type==='boss')?'/boss':'/qiancheng'
  if(!avatar){
     url+='info'
  }
  return url
}