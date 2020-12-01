import React from 'react'
import './Portfolio.css'
import ImgFoodCard from '../../assets/project-foodcart.png'
import ImgAirBnb from '../../assets/project-airbnb.png'
import ImgTextbook from '../../assets/project-textbook.png'
import Portfolio__Card from './Portfolio__Card'


function Portfolio() {
  return (
    <div id="Portfolio">
      <h1>Things I've built</h1>
      <div className="Portfolio__Content">
        <Portfolio__Card
          img={ImgFoodCard}
          title="Online Food Card"
          p1="An online platform that allows users to buy or sell their own homecook meals"
          p2="Final project for my Databases class at OSU"
          p3="Tech stack: HTML, CSS, Nodejs, Express, Handlebars, Heroku deployment, AWS S3 storage"
        />
        <Portfolio__Card
          img={ImgAirBnb}
          title="Air BednBreakfast"
          p1="My attempt to learn React.js by building an AirBnb clone landing page"
          p2="What I've learned: using components and props to build a React.js webpage"
          p3="Tech stack: React.js, CSS, Heroku Deployment"
        />
        <Portfolio__Card
          img={ImgTextbook}
          title="Online Food Card"
          p1="A Craigslist-like platform that enables students to buy and sell their used textbooks"
          p2="My first project tackling web development"
          p3="I've learned to use HTML, CSS, JS for the frontend; Nodejs/Express on the backend, and Handlebars as templating engine"
        />
      </div>
    </div>
  )
}

export default Portfolio
