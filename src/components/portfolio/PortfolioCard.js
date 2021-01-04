import React from 'react'
import IconExternal from '../utils/icons/external'
import IconGitHub from '../utils/icons/github'
import './PortfolioCard.css'



function PortfolioCard({ img, title, p1, p2, p3, githubLink, externalLink }) {
  return (
    <div className="Portfolio__Card">
      <img src={img} alt="" />
      <div className="Card__Info">
        <h3>{title}</h3>
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
        <div className="Icons">
          <a href={githubLink} target='_blank' rel="noreferrer">
            <IconGitHub />
          </a>
          {
            externalLink !== "" &&
            <a href={externalLink} target='_blank' rel="noreferrer">
              <IconExternal />
            </a>
          }
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
