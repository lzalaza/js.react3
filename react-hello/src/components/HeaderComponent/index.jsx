import React from 'react'
import './HeaderComponent.css'



const HeaderComponent = () => {
  return (
    <div className='headercomponent'>
      <div className='log'>LOGO</div>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </div>
  )
}

export default HeaderComponent