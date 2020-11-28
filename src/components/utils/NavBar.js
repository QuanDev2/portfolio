import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div className="NavBar">
      <div className="Logo">
        Quan Nguyen
      </div>
      <div className="NavBar__Items" >
        <ul>
          <li>Home</li>
          <li>About Me</li>
          <li>Portfolio</li>
          <li>Resume</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar;