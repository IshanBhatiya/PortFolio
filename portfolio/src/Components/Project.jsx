import React from 'react'
import projectLogo from '../Assets/projects_image.svg'
export default function Project() {
  return (
    <div className='container'>
      <div className="project">
        <div className="project-logo">
          <img className='img-fluid' id='projectLogo' src={projectLogo} alt="Loading..." />
        </div>
        <div className="projectInfo">
          <h1 className='projectHeading'>Projects</h1>
          <p className='projectSubHeading'><strong>I don't just code, I architect.</strong>
            As a full-stack developer with a computer science background,
            I excel at translating insights into user-friendly web applications.
            I leverage my diverse skill-set to conquer challenges across the entire development stack,
            from crafting clean, efficient code to designing intuitive user interfaces.
            Fueled by a passion for innovation, I thrive in complex environments and embrace new
            technologies to deliver best-in-class solutions.</p>
        </div>
      </div>
    </div>
  )
}
