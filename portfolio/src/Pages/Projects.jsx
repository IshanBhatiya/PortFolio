import React from 'react'

import Project from '../Components/Project'
import ProjectList from '../Components/ProjectList'
import Footer from '../Components/Footer'

import { project } from '../Components/ProjectData';


export default function Projects() {
  return (
    <div>
        <Project/>
        <ProjectList project = {project}/>
        <Footer/>

    </div>
  )
}
