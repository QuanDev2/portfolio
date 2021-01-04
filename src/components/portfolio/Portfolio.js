import React from 'react'
import ImgFoodCard from '../../assets/project-foodcart.png'
import ImgAirBnb from '../../assets/project-airbnb.png'
import ImgTextbook from '../../assets/project-textbook.png'
import ImgTeachIt from '../../assets/project-teachit.png'
import PortfolioCard from './PortfolioCard'


function Portfolio() {
  return (
    <div id="Portfolio">
      <h1>Things I've built</h1>
      <div className="Portfolio__Content">
        <PortfolioCard
          img={ImgTeachIt}
          title="Teach It"
          p1="A web app that allows students to host webinars and share their knowledge with other students."
          p2="My team and I built this application in 3 days in a Hackathon contest. The main idea behind the app is for students to reinforce what they've learned by teaching it back to other students via live webinars. This will provide invaluable live interactions between the hosts and the guests that other platform such as YouTube, Coursera, EdX, Udemy, etc. don't offer"
          p3="I've learned a lot about React from this project. I myself also implemented authentication using JWT and protected routes.
          Tech stack: React.js, Bootstrap, Node.js/ Express, MySQL
          "
          githubLink="https://github.com/A5-Wagyu/teach-it"
          externalLink="https://teach--it.herokuapp.com/"
        />
        <PortfolioCard
          img={ImgFoodCard}
          title="Online Food Cart"
          p1="An online platform that allows users to buy or sell their own homecook meals"
          p2="The main focus of this project is designing and implementing a SQL database. I've reinforced and improved my vanilla JS skills over this project. "
          p3="I've also learned to integrate AWS S3 storage into a Node application and tried out Semantic-UI framework for the front-end"
          githubLink="https://github.com/QuanDev2/food-cart"
          externalLink="https://online-food-cart.herokuapp.com/"
        />
        <PortfolioCard
          img={ImgAirBnb}
          title="Air BednBreakfast"
          p1="My attempt to learn React.js by building an AirBnb clone landing page"
          p2="I've learned to use components and props to build a React.js webpage"
          p3="Tech stack: React.js, CSS, Heroku Deployment"
          githubLink="https://github.com/QuanDev2/airbnb-clone"
          externalLink="https://air-bednbreakfast.herokuapp.com/"
        />
        <PortfolioCard
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
