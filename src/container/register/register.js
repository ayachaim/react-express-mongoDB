import React from 'react'
import Logo from '../../component/logo/logo'
import {List,InputItem,Radio,WingBlank,WhiteSpace,Button} from 'antd-mobile'
class Register extends React.Component {
  constructor(props){
    super(props)
      this.state={
        type:'boss'
      }
  }
  render() {
    const RadioItem = Radio.RadioItem
    return ( 
      <div> 
        <Logo></Logo>
        <h2>注册页</h2>
        <List>
          <InputItem>用户</InputItem>
          <InputItem>密码</InputItem>
          <InputItem>确认密码</InputItem>
          <WhiteSpace />
          <RadioItem checked={this.state.type=='boss'}>
          boss
          </RadioItem>
          <RadioItem checked={this.state.type=='qiancheng'} >
          qiangcheng 
          </RadioItem>
          <WhiteSpace />
          <Button type='primary'>注册</Button>

        </List>
        
      </div>
    )
  }
}
export default Register