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
      <div>
        {'By Nick Bowden'}
      </div>        
    </div>
}

export default Footer
