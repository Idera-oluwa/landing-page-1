import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div>
        <div className='navbar-container'>
            <h1 className='nav-logo'>Food<span className='nav-logo-span'>splash</span></h1>
            {/*<div className='nav-items'>
            <p className='nav-item'>Home</p>
            <p className='nav-item'>About</p>
    </div>*/}
            <button className='nav-login'>LOGIN</button>
        </div>
        <hr/>
        </div>
    )
}

export default Navbar
