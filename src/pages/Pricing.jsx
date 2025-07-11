import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import PricingPlans from '../component/PricingComponents/PricingPlans'
import CastlePlan from '../component/PricingComponents/CastlePlan'

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <PricingPlans />
      <CastlePlan />
      <Footer/>
    </div>
  )
}

export default Pricing