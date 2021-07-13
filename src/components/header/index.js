import React, { useState } from 'react'
import './header.css'
import Mobile from './mobile/index'
import Web from './web/index'

function Header() {
  const  [isOpen, setIsOpen] = useState(false)
  
  return <div className='header'>
    <div className='logo'>Nick Bowden</div>
    <div className='menu'>
      <div className='web-menu'>
        <Web />
      </div>
      <div className='mobile-menu'>
        <div onClick={() => setIsOpen(!isOpen)}>
          <i className="fi-rr-menu-burger menu-icon"></i>
        </div>
        {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div> 
    </div>
  </div>
}

export default Header  
