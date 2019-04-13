//头像选择组件
import React from 'react'
import {Grid,List} from 'antd-mobile'
import PropTypes from 'prop-types'
class Avatar extends React.Component{
  static propTypes={
    Avatar: PropTypes.func.isRequired
  }
  
  constructor(props){
    super(props)
    this.state={

    }
  }
  
  render(){
    const avatarList='boy,bull,chick,crab,girl,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra'.split(',').map(v=>({icon:require(`../img/${v}.png`),text:v}))
    const gridHeader=this.state.text?(<div>
                                      <span style={{color:'#00BFFF'}}>已选择头像&nbsp;☺</span>
                                      <img src={this.state.icon} style={{width:20}} alt=''></img>
                                      </div>)
                                      :<div style={{color:'black',background:'#FF6347'}}>请选择一个头像☹</div>
    //子组件调用ele.text
      return(                             
      <div>
      {gridHeader}
      <List>
      <Grid data={avatarList} columnNum={5} hasLine onClick={ele=>{this.setState(ele);this.props.Avatar(ele.text)}} />
      </List>
      </div>
    )
  }
}
export default Avatar