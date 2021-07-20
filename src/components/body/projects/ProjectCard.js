import React from 'react'
import './project-card.css'
import HelpDeskVideo from '../HoverVideo'

function ProjectCard({ project }) {
  return <div className='project-card'>
    <div className='project-info'>  
      <label className='project-title'>{project.title}</label>
      <div className='project-links'>
        {project.demo && 
          <a className='project-link' href={project.demo}>
            <div className='link-button'>
              <i className="fi-rr-globe"></i>Demo
            </div>
          </a>}
        {project.github && 
          <a className='project-link' href={project.github}>
            <div className='link-button'>
            <i className="devicon-github-original"></i>Github
            </div>
          </a>}
      </div>
      <>{project.description.split('\n').map((item, i) =><p key={i}>{item}</p>)}</>
      <div className='project-tags'>
        {project.tags.map((tag) => {
          return(
            <label key={`${tag}${project.id}`} className='tag'>{tag}</label>
          )
        })}
      </div>
    </div> 
    <HelpDeskVideo className='project-photo'  vidSrc={project.video} imgSrc={project.image}/>
    
    
  </div>
  
}

export default ProjectCard
