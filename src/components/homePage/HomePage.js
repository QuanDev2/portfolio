import React from 'react'
import Welcome from './Welcome'
import SocialMediaPole from '../utils/SocialMediaPole'

const Style = {
  height: '100vh',
}

function HomePage() {
  return (
    <div id="HomePage" style={Style}>
      <SocialMediaPole />
      <Welcome />
    </div>
  )
}

export default HomePage
