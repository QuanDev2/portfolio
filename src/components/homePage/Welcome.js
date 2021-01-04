import React from 'react'
import './Welcome.css'

function Welcome() {
  return (
    <div className="Welcome__Container">
      <div className="Welcome">
        <p className="Hi">Hi,</p>
        <h1 className="Name">I'm Quan.</h1>
        <h1 className="Build">I build web applications</h1>
        <p className="Text">I’m a software engineer student based in the Willamette Valley area, Oregon</p>
        <p className="Text">I’m specialized in building high-quality full-stack web applications with UI/UX focus in mind</p>
        <a className="btn-contact" href="mailto:qnguyen.dev2@gmail.com">Hire Me</a>
      </div>
    </div>
  )
}

export default Welcome
