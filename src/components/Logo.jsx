import React from 'react'
import logo from '../assets/IMG-20250727-WA0019.jpg'
function Logo({width = '100px'}) {
  return (
    <div>
    <img className="h-10 rounded-[50%]" src={logo}>
    </img>
    </div>
  )
}

export default Logo