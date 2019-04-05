import React from 'react'
import {login} from '../../redux/user.redux'
import Logo from '../../component/logo/logo'
import {
  List,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button
} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
//只需要user字段
const mapStateToProps = state => {
  return state.user
}
//login传入connect第二个参数
const mapDispatchToProps = {
  login
}


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      user:'',
      pwd:''
    }
    this.register = this.register.bind(this)
    this.handleLogin=this.handleLogin.bind(this)
  }
  //输入框函数
  HandleChange(key, value) {
    this.setState({
      [key]: value
    })
  }
  //路由跳转到register
  register () {
    this.props.history.push('/register')
  }
  //登录按钮函数,传入state到props.login
  handleLogin(){
    this.props.login(this.state)
  }
  render () {
    return (
      <div>
      {this.props.redirecTo?<Redirect to={this.props.redirecTo}/>:null}
        <Logo></Logo>
        <List>
         {this.props.msg?<p className='err-msg'>{this.props.msg}</p>:null}
          <InputItem onChange={v=>this.HandleChange('user',v)}>用户</InputItem>
          <WhiteSpace />
          <InputItem onChange={v=>this.HandleChange('pwd',v)}>密码</InputItem>
          <WhiteSpace />
        </List>
        <WingBlank>
          <Button onClick={this.handleLogin} type='primary'>登录</Button>
          <WhiteSpace />
          <Button onClick={this.register} type='primary'>注册</Button>
        </WingBlank>
      </div>
    )
  }
} 
const newLogin = connect(mapStateToProps, mapDispatchToProps)(Login)
export default newLogin