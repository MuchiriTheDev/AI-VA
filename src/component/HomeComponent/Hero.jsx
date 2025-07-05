import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';
import { assets } from '../../assets/assets';

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const buttonVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${assets.hero})`, // Assumes hero image is correctly set in assets
      }}
    >
      {/* Overlay for text legibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
          style={{ color: '#F06292' }} // Pink 300
          variants={childVariants}
        >
          You Lead. We Lift.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-sm sm:text-base  max-w-2xl mx-auto mb-6 leading-relaxed"
          style={{ color: '#E0E0E0' }} // Light gray for contrast
          variants={childVariants}
        >
          Say goodbye to overwhelm. We match you with a highly skilled, AI-powered Virtual Assistant who thinks strategically and works like a second brain—so you can focus on what matters most.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#book-call" // Replace with your booking link
          className="inline-flex items-center px-5 py-2.5 text-base font-semibold rounded-full shadow-lg"
          style={{ backgroundColor: '#F06292', color: '#FFFFFF' }} // Pink 300 button
          variants={buttonVariants}
          whileHover="hover"
        >
          <FaCalendarAlt className="mr-2 text-sm" />
          Book Your Free Discovery Call
        </motion.a>

        {/* Small Note */}
        <motion.p
          className="mt-3 text-xs sm:text-sm font-bold"
          style={{ color: '#ffffff' }} // Purple 500
          variants={childVariants}
        >
          Takes less than 2 minutes to apply.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;