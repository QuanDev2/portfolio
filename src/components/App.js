import './App.css';
import HomePage from './homePage/HomePage';
import AboutMe from './aboutMe/AboutMe';
import Portfolio from './portfolio/Portfolio';
import Resume from './resume/Resume';
import Contact from './contact/Contact';
import Header from './utils/Header';
import SocialMediaPole from './utils/SocialMediaPole';
import { useState, useEffect } from 'react';
import HashLoader from 'react-spinners/HashLoader';
import testUtils from 'react-dom/test-utils';

function App() {
	document.title = 'Quan Nguyen';
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2500);
	}, []);

	return (
		<>
			{loading ? (
				<div className="loader">
					<HashLoader color="#28a498" size={150}/>
				</div>
			) : (
				<div className="app">
					{/* Header */}
					<Header />

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
			)}
		</>
	);
}

export default App;
