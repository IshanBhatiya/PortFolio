import React from 'react'

export default function ProjectList({ project }) {


    return (

        <div className='container '>
            <div className="projectGrids">
                <div className='projectList'>
                    <ul>
                        {project.map((project) => (
                            <li key={project.id}>
                                <div className='ProjectInfo ' >
                                    <div className="ProjectInfo">
                                        <h2 className='heading'>{project.name}</h2>
                                    </div>
                                    <div className="ProjectInfo">
                                        <p>{project.description}</p>
                                        <p>{project.createdOn}</p>
                                        <p> <strong>Tech. Stack :  {project.tech}</strong> </p>
                                    </div>
                                </div>

                            </li>
                        ))}
                    </ul>
                        <div className="button  text-center">
                            <a href="https://github.com/IshanBhatiya" target='_blank' rel='noreferrer'>
                                <button className='btn btn-outline-dark'> Open more Projects</button>
                            </a>
                        </div>
                </div>

            </div>
        </div>
    )
}
