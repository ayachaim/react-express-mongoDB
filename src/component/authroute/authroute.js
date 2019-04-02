import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
//user/info

class AuthRoute extends React.Component{
  componentDidMount(){
    const object=['/login','/register']
    //location.pathname
    const pathName=this.props.location.pathName
    
    //如果url是这两个，返回空
    if(object.indexOf(pathName)>-1){
      return null
    }
    //获取用户信息
    axios.get('./user/info').then(
      res=>{
        if(res.status===200){
          console.log(res.data)
          if(res.data.code===10){
            //有登录信息
          }else{
            this.props.history.push('/login')
          }
        }
      }
    )
  }
  render(){
    return <h2>后端响应</h2>
  }
  
  
  
}
export default withRouter(AuthRoute)