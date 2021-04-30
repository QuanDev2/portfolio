import React from 'react'
import ImgFoodCard from '../../assets/project-foodcart.png'
import ImgAirBnb from '../../assets/project-airbnb.png'
import ImgTextbook from '../../assets/project-textbook.png'
import ImgTeachIt from '../../assets/project-teachit.png'
import ImgOSU from '../../assets/project-osu.png'
import ImgStockwatch from '../../assets/project-stockwatch.png'
import ImgCandystore from '../../assets/project-candystore.png'
import PortfolioCard from './PortfolioCard'


function Portfolio() {
  return (
    <div id="Portfolio">
      <h1>Things I've built</h1>
      <div className="Portfolio__Content">
        <PortfolioCard
          img={ImgOSU}
          title="OSU Applied Plan Portal"
          p1="A web application that allows OSU CS students to apply for their CS focus, and allows advisors to easily manage students' applications"
          p2="I worked across the stack including frontend, backend and DevOps: Implemented responsive UI for mobile view and Redux store for better state management; Deployed the production app on AWS with EC2 and Load Balancer; Integrated SSO Login with OSU authentication; Implemented CI/CD to deploy to AWS using GitHub Actions."
          p3="Tech stack: React, Redux, Node.js, Express, MySQL, AWS
          "
          githubLink="https://github.com/OSU-Applied-Plan-Portal-2020-2021/cs-applied-plan-portal"
          externalLink="https://osuappliedplan.tools/"
        />
        <PortfolioCard
          img={ImgStockwatch}
          title="StockWatch"
          p1="A minimalist finance app to track stock prices and calculate their intrinsic values, in order to see how undervalued or overvalued they are."
          p2="Implemented a Redux store for stock watchlist, EmotionJS for styling and Yahoo Finance API for data. Used custom hook to fetch financial data and calculate intrinsic values"
          p3="React.js, Redux, custom hooks, EmotionJS, YahooFinance API"
          githubLink="https://github.com/QuanDev2/stock-watch"
          externalLink="https://master.d36wi3z4aw8711.amplifyapp.com/"
        />
        <PortfolioCard
          img={ImgCandystore}
          title="Candy Store"
          p1="Built a React candy store with interactive shopping cart using Redux to manage cart and custom hook to fetch data."
          p2="Styling is done using pure Emotion.js"
          p3="Tech stack: React, Redux, EmotionJS"
          githubLink="https://github.com/QuanDev2/candy-store"
          externalLink="https://main.d3ekhobmeh046n.amplifyapp.com/"
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
      </div>
    </div>
  )
}

export default Portfolio
