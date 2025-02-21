import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <span>Spacecon</span>

        <div className="nav-menu">
            <button className='nav-btn'>Get Started</button>
        </div>
    </nav>
  )
}

export default Navbar