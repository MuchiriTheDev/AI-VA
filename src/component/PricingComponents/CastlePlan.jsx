import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaCalendarAlt, FaEnvelope, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
    boxShadow: '0 8px 16px rgba(200, 40, 126, 0.3)', // Adjusted for #C8287E
    transition: { duration: 0.2 },
  },
};

const CastlePlan = () => {
  const castleFeatures = [
    'Multiple VAs or team structure',
    'Special tools, platforms, or time zones',
    'Dedicated project management',
    'Priority onboarding + full agency support',
    'White-glove service',
  ];

  return (
    <section
      id="castle-plan"
      className="w-full max-w-[100vw] min-h-[60vh] h-fit py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#C8287E]/5 relative overflow-hidden"
    >
      <motion.div
        className="max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Castle Plan Card */}
        <motion.div
          className="bg-white rounded-xl p-8 max-w-3xl mx-auto shadow-lg border-2 border-[#C8287E] mb-10 relative"
          variants={itemVariants}
          whileHover="hover"
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-color text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
            <FaHome className="mr-1" aria-hidden="true" /> Premium Plan
          </div>
          <FaHome className="text-4xl text-color mb-4 mx-auto" aria-hidden="true" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-color mb-2">
            The Castle – Custom Quote
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
            For multi-brand founders, teams, and VIPs who need{' '}
            <span className="font-semibold text-color">layered support</span>.
          </p>
          <ul className="text-sm text-gray-600 mb-6">
            {castleFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start mb-2">
                <FaCheckCircle className="text-color mr-2 mt-1" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Link
            to="https://zcal.co/carolinekabi/discovery-call-30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-sm sm:text-base font-semibold rounded-full bg-color text-white shadow-md hover:bg-[#a62066] transition-colors duration-300"
            aria-label="Book a strategy call to explore The Castle custom pricing plan with AI Empowered Virtual Assistants"
          >
            <FaCalendarAlt className="mr-2 text-sm sm:text-base" aria-hidden="true" />
            Book a Strategy Call
          </Link>
        </motion.div>

        {/* Not Sure Where You Fit? */}
        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-color mb-4">
            Not Sure Where You Fit?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
            We’ll help you choose the right level of support for where you are and where you’re going.{' '}
            <span className="font-semibold text-color">
              Every plan includes onboarding, founder support, and a full-time VA matched just for you.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="mailto:info@empoweredaiva.com"
              className="inline-flex items-center px-6 py-3 text-sm sm:text-base font-semibold rounded-full bg-white border border-[#C8287E] text-color shadow-md hover:bg-[#C8287E]/10 transition-colors duration-300"
              variants={itemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              aria-label="Contact AI Empowered Virtual Assistants via email for pricing questions"
            >
              <FaEnvelope className="mr-2 text-sm sm:text-base" aria-hidden="true" />
              Contact Us Directly
            </Link>
            <Link
              to="https://zcal.co/carolinekabi/discovery-call-30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-sm sm:text-base font-semibold rounded-full bg-color text-white shadow-md hover:bg-[#a62066] transition-colors duration-300"
              variants={itemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              aria-label="Book a free discovery call to find the right virtual assistant plan with AI Empowered Virtual Assistants"
            >
              <FaCalendarAlt className="mr-2 text-sm sm:text-base" aria-hidden="true" />
              Book a Free Discovery Call
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CastlePlan;