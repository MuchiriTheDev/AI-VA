import React from 'react';
import { motion } from 'framer-motion';
import { FaUserCheck, FaRobot, FaBriefcase, FaPhone, FaClock, FaConciergeBell, FaSyncAlt, FaDollarSign } from 'react-icons/fa';

const values = [
  {
    id: 1,
    title: 'Personalized VA Matching',
    description: 'Paired with the perfect VA for your needs.',
    icon: <FaUserCheck className="text-xs sm:text-sm" style={{ color: '#C8287E' }} aria-hidden="true" />,
  },
  {
    id: 2,
    title: 'AI-Skilled VA',
    description: 'Trained in AI tools and automations.',
    icon: <FaRobot className="text-xs sm:text-sm" style={{ color: '#C8287E' }} aria-hidden="true" />,
  },
  {
    id: 3,
    title: 'Business & Personal Support',
    description: 'Handles admin, marketing, and more.',
    icon: <FaBriefcase className="text-xs sm:text-sm" style={{ color: '#C8287E' }} aria-hidden="true" />,
  },
  {
    id: 4,
    title: 'Strategy & Onboarding',
    description: 'Strategy calls with founder support.',
    icon: <FaPhone className="text-xs sm:text-sm" style={{ color: '#C8287E' }} aria-hidden="true" />,
  },
  {
    id: 5,
    title: 'Weekly Check-Ins',
    description: 'Regular updates to stay on track.',
    icon: <FaClock className="text-xs sm:text-sm" style={{ color: '#C8287E' }} aria-hidden="true" />,
  },
];

const bonuses = [
  {
    id: 6,
    title: 'Onboarding Concierge',
    description: 'Personalized support to start.',
    icon: <FaConciergeBell className="text-xs sm:text-sm" style={{ color: '#C8287E' }} aria-hidden="true" />,
  },
  {
    id: 7,
    title: 'VA Match Guarantee',
    description: 'Free rematch if needed.',
    icon: <FaSyncAlt className="text-xs sm:text-sm" style={{ color: '#C8287E' }} aria-hidden="true" />,
  },
  {
    id: 8,
    title: 'Flexible Pricing',
    description: 'Custom packages for you.',
    icon: <FaDollarSign className="text-xs sm:text-sm" style={{ color: '#C8287E' }} aria-hidden="true" />,
  },
];

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 12,
      duration: 0.3,
    },
  },
  hover: {
    scale: 1.02,
    boxShadow: '0 3px 8px rgba(240, 98, 146, 0.2), 0 0 0 1px #C8287E',
    transition: { duration: 0.15 },
  },
};

const ValueProposition = () => {
  return (
    <section
      id="value-proposition"
      className="w-full py-6 sm:py-8 bg-white relative"
    >
      <motion.div
        className="w-full px-4 sm:px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Main Headline */}
        <motion.h2
          className="text-xl sm:text-3xl md:text-4xl font-bold mb-1 text-center"
          style={{ color: '#C8287E' }}
          variants={itemVariants}
        >
          AI-Trained. Business-Savvy.
          <span className="block w-24 h-0.5 mx-auto mt-1 bg-gradient-to-r from-[#C8287E] to-[#C8287E] rounded-full"></span>
        </motion.h2>

        {/* Subheadline */}
        <motion.h3
          className="text-base sm:text-lg font-bold mb-6 text-center"
          style={{ color: '#333333' }}
          variants={itemVariants}
        >
          Your growth partner awaits.
        </motion.h3>

        {/* Two-Column Layout */}
        <div className="flex flex-col gap-4">
          {/* What's Included Section */}
          <div>
            <motion.h4
              className="text-base sm:text-lg font-bold mb-3 text-center"
              style={{ color: '#C8287E' }}
              variants={itemVariants}
            >
              What’s Included:
            </motion.h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map((value) => (
                <motion.div
                  key={value.id}
                  className="bg-white p-3 rounded-md shadow-sm border border-[#C8287E] bg-gradient-to-b from-gray-50 to-gray-100 hover:shadow transition-shadow duration-200 flex items-start"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 mr-2 mt-1">{value.icon}</div>
                  <div>
                    <h5
                      className="text-sm sm:text-base font-semibold"
                      style={{ color: '#C8287E' }}
                    >
                      {value.title}
                    </h5>
                    <p
                      className="text-xs sm:text-sm leading-relaxed"
                      style={{ color: '#333333' }}
                    >
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Your Bonus Support Section */}
          <div>
            <motion.h4
              className="text-base sm:text-lg font-bold mb-3 text-center"
              style={{ color: '#C8287E' }}
              variants={itemVariants}
            >
              Your Bonus Support:
            </motion.h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {bonuses.map((bonus) => (
                <motion.div
                  key={bonus.id}
                  className="bg-white p-3 rounded-md shadow-sm border border-[#C8287E] bg-gradient-to-b from-gray-50 to-gray-100 hover:shadow transition-shadow duration-200 flex items-start"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 mr-2 mt-1">{bonus.icon}</div>
                  <div>
                    <h5
                      className="text-sm sm:text-base  font-semibold"
                      style={{ color: '#C8287E' }}
                    >
                      {bonus.title}
                    </h5>
                    <p
                      className="text-xs sm:text-sm leading-relaxed"
                      style={{ color: '#333333' }}
                    >
                      {bonus.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ValueProposition;