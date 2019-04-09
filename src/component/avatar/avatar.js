//头像选择组件
import React from 'react'
import {Grid,List} from 'antd-mobile'
class Avatar extends React.Component{
  constructor(props){
    super(props)
  }
  
  render(){
    const avatarList='boy,bull,chick,crab,girl,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra'.split(',').map(v=>({icon:require(`../img/${v}.png`),text:v}))
    const gridHeader=this.state.icon?(<div>
                                      <span>已选择头像</span>
                                      <img src={this.state.icon} style={{width:20}}></img>
                                      </div>)
                                      :<div><span>'请选择一个头像'</span></div>
    return(
      <div>
      <List renderHeader={()=>{gridHeader}}>
      <Grid data={avatarList} columnNum={5} hasLine onClick={ele=>{this.setState(ele);this.props.Avatar(ele.text)}} />
      </List>
      </div>
    )
  }
}
export default Avatar