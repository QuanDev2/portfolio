import React from 'react'
import './Entry.css'
function Entry({ title, p1, p2, p3 }) {
  return (
    <div className="Content__Entry">
      <h3>{title}</h3>
      <div className="Entry__Text">
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
      </div>
    </div>
  )
}

export default Entry
