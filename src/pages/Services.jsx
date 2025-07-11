import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import ServicesHero from '../component/ServicesComponent/ServicesHero'
import WhyChooseUs from '../component/ServicesComponent/WhyChooseUs'

const Services = () => {
  return (
    <div>
        <Navbar />
        <ServicesHero />
        <WhyChooseUs />
        <Footer />
    </div>
  )
}

export default Services