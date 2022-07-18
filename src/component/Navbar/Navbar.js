import React from 'react'
import download from "../../images/NavBar/download.png"
import "./Navbar.css"

function navBar() {
  return (
    <div className='Nav'>
        <div className='NavLeft'>
            <img src={download} />
        </div>
        <div className='NavRight'>
            <input placeholder='                Search Here' type="text" />
            <p>My Order</p>
            <p>Sign Up</p>
            <p>Contact</p>
        </div>
    </div>
  )
}

export default navBar