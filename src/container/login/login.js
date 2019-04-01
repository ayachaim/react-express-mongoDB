import React from 'react'
import Logo from '../../component/logo/logo'
import {
  List,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button
} from 'antd-mobile'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this)
  }
  //路由跳转到register
  register () {
    console.log(this.props)
    this.props.history.push('/register')
  }
  render () {
    return (
      <div>
        <Logo></Logo>
        <h2>注册页</h2>
        <List>
          <InputItem>用户</InputItem>
          <WhiteSpace />
          <InputItem>密码</InputItem>
          <WhiteSpace />
        </List>
        <WingBlank>
          <Button type='primary'>登录</Button>
          <WhiteSpace />
          <Button onClick={this.register} type='primary'>注册</Button>
        </WingBlank>
      </div>
    )
  }
}
export default Login