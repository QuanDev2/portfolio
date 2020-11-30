import React from 'react'
import './AboutMe.css'
import Entry from './Entry'
import './Entry.css'
import profile from '../../assets/profile-picture.jpg'

function AboutMe() {
  return (
    <div id="AboutMe">
      <div className="Content">
        <div className="Content__Left">
          <img src={profile} alt="profile picture"></img>
          <h1>About Me</h1>
        </div>
        <div className="Content__Right">
          <Entry
            title="Well-rounded Software Engineer"
            p1="Passionate in building website and full-stack web applications"
            p2="Detail-oriented, keen eye for design"
            p3="My favorite stack: React.js, Node.js, Express, and MySQL"
          />
          <Entry
            title="Dedicated Computer Science Student"
            p1="Senior student in Computer Science at Oregon State University (Go Beavs!)"
            p2="Focus in Web and Mobile Development Option"
            p3="GPA 3.93"
          />
          <Entry
            title="Tinkering Fanatic"
            p1="DIY is my hobby"
            p2="I tinker with computers, cars, home improvement, woodworking, and more."
            p3="Other hobbies: cooking, gardening, soccer, swimming."
          />
        </div>
      </div>
    </div>
  )
}

export default AboutMe
