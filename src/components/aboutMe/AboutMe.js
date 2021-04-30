import React from 'react'
import Entry from './Entry'
import './Entry.css'
import profile from '../../assets/profile-picture.jpg'

function AboutMe() {
  return (
    <div id="AboutMe">
      <div className="Content">
        <div className="Content__Left">
          <img src={profile} alt="profile picture" />
          <h1>About Me</h1>
        </div>
        <div className="Content__Right">
          <Entry
            title="Well-rounded Full-stack Software Engineer"
            p1="I can work across the stack, from building eye-catching responsive UI with React/ Redux, to building REST APIs with Node.js/ Express, to DevOps tasks such as deploying production apps on AWS, setting up CI/CD with GitHub Actions, etc."
            p2=""
            p3="My favorite stack: React.js/ Redux, Node.js, Express, and MySQL"
          />
          <Entry
            title="Dedicated Computer Science Student"
            p1="Senior student in Computer Science at Oregon State University. Go Beavs!"
            p2="Focus in Web and Mobile Development"
            p3="I always try to maintain a high GPA and constantly expand the breadth and depth of my programming skills at the same time"
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
