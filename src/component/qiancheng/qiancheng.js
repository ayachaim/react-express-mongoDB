import React from 'react'
import {getUserList} from '../../redux/charuser.redux'

import {connect} from 'react-redux'
import UserCard from '../usercard/usercard'

class NewQiancheng extends React.Component{
 
  componentDidMount(){
   this.props.getUserList('boss')
  }
  render(){
    return (
     <UserCard userlist={this.props.userlist}></UserCard>
    )
  }
}
const mapStateToProps=state=>{
  return state.chatuser
}
const mapDispatchToProps={getUserList}
const QianCheng = connect(mapStateToProps, mapDispatchToProps)(NewQiancheng)
export default QianCheng