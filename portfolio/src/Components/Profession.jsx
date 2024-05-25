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
        <div className='container'>
            <div className="card mb-3 " />
            <div className="heading ">
                <h1 className='sub-Heading text-center'> Technologies i Know  </h1>
            </div>
            <div className="container d-flex flex-wrap align-items-center  ">
                <div className='img '>
                    <img id="img2" src={image} alt="Loading..." />
                </div>
                <div className="stack-Info">
                    <div>

                        <div className="tech-icon mt-4 ">
                            <img className="small-Images m-lg-2" src={html} alt="Loading..." title='HTML-5' />
                            <img className="small-Images m-lg-2" src={css} alt="Loading..." title='CSS-3' />
                            <img className="small-Images m-lg-2" src={react} alt="Loading..." title='React-Js' />
                            <img className="small-Images m-lg-2" src={angular} alt="Loading..." title='Angular-17' />
                        </div>

                        <div className='tech-icon mt-4 '>
                            <img className="small-Images" src={java} alt="Loading..." title='Java' />
                            <img className="small-Images" src={javascript} alt="Loading..." title='JavaScript' />
                            <img className="small-Images" src={node} alt="Loading..." title='Node-Js' />
                        </div>

                        <div className='tech-icon mt-4 '>
                            <img className="small-Images" src={git} alt="Loading..." title='Git' />
                            <img className="small-Images" src={github} alt="Loading..." title='Git-hub' />
                            <img className="small-Images" src={gitlab} alt="Loading..." title='Git-Labs' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mb-5 ">
                <h6>Hey there! I'm a full-stack developer, basically the web-wrangler.
                    Think of me as both the architect and interior designer of websites and apps.
                    I build the user-friendly facade you see (all that fancy clicking and swiping),
                    and the engine room that makes it tick (data, databases, the whole shebang).
                    From flashy buttons to the brainy backend, I speak all the languages to bring
                    your project to life –  HTML, CSS, JavaScript for the front, and Nodejs or Java
                    for the back.  Pretty cool, right?  I can turn your ideas into reality,
                    all by myself – no specialist team needed here!</h6>
            </div>
        </div>
    )
}
