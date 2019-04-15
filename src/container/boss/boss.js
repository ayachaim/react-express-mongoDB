import React from 'react'
import axios from 'axios'
import {Card,WingBlank} from 'antd-mobile'

class Boss extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data:[]
    }
  }
  componentDidMount(){
    axios.get('/user/list?type=qiancheng').then(
      res=>{
        if(res.data.code===0){
          this.setState({data:res.data.data})
        }
      }
    ) 
  }
  render(){
    
    
    
    
    return (
      <WingBlank>
        {this.state.data.map(v=>(
          v.avatar?<Card key={v._id}>
          <Card.Header title={v.user} thumb={require(`../../component/img/${v.avatar}.png`)} extra={<span>{v.title}</span>}></Card.Header>
          <Card.Body>
            <div>{v.desc.split('\n').map(v=>(
              <div key={v}>{v}</div>
            ))}</div>
          </Card.Body>
          </Card>:null
        ))}
      </WingBlank>
    )
  }
}
export default Boss