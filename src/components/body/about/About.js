import React from 'react'
import './about.css'
import SocialContact from './social-contact/SocialContract'

function About() {
  return <div className='about'>
    <div className='about-top'>
      <div className='about-info'>
        Hello there! My name is 
        <br /> <span className='info-name'>Nick Bowden. </span>
        <br />I'm a Web Developer currently based in Sequim, WA.
        <br />Get in touch and let's build something unique
      </div>
      <div className='about-photo'>
        <img src={require('../../../assets/images/coding.png').default} className="about-img" alt="A person peeling back the website interface to see the code underneath. That's me. I'm that good."></img>
      </div>
    </div>
    <div className='about-bottom'>
      <SocialContact />
    </div>
  </div>
}

export default About
