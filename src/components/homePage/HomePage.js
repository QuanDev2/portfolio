import React from 'react'
import Header from '../utils/Header'
import Welcome from './Welcome'
import SocialMediaPole from '../utils/SocialMediaPole'

const Style = {
  height: '100vh',
}

function HomePage() {
  return (
    <div id="HomePage" style={Style}>
      <Header />
      <SocialMediaPole />
      <Welcome />
    </div>
  )
}

export default HomePage
