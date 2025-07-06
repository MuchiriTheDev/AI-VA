import React from 'react';
import { motion } from 'framer-motion';
import { FaUserCheck, FaRobot, FaBriefcase, FaPhone, FaClock, FaConciergeBell, FaSyncAlt, FaDollarSign } from 'react-icons/fa';

const values = [
  {
    id: 1,
    title: 'Personalized VA Matching',
    description: 'Based on your needs & goals, we pair you with the perfect VA.',
    icon: <FaUserCheck className="text-sm sm:text-base md:text-lg" style={{ color: '#C8287E' }} aria-hidden="true" />,
  },
  {
    id: 2,
    title: 'AI-Skilled VA',
    description: 'Fully trained with advanced AI skills (ChatGPT, tools, automations).',
    icon: <FaRobot className="text-sm sm:text-base md:text-lg" style={{ color: '#C8287E' }} aria-hidden="true" />,
  },
  {
    id: 3,
    title: 'Business & Personal Support',
    description: 'Admin, marketing, lifestyle—your VA handles it all.',
    icon: <FaBriefcase className="text-sm sm:text-base md:text-lg" style={{ color: '#C8287E' }} aria-hidden="true" />,
  },
  {
    id: 4,
    title: 'Strategy & Onboarding',
    description: 'Strategy calls + onboarding support with the founder.',
    icon: <FaPhone className="text-sm sm:text-base md:text-lg" style={{ color: '#C8287E' }} aria-hidden="true" />,
  },
  {
    id: 5,
    title: 'Weekly Check-Ins',
    description: 'Regular updates to ensure everything’s on track.',
    icon: <FaClock className="text-sm sm:text-base md:text-lg" style={{ color: '#C8287E' }} aria-hidden="true" />,
  },
];

const bonuses = [
  {
    id: 6,
    title: 'Dedicated Onboarding Concierge',
    description: 'Personalized support to get you started seamlessly.',
    icon: <FaConciergeBell className="text-sm sm:text-base md:text-lg" style={{ color: '#C8287E' }} aria-hidden="true" />,
  },
  {
    id: 7,
    title: 'VA Match Guarantee',
    description: 'Not vibing? We’ll rematch at no extra cost.',
    icon: <FaSyncAlt className="text-sm sm:text-base md:text-lg" style={{ color: '#C8287E' }} aria-hidden="true" />,
  },
  {
    id: 8,
    title: 'Flexible Pricing',
    description: 'Custom packages tailored to your needs.',
    icon: <FaDollarSign className="text-sm sm:text-base md:text-lg" style={{ color: '#C8287E' }} aria-hidden="true" />,
  },
];

// Animation variants for Framer Motion
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
  hidden: { opacity: 0, y: 20, scale: 0.95, rotate: 0 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 180,
      damping: 15,
      duration: 0.4,
    },
  },
  hover: {
    scale: 1.03,
    rotate: 1, // Subtle tilt for a professional yet dynamic effect
    boxShadow: '0 4px 12px rgba(240, 98, 146, 0.3), 0 0 0 2px #C8287E',
    transition: { duration: 0.2 },
  },
};

const ValueProposition = () => {
  return (
    <section
      id="value-proposition"
      className="w-full h-fit md:min-h-[80vh] h-fit py-8 sm:py-10 lg:py-12 bg-white relative"
    >
      <motion.div
        className="w-full  px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Main Headline */}
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 leading-tight text-center relative"
          style={{ color: '#C8287E' }} // Pink 300
          variants={itemVariants}
        >
          AI-Trained. Business-Savvy. Personally Matched.
          <span className="block w-32 h-1 mx-auto mt-2 bg-gradient-to-r from-[#C8287E] to-[#C8287E] rounded-full"></span>
        </motion.h2>

        {/* Subheadline */}
        <motion.h3
          className="text-sm font-bold sm:text-base font-semibold mb-8 text-center"
          style={{ color: '#333333' }} // Purple 500
          variants={itemVariants}
        >
          You get a mission-ready growth partner.
        </motion.h3>

        {/* Two-Column Layout */}
        <div className="flex flex-col gap-6 md:gap-8">
          {/* What's Included Section */}
          <div className="flex-1">
            <motion.h4
              className="text-sm sm:text-base md:text-lg font-semibold mb-4 text-center md:text-left"
              style={{ color: '#C8287E' }} // Purple 500
              variants={itemVariants}
            >
              What’s Included:
            </motion.h4>
            <div className="space-y-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {values.map((value) => (
                <motion.div
                  key={value.id}
                  className="bg-white p-4 sm:p-5 rounded-lg shadow-sm border-2 border-[#C8287E] bg-gradient-to-b from-gray-50 to-gray-100  hover:shadow-md transition-shadow duration-300 flex items-start"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 mr-3">{value.icon}</div>
                  <div>
                    <h5
                      className="text-sm sm:text-base md:text-lg font-semibold"
                      style={{ color: '#C8287E' }} // Purple 500
                    >
                      {value.title}
                    </h5>
                    <p
                      className="text-sm sm:text-base leading-relaxed"
                      style={{ color: '#333333' }} // Dark gray
                    >
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Your Bonus Support Section */}
          <div className="flex-1">
            <motion.h4
              className="text-sm sm:text-base md:text-lg font-semibold mb-4 text-center md:text-left"
              style={{ color: '#C8287E' }} // Purple 500
              variants={itemVariants}
            >
              Your Bonus Support:
            </motion.h4>
            <div className="space-y-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
              {bonuses.map((bonus) => (
                <motion.div
                  key={bonus.id}
                  className="bg-white p-4 sm:p-5 rounded-lg shadow-sm bg-gradient-to-b from-gray-50 to-gray-100  border-2 border-[#C8287E] hover:shadow-md transition-shadow duration-300 flex items-start"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 mr-3">{bonus.icon}</div>
                  <div>
                    <h5
                      className="text-sm sm:text-base md:text-lg font-semibold"
                      style={{ color: '#C8287E' }} // Purple 500
                    >
                      {bonus.title}
                    </h5>
                    <p
                      className="text-sm sm:text-base md:text-lg leading-relaxed"
                      style={{ color: '#333333' }} // Dark gray
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