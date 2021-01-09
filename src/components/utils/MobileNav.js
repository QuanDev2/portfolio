import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons'


export default function MobileNav() {

  const [showMenu, setshowMenu] = useState(false)
  let menu
  if (showMenu) {
    menu =
      <ul>
        <li><a href='#HomePage' className="NavItem">Home</a></li>
        <li><a href='#AboutMe' className="NavItem" >About Me</a></li>
        <li><a href='#Portfolio' className="NavItem">Portfolio</a></li>
        <li><a href='#Resume' className="NavItem">Resume</a></li>
        <li><a href='#Contact' className="NavItem">Contact</a></li>
      </ul>
  }

  return (
    <nav className="MobileNav">
      <span className="HamburgerIcon">
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setshowMenu(!showMenu)}
        />
      </span>
      {menu}
    </nav>
  )
}
