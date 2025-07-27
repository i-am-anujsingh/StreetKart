import React from 'react'
import logo from "../assets/Logo.jpg"
function Logo({width = '10px'}) {
  return (
    <div >
      <img className='h-12 rounded-[50%]' src={logo} alt="webLogo">
      </img>
    </div>
  )
}

export default Logo;