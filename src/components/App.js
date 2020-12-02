import './App.css';
import HomePage from './homePage/HomePage'
import AboutMe from './aboutMe/AboutMe'
import Portfolio from './portfolio/Portfolio';
import Resume from './resume/Resume';



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


    </div>
  );
}

export default App;
