import React from 'react'
import {NavBar, InputItem,TextareaItem,Button} from 'antd-mobile'
import Avatar from '../../component/avatar/avatar'
//navbar导航栏 avatar头像选择 
class BossInfo extends React.Component{
  constructor(props){
    super(props)
  }
  onChange(k,v){
    this.setState({
      [k]:v
    })
  }
  render(){
    return(
    <div>
      <NavBar
      mode="light"
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
    <Button type='primary'>保存</Button>
    </div>
    )
  }
}
export default BossInfo