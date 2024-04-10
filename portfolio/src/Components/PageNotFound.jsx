import React from 'react'
import NotFound from '../Assets/404 error lost in space-pana.svg'
export default function PageNotFound() {
  return (
    <div className='container-fluid'>
        <img id='notfound' src={NotFound} alt="" /> 

        <div className="button">
            <a href="/home">
                <button id='pageNotFoundBtn' className='btn btn-outline-dark '> Back To Home </button>
            </a>
            </div>       
    </div>
  )
}