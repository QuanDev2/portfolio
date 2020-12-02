import './App.css';
import HomePage from './homePage/HomePage'
import AboutMe from './aboutMe/AboutMe'
import Portfolio from './portfolio/Portfolio';
import Resume from './resume/Resume';
import Contact from './contact/Contact';



function App() {
  return (
    <div className="app">
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
    </div>
  );
}

export default App;
