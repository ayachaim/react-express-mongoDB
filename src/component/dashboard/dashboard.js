import React from 'react'
import {connect} from 'react-redux'
import { NavBar } from 'antd-mobile';
import NavLink from '../../component/navlink/navlink'

//取到redux里state
const mapStateToProps=(state)=>{
  return state
}
function Boss(){
  return <h2>boss</h2>
}
function Qiancheng(){
  return <h2>应聘page</h2>
}
function Msg(){
  return <h2>消息列表</h2>
}
function Me(){
  return <h2>个人中心</h2>
}
class Dashboard extends React.Component{
  render(){
    //router组件直接获取props，非router组件请用withrouter
      const user=this.props.user
      const {pathname}=this.props.location
      console.log(pathname)
      const navList = [
        {
          path:'/boss',
          text:'求职者',
          icon:'boss',
          title:'求职列表',
          component:Boss,
          hide:user.type==='qiancheng'
        },
        {
          path:'/qiancheng',
          text:'boss',
          icon:'job',
          title:'招聘列表',
          component:Qiancheng,
          hide:user.type==='boss'
        },
        {
          path: '/msg',
          text: '消息',
          icon: 'msg',
          title: '消息列表',
          component: Msg,
        },
        {
           path: '/me',
           text: '个人中心',
           icon: 'me',
           title: '个人中心',
           component: Me,
        }
      ]
      return (
        <div >
          <NavBar mode='dark' >{navList.find(v=>v.path===pathname).title}</NavBar>
          <NavLink  data={navList}></NavLink>
        </div>
      )
  }
}
const NewDashboard = connect(mapStateToProps)(Dashboard)

export default NewDashboard