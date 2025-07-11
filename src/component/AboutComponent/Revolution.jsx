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
    boxShadow: '0 4px 12px rgba(200, 40, 126, 0.3)', // Adjusted for #C8287E
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

const Revolution = () => {
  return (
    <section
      id="revolution"
      className="w-full max-w-[100vw] min-h-[40vh] h-fit py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#C8287E]/5 relative overflow-hidden"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Headline */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-color mb-4 leading-tight"
          variants={itemVariants}
        >
          This Isn’t Just Delegation. It’s a{' '}
          <span className="italic text-[#a62066]">Revolution</span>.
          <span className="block w-32 h-1 mx-auto mt-3 bg-gradient-to-r from-[#C8287E] to-[#a62066] rounded-full"></span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          className="text-xs sm:text-sm text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto"
          variants={itemVariants}
        >
          We’re redefining how <span className="font-semibold text-color">founders lead</span>, how{' '}
          <span className="font-semibold text-color">talent in Kenya earns</span>, and what it means to
          be <span className="font-semibold text-color">supported</span> in a fast-moving world.
        </motion.p>

        {/* Content Block */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-8 mb-8 max-w-3xl mx-auto"
          variants={itemVariants}
          whileHover="hover"
        >
          <p className="text-xs sm:text-sm font-semibold text-gray-600 leading-relaxed">
            Ready to have the right person beside you—thinking ahead, executing boldly, and freeing you
            to do your <span className="text-color">best work</span>?
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={containerVariants}
        >
          <motion.a
            href="https://zcal.co/carolinekabi/discovery-call-30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2 text-xs sm:text-sm font-semibold rounded-full bg-color text-white shadow-lg"
            variants={itemVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            aria-label="Book a discovery call to join the revolution with AI Empowered Virtual Assistants"
          >
            <FaCalendarAlt className="mr-2 text-xs sm:text-sm" aria-hidden="true" />
            Book Your Discovery Call
          </motion.a>
          <motion.a
            href="mailto:info@empoweredaiva.com"
            className="inline-flex items-center px-5 py-2 text-xs sm:text-sm font-semibold rounded-full bg-white border border-[#C8287E] text-color shadow-lg"
            variants={linkVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            aria-label="Contact AI Empowered Virtual Assistants via email"
          >
            <FaEnvelope className="mr-2 text-xs sm:text-sm" aria-hidden="true" />
            Contact Us
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Revolution;