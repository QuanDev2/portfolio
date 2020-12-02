import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="Header">
      <div className="Logo">
        <a href='#'>Quan Nguyen</a>
      </div>
      <div className="Header_Items" >
        <ul>
          <li><a href='#HomePage'>Home</a></li>
          <li><a href='#AboutMe'>About Me</a></li>
          <li><a href='#Portfolio'>Portfolio</a></li>
          <li><a href='#Resume'>Resume</a></li>
          <li><a href='#Contact'>Contact</a></li>
          <li><a href='#'>Blog</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;