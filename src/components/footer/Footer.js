import React from 'react'
import './footer.css'
function Footer() {
  const handleJumpClick = () => {
    window.scrollTo(0,0);
  }
  return <div className='footer'>
      <div className='footer-icon' onClick={handleJumpClick}>
          Jump to top
      </div>
      <div className='footer-name'>
        {'By Nick Bowden'}
      </div>      
      <div><a href="https://www.vecteezy.com/vector-art/2159405-alphabet-letter-with-abstract-gradient-background-letter-n">Logo by Vecteezy</a></div>  
      <div><a href="https://storyset.com/illustration/source-code/bro">Illustration by StorySet</a></div>
    </div>
}

export default Footer
