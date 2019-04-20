import React from 'react'
import {List,InputItem} from 'antd-mobile'
import {connect} from 'react-redux'
import {getMsg,getLetter,recMsg} from '../../redux/chat.redux'

class NewChat extends React.Component{
  constructor(props){
    super(props)
    this.state={text:'',msg:[]}
  }
  componentDidMount(){
    this.props.getMsg()
    this.props.recMsg()
    //socket.on('recmsg',data=>{
      //this.setState({msg:[...this.state.msg,data.text]})
     
   
  }
  handleSub(){
    const from=this.props.user._id
    const to=this.props.match.params.user
    const msg=this.state.text
    this.props.getLetter({from,to,msg})
    //socket.emit('sendmsg',{text:this.state.text})
    this.setState({text:''})
  }
  render(){
    return (
    <div>
    {this.state.msg.map(v=>(<p key={v}>{v}</p>))}
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
  getMsg, getLetter, recMsg
}
const Chat = connect(mapStateToProps, mapDispatchToProps)(NewChat)
export default Chat