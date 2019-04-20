import React from 'react'
import {List,InputItem} from 'antd-mobile'
import io from 'socket.io-client'

const socket=io('ws://localhost:8888')
class Chat extends React.Component{
  constructor(props){
    super(props)
    this.state={text:'',msg:[]}
  }
  componentDidMount(){
    socket.on('recmsg',data=>{
      this.setState({msg:[...this.state.msg,data.text]})
     
    })
  }
  handleSub(){
    socket.emit('sendmsg',{text:this.state.text})
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
export default Chat