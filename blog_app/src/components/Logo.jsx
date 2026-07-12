import React from 'react'
import BloggyLogo from '../assets/BloggyLogo.png'

function Logo({width = '100px'}) {
  return (
    <div><img src={BloggyLogo}
    alt="ChaiBlog Logo"
    className="h-16 w-22 rounded-full object-cover shadow-md"></img></div>
  )
}

export default Logo