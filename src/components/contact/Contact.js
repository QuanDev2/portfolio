import React from 'react'
import Footer from '../utils/Footer'
import './Contact.css'


function Contact() {
  return (
    <div id="Contact">

      <h1>Get In Touch</h1>
      <div className="Content">
        <p>I'm currently open for hire</p>
        <p>I'm happy to connect with anyone, whether you're a recruiter or my fellow developers out there. </p>
        <p>Just drop me an email and I'll get back to you as soon as possible.</p>
        <a className="btn-contact" href="mailto:qnguyen.dev2@gmail.com">Say Hi</a>
      </div>
      <Footer />


    </div>
  )
}

export default Contact
