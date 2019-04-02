import React from 'react'
import Logo from '../../component/logo/logo'
import {List,InputItem,Radio,WingBlank,WhiteSpace,Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {register} from '../../redux/user.redux'

//映射关系
const mapStateToProps=state=>{
  return state.user
  
}

const mapDispatchToProps={register}


class Register extends React.Component {
  constructor(props){
    super(props)
      this.state={
        user:'',
        pwd:'',
        repeatpwd:'',
        type:'boss'
      }
    this.handleRigister=this.handleRigister.bind(this)
  }
  //输入框
  HandleChange(key,value){
    this.setState({
      [key]: value
    })
  }
  //点击提交之后把this.state传给props.register
  handleRigister(){
    this.props.register(this.state)
  }
  render() {
    const RadioItem = Radio.RadioItem
    return ( 
      <div> 
        <Logo></Logo>
        <h2>注册页</h2>
        <List>
        {this.props.msg?<p className='err-msg'>{this.props.msg}</p>:null}
          <InputItem placeholder="请输入用户名" onChange={v=>this.HandleChange('user',v)}>用户</InputItem>
          <InputItem type='password' placeholder="请输入您的8位密码"  onChange={v=>this.HandleChange('pwd',v)}>密码</InputItem>
          <InputItem type='password' placeholder="请再次输入您的8位密码"  onChange={v=>this.HandleChange('repeatpwd',v)}>确认密码</InputItem>
          <WhiteSpace />
          <RadioItem 
            onChange={()=>this.HandleChange('type','boss')}
            checked={this.state.type==='boss'}>
            Boss直聘
          </RadioItem>
          <RadioItem 
            onChange={()=>this.HandleChange('type','qiancheng')}
            checked={this.state.type==='qiancheng'} >
            前程无忧
          </RadioItem>
          <WhiteSpace />
          <Button type='primary' onClick={this.handleRigister}>注册</Button>

        </List>
        
      </div>
    )
  }
}
const newRegister=connect(mapStateToProps, mapDispatchToProps)(Register)

export default newRegister