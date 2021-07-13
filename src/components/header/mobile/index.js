import React from 'react'
import './mobile.css'

function Mobile({ isOpen, setIsOpen }) {
  return <div className='mobile'> 
    <div className='close-icon' onClick={() => setIsOpen(!isOpen)}>
      <i className="fi-rr-cross-circle"></i>
    </div>
    <div className='mobile-options'>
      <div className='mobile-option'>
        <a href='#project'>
          <i className="fi-rr-edit-alt option-icon"></i>Projects
        </a>
      </div>
    </div>
  </div> 
}

export default Mobile
