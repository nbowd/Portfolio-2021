import React from 'react'
import './body.css'
import About from './about/About'
import Projects from './projects/Projects'

function Body() {
  return <div className='body'>
      <section id='about'>
        <About />
      </section>
      <section id='projects'>
        <Projects />
      </section>
    </div>
}

export default Body
