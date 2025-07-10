import React from 'react'
import Navbar from '../component/Navbar'
import AboutHero from '../component/AboutComponent/AboutHero'
import MeetCaroline from '../component/AboutComponent/MeetCaroline'
import WhyIDoThis from '../component/AboutComponent/WhyIDoThis'
import WhatMakesUsDifferent from '../component/AboutComponent/WhatMakesUsDifferent'
import Footer from '../component/Footer'
import WhoWeServe from '../component/AboutComponent/WhoWeServe'
import AboutMeMore from '../component/AboutComponent/AboutMeMore'
import Revolution from '../component/AboutComponent/Revolution'

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <MeetCaroline />
      <WhyIDoThis />
      <WhatMakesUsDifferent />
      <WhoWeServe />
      <AboutMeMore />
      <Revolution />
      <Footer />
    </div>
  )
}

export default About