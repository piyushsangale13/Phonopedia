import React from 'react'
import HeroSection from './components/HeroSection'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function HomePage() {
  return (
    <div>
        <HeroSection/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default HomePage