import React from 'react'
import Header from '../Components/Header'
import HeroSection from '../Components/HeroSection'
import Profession from '../Components/Profession'
import Work from '../Components/Work'
import Footer from '../Components/Footer'

export default function Home() {
    return (
        <div>
           <Header/>
           <HeroSection/>
           <Profession/>
           <Work/>
           <Footer/>
        </div>
    )
}
