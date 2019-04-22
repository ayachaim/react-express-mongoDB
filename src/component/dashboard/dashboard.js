import React from 'react'
import {connect} from 'react-redux'
import { NavBar } from 'antd-mobile';
import {Route,Switch} from 'react-router-dom'
import NavLink from '../../component/navlink/navlink'
import Boss from '../../container/boss/boss'
import QianCheng from '../qiancheng/qiancheng'
import Me from '../me/me'
import {getMsg, recMsg} from '../../redux/chat.redux'
//取到redux里state
const mapStateToProps=(state)=>{
  return state
}
const mapDispatchToProps={
  getMsg,recMsg
}


function Msg(){
  return <h2>消息列表</h2>
}

class Dashboard extends React.Component{
  componentDidMount(){
    if (!this.props.chat.chatmsg.length) {
     this.props.getMsg()
     this.props.recMsg()
  }
}
  render(){
    //router组件直接获取props，非router组件请用withrouter
      const user=this.props.user
      const {pathname}=this.props.location
      
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
          component: QianCheng,
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
        <div>
          <NavBar mode='dark' className='fixed-header'>{navList.find(v=>v.path==pathname).title}</NavBar>
          <Switch>
          {navList.map(v=>(
            <Route key={v.path} path={v.path} component={v.component}></Route>
          ))}
          </Switch>
          <NavLink data={navList}></NavLink>
        </div>
      )
  }
}
const NewDashboard = connect(mapStateToProps, mapDispatchToProps)(Dashboard)

export default NewDashboard