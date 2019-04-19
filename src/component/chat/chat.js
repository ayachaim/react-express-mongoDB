import React from 'react'
class Chat extends React.Component{
  render(){
    return <h2>chat{this.props.match.param}</h2>
  }
}
export default Chat