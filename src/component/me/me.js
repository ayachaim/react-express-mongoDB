import React from 'react'
import {connect} from 'react-redux'
import {Result,List, WhiteSpace} from 'antd-mobile'
class NMe extends React.Component{
  render(){
    
    return this.props.user?(
    <div>
      <Result
        img={<img src={require(`../img/${this.props.avatar}.png`)} alt='' style={{width:50}}/>}
        title={this.props.user}
        message={this.props.type==='boss'?this.props.company:null}
       />
       <List renderHeader={()=>'简介'}>
        <List.Item
          multipleLine
        >{this.props.title}
          {this.props.desc?<List.Item.Brief>{this.props.desc}</List.Item.Brief>:null}
          {this.props.money?<List.Item.Brief>薪资:{this.props.money}</List.Item.Brief>:null}
        </List.Item>
       </List>
      <WhiteSpace></WhiteSpace>
       <List>
        <List.Item>注销</List.Item>
       </List>
    </div>
    ):null
  }
}
const mapStateToProps=state=>{
  return state.user
}
const Me = connect(mapStateToProps)(NMe)

export default Me