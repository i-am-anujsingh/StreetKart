import React from 'react'

function LogoutBtn({...props}) {
  
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    {...props}
    >Logout</button>
  )
}

export default LogoutBtn