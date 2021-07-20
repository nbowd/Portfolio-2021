import React, { useState } from 'react'
import './header.css'
import Mobile from './mobile/Mobile'
import Web from './web/Web'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  window.onscroll = function () {
    setIsOpen(false);
  };

  return <div className='header'>
    <div className='logo'><img src={require('../../assets/icons/favicon.png').default} alt="Stylized Letter N as a logo"></img></div>
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
