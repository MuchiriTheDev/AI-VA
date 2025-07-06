import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaEnvelope } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 180,
      damping: 15,
      duration: 0.4,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 4px 12px rgba(240, 98, 146, 0.3)',
    transition: { duration: 0.2 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 180,
      damping: 15,
      duration: 0.4,
    },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
};

const FinalCallToAction = () => {
  return (
    <section
      id="final-call-to-action"
      className="w-full max-w-[100vw] min-h-[30vh] h-fit py-6 sm:py-8 lg:py-10 bg-gray-200 relative"
    >
      <motion.div
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Headline */}
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 leading-tight"
          style={{ color: '#C8287E' }} // Pink 300
          variants={itemVariants}
        >
          Ready to Delegate Like a CEO?
          <span className="block w-24 h-1 mx-auto mt-2 bg-gradient-to-r from-[#C8287E] to-[#C8287E] rounded-full"></span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          className="text-sm sm:text-base leading-relaxed mb-6"
          style={{ color: '#333333' }} // Purple 500
          variants={itemVariants}
        >
          Let’s match you with your perfect VA—so you can reclaim your time and scale with ease.
        </motion.p>

        {/* Primary CTA: Book a Free Discovery Call */}
        <motion.a
          href="#book-call"
          className="inline-flex items-center px-5 py-2.5 text-sm sm:text-base font-semibold rounded-full shadow-lg mb-4"
          style={{ backgroundColor: '#C8287E', color: '#FFFFFF' }} // Pink 300
          variants={itemVariants}
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
        >
          <FaCalendarAlt className="mr-2 text-sm sm:text-base" style={{ color: '#FFFFFF' }} aria-hidden="true" />
          Book a Free Discovery Call
        </motion.a>

        {/* Additional Info */}
        {/* <motion.p
          className="text-xs sm:text-sm font-bold leading-relaxed mb-4"
          style={{ color: '#333333' }} // Dark gray
          variants={itemVariants}
        >
           Includes a 20-min VA strategy session, even if we’re not the right fit.
        </motion.p> */}

        {/* Secondary CTA: Request a Package Here */}
        {/* <motion.a
          href="#request-quote"
          className="inline-flex items-center text-sm sm:text-base font-medium underline decoration-[#C8287E] decoration-2 hover:decoration-4 transition-all duration-200"
          style={{ color: '#C8287E' }} // Purple 500
          variants={linkVariants}
          whileHover="hover"
        >
          <FaEnvelope className="mr-2 text-sm sm:text-base" style={{ color: '#C8287E' }} aria-hidden="true" />
          Want a custom quote? Request a Package Here
        </motion.a> */}
      </motion.div>
    </section>
  );
};

export default FinalCallToAction;