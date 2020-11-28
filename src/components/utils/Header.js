import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="Header">
      <div className="Logo">
        Quan Nguyen
      </div>
      <div className="Header_Items" >
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About Me</a></li>
          <li><a href='#'>Portfolio</a></li>
          <li><a href='#'>Resume</a></li>
          <li><a href='#'>Contact</a></li>
          <li><a href='#'>Blog</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;