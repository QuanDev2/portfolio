import React, { useEffect } from 'react'
import './Header.css'


function Header() {

  // using hooks to add active link tracker js
  useEffect(() => {
    const controller = new AbortController();
    let ignore = false;

    window.addEventListener("scroll", (event) => {
      let pos = document.documentElement.scrollTop || document.body.scrollTop;
      pos += 1;
      const homeOffset = document.getElementById("HomePage").offsetTop;
      const aboutMeOffset = document.getElementById("AboutMe").offsetTop;
      const portfolioOffset = document.getElementById("Portfolio").offsetTop;
      const resumeOffset = document.getElementById("Resume").offsetTop;
      const contactOffset = document.getElementById("Contact").offsetTop;

      console.log("-------------Current pos: ", pos);
      console.log("home: ", homeOffset);
      console.log("aboutMe: ", aboutMeOffset);
      console.log("Portfolio: ", portfolioOffset);
      console.log("Resume: ", resumeOffset);
      console.log("Contact: ", contactOffset);


      if (pos < aboutMeOffset) {
        console.log("Home");
      } else if (pos < portfolioOffset) {
        console.log("About Me");
      } else if (pos < resumeOffset) {
        console.log("Portfolio");
      } else if (pos < contactOffset) {
        console.log("Resume");
      } else {
        console.log("Contact");
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