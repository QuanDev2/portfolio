import React from 'react'
import './SocialMediaPole.css'
import IconGitHub from './icons/github'
import IconGmail from './icons/gmail'
import IconLinkedin from './icons/linkedin'
import IconTwitter from './icons/twitter'

function SocialMediaPole() {
  return (
    <div className="SocialMediaContainer">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/quandev2/" target="_blank"><IconLinkedin /></a>
        </li>
        <li>
          <a href="https://github.com/QuanDev2/" target="_blank"><IconGitHub /></a>
        </li>
        <li>
          <a href="#" target="_blank"><IconGmail /></a>
        </li>
        <li>
          <a href="#" target="_blank"><IconTwitter /></a>
        </li>
      </ul>

    </div>
  )
}

export default SocialMediaPole;
