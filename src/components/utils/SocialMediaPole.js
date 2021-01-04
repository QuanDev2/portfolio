import React from 'react'
// import './SocialMediaPole.css'
import IconGitHub from './icons/github'
import IconGmail from './icons/gmail'
import IconLinkedin from './icons/linkedin'
import IconTwitter from './icons/twitter'

function SocialMediaPole() {
  return (
    <div className="SocialMediaContainer">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/quandev2/" target="_blank" rel="noreferrer"><IconLinkedin /></a>
        </li>
        <li>
          <a href="https://github.com/QuanDev2/" target="_blank" rel="noreferrer"><IconGitHub /></a>
        </li>
        <li>
          <a href="mailto:qnguyen.dev2@gmail.com" target="_blank" rel="noreferrer"><IconGmail /></a>
        </li>
        <li>
          <a href="https://twitter.com/QuanCfc17" target="_blank" rel="noreferrer"><IconTwitter /></a>
        </li>
      </ul>

    </div>
  )
}

export default SocialMediaPole;
