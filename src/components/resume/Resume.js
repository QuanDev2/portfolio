import React from 'react'
// import './Resume.css'

function Resume() {
	return (
		<div id="Resume">
			<h1>My resume</h1>
			<div className="Resume__Frame">
				<iframe
					src="https://drive.google.com/file/d/1WKEN4LsqoMOmZGYyiDJoN4vGQCBCA0x5/preview"
					width="640"
					height="480"
				></iframe>
				{/* <iframe
					src="https://drive.google.com/file/d/1WKEN4LsqoMOmZGYyiDJoN4vGQCBCA0x5/view?usp=sharing"
					frameborder="0"
				></iframe> */}
			</div>
		</div>
	)
}

export default Resume
