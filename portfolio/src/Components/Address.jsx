import React from 'react'
import addressMail from '../Assets/contactMail.png'
export default function Address() {
    const location = process.env.REACT_APP_Google_Location;
    return (
        <div className='container'>
            <div className="card mb-3 mt-xxl-5 " />
            <div className="address d-flex  justify-content-center align-items-center">
                <div className="aside">
                    <div className="address-info">
                        <h1 className='text-center'>Address</h1>
                        <h6 className='text-center mt-3'>Shimla,Sanjauli ,Himachal Pradesh 171012.</h6>
                    </div>
                    <div className="addressLink mt-5 ">
                        <a className='text-center ms-5 ' target='_blank' rel="noreferrer" href={location}>
                            <button className='btn btn-outline-dark '>
                                Visit On Google Map
                            </button>
                        </a>
                    </div>
                </div>

                <div className="addressImage">
                    <img id='address' src={addressMail} alt="" />
                </div>
            </div>
        </div>
    )
}
