import React from 'react'
import {List,InputItem, NavBar,Icon} from 'antd-mobile'
import {connect} from 'react-redux'
import {getMsg,getLetter,recMsg} from '../../redux/chat.redux'

class NewChat extends React.Component{
  constructor(props){
    super(props)
    this.state={text:'',msg:[]}
  }
  componentDidMount(){
    if(!this.props.chat.chatmsg.length){
   this.props.getMsg()
   this.props.recMsg()
  }
  }
  handleSub(){
    const from=this.props.user._id
    const to=this.props.match.params.user
    const msg=this.state.text
    this.props.getLetter({from,to,msg})
    this.setState({text:''})
  }
  render(){
    const userid=this.props.match.params.user
    const users=this.props.chat.users
    if(!users[userid]){
      return null
    }
    return (
    <div>
    <NavBar mode='dark' icon={<Icon type='left' />} onLeftClick={()=>{this.props.history.goBack()}}>
      {users[userid].name}
    </NavBar>
    {this.props.chat.chatmsg.map(v=>{
      const avatar=require(`../img/${users[v.from].avatar}.png`)
      return v.from==userid?(
        <List key={v._id}>
          <List.Item thumb={avatar}>{v.content}</List.Item>
        </List>
        
      ):(
        <List key={v._id}>
          <List.Item extra={<img src={avatar} />}>{v.content}</List.Item>
        </List>
      )    
      }
    )}
    <div className='footer'>
      <List>
        <InputItem 
          placeholder='' value={this.state.text} onChange={v=>{this.setState({text:v})}} extra={<span onClick={()=>this.handleSub()}>发送</span>}
        ></InputItem>
      </List>
    </div>
    </div>)
  }
}
const mapStateToProps=state=>{
  return state
}
const mapDispatchToProps = {
  getLetter,getMsg,recMsg
}
const Chat = connect(mapStateToProps, mapDispatchToProps)(NewChat)
export default Chat