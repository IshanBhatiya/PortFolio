import React from 'react'
import graduation from '../Assets/education.svg'
import niit from '../Assets/niit.png'
import coe from '../Assets/COE.jpg'


export default function Education() {
  return (
    <div className='container mt-xl-5 '>
      <div className="certificates">
        <img className='img-fluid' id='g-edu' src={graduation} alt="" />

        <div className="info mt-lg-3 align-content-center  ">
          <h1 className='sub-info text-center '>
            Education
          </h1>
          <h4 className='sub-info text-center '>
            Basic Qualification and Certifications
          </h4>
        </div>
      </div>

      <div className="container mt-xl-5">

        <div className="card mb-3 mt-xxl-5 " />
        <div className="row g-0">

          <div className="col-md-4">
            <img id='niit' src={niit} className="img-fluid rounded-start" alt="..." />
          </div>

          <div className="col-md-8">
            <div className="card-body mt-2">
              <h3 className="card-title fw-bold "> National Institute of Information Technology </h3>
              <h6 className='card-sub-title mt-3 ms-2'> PGP IN FULL STACK SOFTWARE ENGINEERING </h6>
              <h6 className="card-text ms-2 "> Year Of Passing : Pursuing </h6>
              <p className="card-skills fw-bold "> Skills : Java , Spring-Boot ,React , Angular , BootStrap ,Material UI ,MERN , MEAN , MySql, Mongo Database</p>
            </div>

            <div className="button mt-4 float-end ">
              <a className=' text-decoration-none' href="https://www.niit.com/india/">
                <button className='btn btn-outline-dark'>
                  Visit Site
                </button>
              </a>
            </div>

          </div>
        </div>

      </div>




      <div className="container card2 mt-xl-5 ms-xxl-5 " >
        <div className="card mb-3 mt-xxl-5 " />

        <div className="gradation">
          <div className="row g-0 flex-row-reverse">
            <div className="col-md-4">
              <img id='college' src={coe} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title fw-bold "> Centre of Excellence, Government Degree College, Sanjauli, Shimla </h3>
                <h6 className='card-sub-title mt-3 ms-2'> BCA : Bachelor of Computer Application </h6>
                <h6 className="card-text ms-2 "> CGPA : 6.9 </h6>
                <h6 className="card-text ms-2 "> Year Of Passing : 2022  </h6>
              </div>

              <div className="button mt-4 mb-xl-5 ">
                <a className=' text-decoration-none' href="https://www.gcsanjauli.edu.in/">
                  <button className='btn btn-outline-dark'>  Visit Site
                  </button>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>





  )
}
