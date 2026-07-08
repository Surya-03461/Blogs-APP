import React from 'react'
import bogsLogo from "../assets/bogsLogo.png";

function Logo({width = '100px'}) {
  return (
    <div><img src={bogsLogo}
    alt="ChaiBlog Logo"
    className="h-16 w-22 rounded-full object-cover shadow-md"></img></div>
  )
}

export default Logo