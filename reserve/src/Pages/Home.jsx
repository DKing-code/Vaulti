import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Featured from '../components/Featured'
import Testimonials from '../components/Testimonials'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import Map from '../components/Map'
import {
  PhoneIcon 
} from "@heroicons/react/24/solid"

function Home() {
  return (
    <div>
        
        <Hero/>
        <Services/>
        <Featured/>
        <Testimonials/>
        <Map/>
        <Partners/>
        <Footer/>
    </div>
  )
}

export default Home