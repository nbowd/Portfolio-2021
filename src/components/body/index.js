import React from 'react'
import './body.css'
import About from './about/index'
import Projects from './projects/index'

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
