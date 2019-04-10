import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {loadData} from '../../redux/user.redux'
import {connect} from 'react-redux'

const mapStateToProps=state=>{return state.user}
const mapDispatchToProps={loadData}
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
          if(res.data.code===0){
            //有登录信息
            this.props.loadData(res.data.data)
          }else{
            this.props.history.push('/login')
          }
        }
      }
    )
  }
  render(){
    return null
  }
}
const withAuth = withRouter(AuthRoute)
const NewAuth = connect(mapStateToProps, mapDispatchToProps)(withAuth)

export default NewAuth