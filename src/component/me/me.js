import React from 'react'
import {connect} from 'react-redux'
import {Result,List, WhiteSpace,Modal,Button} from 'antd-mobile'
import browserCookie from 'browser-cookies'
import {logoutSub} from '../../redux/user.redux' 
import {Redirect} from 'react-router-dom'
class NMe extends React.Component{
  constructor(props){
    super(props)
    this.logout = this.logout.bind(this)
  }
  logout(){
    console.log('dianji')
    const alert = Modal.alert
    alert('注销', '你确定退出登录吗???', [
    { text: '否', onPress:()=>console.log('否')},
    { text: '是', onPress:()=>{
    browserCookie.erase('userid')
    this.props.logoutSub()
  }}
  ])   
 }
 
  render(){
    const Item=List.Item
    
    return (this.props.user?(
    <div>
      <Result
        img={<img src={require(`../img/${this.props.avatar}.png`)} alt='' style={{width:50}}/>}
        title={this.props.user}
        message={this.props.type==='boss'?this.props.company:null}
       />
       <List>
        <Item
          multipleLine
        >{this.props.title}
          {this.props.desc?<List.Item.Brief>{this.props.desc}</List.Item.Brief>:null}
          {this.props.money?<List.Item.Brief>薪资:{this.props.money}</List.Item.Brief>:null}
        </Item>
       </List>
      <WhiteSpace></WhiteSpace>
      <Button type='primary' onClick={this.logout}></Button>
      
    </div>
    ):<Redirect to={this.props.redirectTo}/>)
  }
}
const mapStateToProps=state=>{
  return state.user
}
const mapDispatchToProps={logoutSub}
const Me = connect(mapStateToProps, mapDispatchToProps)(NMe)

export default Me