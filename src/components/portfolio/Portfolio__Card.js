import React from 'react'
import './Portfolio__Card.css'

function Portfolio__Card({ img, title, p1, p2, p3 }) {
  return (
    <div className="Portfolio__Card">
      <img src={img} alt="" />
      <div className="Card__Info">
        <h3>{title}</h3>
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
      </div>
    </div>
  )
}

export default Portfolio__Card
