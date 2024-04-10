import React from 'react'
import image from '../Assets/programmer.svg'
import html from '../Assets/html-5-svgrepo-com.svg'
import css from '../Assets/css-3-svgrepo-com.svg'
import react from '../Assets/react-svgrepo-com.svg'
import angular from '../Assets/angular-icon-logo-svgrepo-com.svg'

import java from '../Assets/java-4-logo-svgrepo-com.svg'
import javascript from '../Assets/javascript-svgrepo-com.svg'
import node from '../Assets/node-js-svgrepo-com.svg'


import git from '../Assets/git-svgrepo-com.svg'
import github from '../Assets/github-color-svgrepo-com.svg'
import gitlab from '../Assets/gitlab-svgrepo-com.svg'



export default function Profession() {
    return (
        <div className='container mt-lg-5 '>
         <div className="card mb-3 mt-xxl-5 " />
            <div className="heading mt-xl-5 ">
                <h1 className='sub-Heading text-center'> Technologies i Know  </h1>
            </div>
            <div className="container d-flex ">
                <div className='img mt-5'>
                    <img id="img2" src={image} alt="" />
                </div>
                <div className="info mt-5">
                    <h3 className='text-center mt-3'>Full Stack Developer</h3>

                    <div className="small-Images d-flex mt-5 ">
                        <img className="small-Images m-lg-2" src={html} alt="" title='HTML-5'/>
                        <img className="small-Images m-lg-2" src={css} alt="" title='CSS-3'/>
                        <img className="small-Images m-lg-2" src={react} alt="" title='React-Js'/>
                        <img className="small-Images m-lg-2" src={angular} alt="" title='Angular-17'/>

                    </div>
                    <div className='d-flex mt-5'>
                        <img className="small-Images" src={java} alt="" title='Java'/>
                        <img className="small-Images" src={javascript} alt="" title='JavaScript'/>
                        <img className="small-Images" src={node} alt="" title='Node-Js'/>
                    </div>
                    <div className='d-flex mt-5 ms-lg-5'>
                        <img className="small-Images" src={git} alt="" title='Git'/>
                        <img className="small-Images" src={github} alt="" title='Git-hub'/>
                        <img className="small-Images" src={gitlab} alt="" title='Git-Labs'/>
                    </div>
                </div>
            </div>
            <div className="container-fluid m-lg-5 ">
                <h6>Hey there! I'm a full-stack developer, basically the web-wrangler. Think of me as both the architect and interior designer of websites and apps. I build the user-friendly facade you see (all that fancy clicking and swiping), and the engine room that makes it tick (data, databases, the whole shebang). From flashy buttons to the brainy backend, I speak all the languages to bring your project to life –  HTML, CSS, JavaScript for the front, and Nodejs or Java for the back.  Pretty cool, right?  I can turn your ideas into reality, all by myself – no specialist team needed here!</h6>
            </div>
        </div>
    )
}
