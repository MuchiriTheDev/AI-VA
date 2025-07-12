import React from 'react';
import { assets } from '../../assets/assets';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutHero = () => {
  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  // Animation variants for image/video
  const mediaVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: 'easeOut' } },
  };

  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C8287E]/10 to-white opacity-50 z-0"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-10 z-10">
        {/* Left Content: Text */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            For the  <span className="text-gray-900">Founder Who’s</span> <br />
             <span className="text-color">Been Doing It All.</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed max-w-md mx-auto lg:mx-0">
            Stop juggling endless tasks. Our AI-powered virtual assistant handles the details, so you can focus on what matters most—growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to={'"https://zcal.co/carolinekabi/discovery-call-30min'}
              className="relative bg-color text-white font-semibold py-2 px-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 bg-opacity-95 hover:bg-opacity-100 overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Get Started with AI Virtual Assistant"
            >
              Book Now
              <span className="absolute inset-0 rounded-full bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
            </Link>
           
          </div>
        </motion.div>

        {/* Right Content: Visual Element */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial="hidden"
          animate="visible"
          variants={mediaVariants}
        >
          <div className="relative group">
            {/* Decorative Background Circle with Animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#C8287E] to-[#a62066] opacity-20 rounded-full w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px] transform translate-x-8 translate-y-8"
              animate={{ rotate: 360, scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
            ></motion.div>
            {/* Image or Video */}
            <div className="relative w-[280px] h-[360px] sm:w-[340px] sm:h-[440px] lg:w-[380px] lg:h-[480px] rounded-2xl shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
              <img
                src={assets.heroabout}
                alt="AI-powered virtual assistant in action"
                className="w-full h-full object-cover"
              />
              {/* Optional: Replace with video for landing page impact */}
              {/* <video
                src={assets.heroVideo}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
                aria-label="AI Virtual Assistant Demo"
              /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#C8287E]/40 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;