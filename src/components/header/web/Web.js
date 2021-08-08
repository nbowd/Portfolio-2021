import React from 'react'
import Pdf from '../../../assets/documents/NickBowdenResume2021.pdf'
import './web.css'

function Web() {
  return <div className='web'>
    <div className='web-option'>
      <a href='#projects'>
        <i className="fi-rr-edit-alt option-icon"></i>Projects
      </a>
    </div>

    <div className='web-option'>
     <a href={Pdf} target="_blank" rel="noopener noreferrer" className='resume-btn'>Resume</a>
    </div>
  </div>
}

export default Web
