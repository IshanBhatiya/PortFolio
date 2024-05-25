import React from 'react'
import work from '../Assets/fullstack.svg'

export default function Work() {
    return (
        <div className='Work'>
            <div className="card mb-3 mt-xxl-5 " />

            <h2 className='work-heading mt-xl-5'> What I Do ? </h2>

            <div className="container">

                <div className="work">
                    <div>
                        <ul className='points'>
                            <li className='sub-points'>Building responsive website front end using React and Angular</li>
                            <li className='sub-points'>Creating application backend in Node, Express and Java language</li>
                            <li className='sub-points'>Designing highly attractive user interface for web applications</li>
                            <li className='sub-points'>Committed to continuous learning and growth</li>
                            <li className='sub-points'>seeking challenging opportunities to apply my skills and contribute to innovative projects</li>
                        </ul>
                    </div>


                    <div className="img3">
                        <img className='img-fluid ' id='img3' src={work} alt="Loading..." />
                    </div>
                </div>
            </div>

        </div>
    )
}
