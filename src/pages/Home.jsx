import React from 'react'
import Hero from '../component/HomeComponent/Hero'
import WhatsHoldingYouBack from '../component/HomeComponent/WhatsHoldingYouBack'
import CoreBenefits from '../component/HomeComponent/CoreBenefits'
import Testimonial from '../component/HomeComponent/Testimonial'
import ValueProposition from '../component/HomeComponent/VaueProposition'
import FinalCallToAction from '../component/HomeComponent/FinalCallToAction'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <WhatsHoldingYouBack />
        <CoreBenefits />
        <Testimonial />
        <ValueProposition />
        <FinalCallToAction />
        <Footer />
    </div>
  )
}

export default Home