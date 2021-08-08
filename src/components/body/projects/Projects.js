import React from 'react'
import Separator from '../../common/separator/index'
import { ProjectData } from '../../data/projects'
import ProjectCard from './ProjectCard'
import './projects.css'

function Projects() {
  const data = ProjectData
  return <div className='projects'>
      <div><label className='section-title'>Projects</label> <hr/></div>
      {data.map((project) => {
        return <div key={project.id}><ProjectCard  project={project}/> <hr/></div>
      })}
    </div>
  
}

export default Projects
