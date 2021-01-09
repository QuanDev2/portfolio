import './App.css';
import HomePage from './homePage/HomePage'
import AboutMe from './aboutMe/AboutMe'
import Portfolio from './portfolio/Portfolio';
import Resume from './resume/Resume';
import Contact from './contact/Contact';
import Header from './utils/Header';
import SocialMediaPole from './utils/SocialMediaPole';
import EmailPole from './utils/EmailPole';
import MobileNav from './utils/MobileNav';

function App() {
  document.title = 'Quan Nguyen';
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* Mobile nav bar */}
      <MobileNav />


      {/* Social media pole */}
      <SocialMediaPole />

      {/* homepage */}
      <HomePage />

      {/* about me */}
      <AboutMe />

      {/* portfolio */}
      <Portfolio />

      {/* Resume */}
      <Resume />

      {/* Contact page */}
      <Contact />

      {/* Footer */}

    </div>
  );
}

export default App;
