import React from 'react'

export default function DesktopNav() {
  return (
    <div className="Header_Items" >
      <ul>
        <li><a href='#HomePage' className="NavItem">Home</a></li>
        <li><a href='#AboutMe' className="NavItem" >About Me</a></li>
        <li><a href='#Portfolio' className="NavItem">Portfolio</a></li>
        <li><a href='#Resume' className="NavItem">Resume</a></li>
        <li><a href='#Contact' className="NavItem">Contact</a></li>
      </ul>
    </div>
  )
}
