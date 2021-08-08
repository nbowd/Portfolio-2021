import React from 'react'
import './about.css'
import SocialContact from './social-contact/SocialContract'

function About() {
  return <div className='about'>
    <div className='about-top'>
      <div className='about-info'>
        <div className="slim-shady">Hi, my name is </div>
        <div className='info-name'>Nick Bowden.</div>
        <div className="info-highlight">I build things for the web.</div>
        <div className='info-c2a'>Get in touch and let's create something unique!</div>
      </div>
      <div className='about-photo'>
        <img title="That's me. I can do that." src={require('../../../assets/images/coding.png').default} className="about-img" alt="A person peeling back the website interface to see the code underneath. That's me. I'm that good."></img>
      </div>
    </div>
    <div className='about-bottom'>
      <SocialContact />
    </div>
  </div>
}

export default About
