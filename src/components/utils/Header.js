import React, { useEffect } from 'react'
import './Header.css'


function Header() {

  // using hooks to add active link tracker js
  useEffect(() => {
    const controller = new AbortController();
    let ignore = false;
    // document.getElementById("Nav__Home").classList.add("active");

    const navItems = document.getElementsByClassName("NavItem");
    // console.log(navItems);

    window.addEventListener("scroll", (event) => {
      let pos = document.documentElement.scrollTop || document.body.scrollTop;
      pos += 1;

      for (let i = 0; i < navItems.length; i++) {

        let hash = navItems[i].hash.substr(1)
        let elem = document.getElementById(hash);

        console.log(pos);

        console.log(elem.offsetTop);
        console.log(elem.offsetTop + elem.offsetHeight);
        navItems[i].classList.remove("active");
        if (elem.offsetTop <= pos && pos < elem.offsetTop + elem.offsetHeight) {
          console.log(elem);
          navItems[i].classList.add("active");
        }

      }
      //   console.log(elem.hash);
      //   // if (pos < aboutMeOffset) {
      //   //   document.getElementById("Nav__Home").classList.add("active")
      //   // } else if (pos < portfolioOffset) {
      //   //   document.getElementById("Nav__AboutMe").classList.add("active")
      //   // } else if (pos < resumeOffset) {
      //   //   console.log("Portfolio");
      //   // } else if (pos < contactOffset) {
      //   //   console.log("Resume");
      //   // } else {
      //   //   console.log("Contact");
      //   // }
      // });





    });
    return () => {
      // cleanup
      controller.abort();
      ignore = true;
    }
  }, [])

  return (
    <div className="Header">
      <div className="Logo">
        <a href='#'>Quan Nguyen</a>
      </div>
      <div className="Header_Items" >
        <ul>
          <li><a href='#HomePage' className="NavItem">Home</a></li>
          <li><a href='#AboutMe' className="NavItem" >About Me</a></li>
          <li><a href='#Portfolio' className="NavItem">Portfolio</a></li>
          <li><a href='#Resume' className="NavItem">Resume</a></li>
          <li><a href='#Contact' className="NavItem">Contact</a></li>
          {/* <li><a href='#'>Blog</a></li> */}
        </ul>
      </div>
    </div>
  )
}

export default Header;