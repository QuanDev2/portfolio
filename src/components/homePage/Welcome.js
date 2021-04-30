import React from 'react'
import './Welcome.css'

function Welcome() {
  return (
    <div className="Welcome__Container">
      <div className="Welcome">
        <p className="Hi">Hi,</p>
        <h1 className="Name">I'm Quan.</h1>
        <h1 className="Build">I build web applications</h1>
        <p className="Text">I’m a full-stack software engineer student at Oregon State University, graduating June 2021 Summa Cum Laude</p>
        <p className="Text">I'm working for OSU Energy Efficiency Center, developing and maintaining an internal web application with React/ Redux, Node.js, Express, SQL</p>
        <a className="btn-contact" href="mailto:qnguyen.dev2@gmail.com">Hire Me</a>
      </div>
    </div>
  )
}

export default Welcome
