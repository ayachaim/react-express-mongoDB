import React from 'react'
import logoImg from './boss.svg'
import './boss.css'

class Boss extends React.Component {
  render() {
    return ( 
      <div className='logo-container'>
        <img src={logoImg} alt='' width={150} height={150}/>
      </div>
      )
  }
}
export default Boss