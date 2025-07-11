import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Pricing from './pages/Pricing'
import ContactUs from './pages/ContactUs'
import Services from './pages/Services'

const App = () => {
  const location = useLocation()

   useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default App