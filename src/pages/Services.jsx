import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import ServicesHero from '../component/ServicesComponent/ServicesHero'
import WhyChooseUs from '../component/ServicesComponent/WhyChooseUs'
import FreeResource from '../component/ServicesComponent/FreeResource'

const Services = () => {
  return (
    <div>
        <Navbar />
        <ServicesHero />
        <FreeResource />
        <WhyChooseUs />
        <Footer />
    </div>
  )
}

export default Services