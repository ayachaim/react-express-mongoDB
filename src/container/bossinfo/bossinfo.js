import React from 'react'
import {NavBar, InputItem,TextareaItem,Button} from 'antd-mobile'
import Avatar from '../../component/avatar/avatar'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {update} from '../../redux/user.redux'

//navbar导航栏 avatar头像选择 
class BossInfo extends React.Component{
  constructor(props){
    super(props)
    this.state={
     title:'',
     avatar:'',
     company:'',
     money:'',
     desc:''
   }
  }
  onChange(k,v){
    this.setState({
      [k]:v
    })
  }
  
  render(){
    //判断location的路径
    const path=this.props.location.pathname
    const redirect = this.props.redirectTo
    
    return(
    <div>
    {redirect && redirect!==path ? <Redirect to={this.props.redirectTo}></Redirect> : null}
    <NavBar
      mode="dark"
    >Boss完善信息页面</NavBar>
    
    <Avatar Avatar={imgname=>{
      this.setState({
        avatar:imgname
      })
    }}></Avatar>
    <InputItem onChange={v=>this.onChange('title',v)}>招聘职位</InputItem>
    <InputItem onChange={v=>this.onChange('company',v)}>公司名称</InputItem>
    <InputItem onChange={v=>this.onChange('money',v)}>职位薪资</InputItem>
    <TextareaItem onChange={v=>this.onChange('desc',v)}
      rows={3}
      autoHeight
      title='职业要求'
    ></TextareaItem>
    <Button 
      onClick={()=>{this.props.update(this.state)}}
      type='primary'>保存</Button>
    </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return state.user
}
const mapDispatchToProps = {
  update
}
const newBossinfo = connect(mapStateToProps, mapDispatchToProps)(BossInfo)

export default newBossinfo