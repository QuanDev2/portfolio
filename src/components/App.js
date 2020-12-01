import './App.css';
import HomePage from './homePage/HomePage'
import AboutMe from './aboutMe/AboutMe'
import Portfolio from './portfolio/Portfolio';



function App() {
  return (
    <div className="app">
      {/* homepage */}
      <HomePage />

      {/* about me */}
      <AboutMe />

      {/* portfolio */}
      <Portfolio />



    </div>
  );
}

export default App;
