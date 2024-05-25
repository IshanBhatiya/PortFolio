import React from 'react'
import NotFound from '../Assets/404 error lost in space-pana.svg'
export default function PageNotFound() {
  return (
    <div className='container-fluid'>
        <img className='img-fluid ' id='notfound' src={NotFound} alt="" /> 

        <div className="button">
            <a href="/home">
                <button id='pageNotFoundBtn' className='btn btn-outline-dark btn-lg'> Back To Home </button>
            </a>
            </div>       
    </div>
  )
}