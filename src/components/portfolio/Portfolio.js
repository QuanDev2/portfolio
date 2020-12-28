import React from 'react'
// import './Portfolio.css'
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
          title="Online Food Cart"
          p1="An online platform that allows users to buy or sell their own homecook meals"
          p2="The main focus of this project is designing and implementing a SQL database. I've reinforced and improved my vanilla JS skills over this project. "
          p3="I've also learned to integrate AWS S3 storage into a Node application and tried out Semantic-UI framework for the front-end"
          githubLink="https://github.com/QuanDev2/food-cart"
          externalLink="https://online-food-cart.herokuapp.com/"
        />
        <Portfolio__Card
          img={ImgAirBnb}
          title="Air BednBreakfast"
          p1="My attempt to learn React.js by building an AirBnb clone landing page"
          p2="I've learned to use components and props to build a React.js webpage"
          p3="Tech stack: React.js, CSS, Heroku Deployment"
          githubLink="https://github.com/QuanDev2/airbnb-clone"
          externalLink="https://air-bednbreakfast.herokuapp.com/"
        />
        <Portfolio__Card
          img={ImgTextbook}
          title="Textbook Buddy"
          p1="A Craigslist-like platform that enables students to buy and sell their used textbooks"
          p2="My first project to build a full-stack web application. I've learned to build a NodeJS/ Express application with Handlebars as templating engine."
          p3="The front-end was built using HTML, CSS and vanilla JS"
          githubLink="https://github.com/QuanDev2/textbook-buddy"
          externalLink=""
        />
      </div>
    </div>
  )
}

export default Portfolio
