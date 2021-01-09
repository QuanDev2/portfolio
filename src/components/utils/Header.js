import React, { useEffect } from 'react'
// import './Header.css'


function Header() {

  // using hooks to add active link tracker js
  useEffect(() => {
    const controller = new AbortController();
    let ignore = false;
    const navItems = document.getElementsByClassName("NavItem");
    navItems[0].classList.add("active");

    window.addEventListener("scroll", (event) => {
      let pos = document.documentElement.scrollTop || document.body.scrollTop;
      pos += 1;
      for (let i = 0; i < navItems.length; i++) {
        let hash = navItems[i].hash.substr(1)
        let elem = document.getElementById(hash);
        navItems[i].classList.remove("active");
        if (elem.offsetTop <= pos && pos < elem.offsetTop + elem.offsetHeight) {
          navItems[i].classList.add("active");
        }

      }
    });
    return () => {
      // cleanup
      controller.abort();
      ignore = true;
    }
  }, [])

  return (
    <div className="Header">
      <div className="Header_Items" >
        <ul>
          <li><a href='#HomePage' className="NavItem">Home</a></li>
          <li><a href='#AboutMe' className="NavItem" >About Me</a></li>
          <li><a href='#Portfolio' className="NavItem">Portfolio</a></li>
          <li><a href='#Resume' className="NavItem">Resume</a></li>
          <li><a href='#Contact' className="NavItem">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;