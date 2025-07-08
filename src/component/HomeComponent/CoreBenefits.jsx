import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaConciergeBell } from 'react-icons/fa';

const benefits = [
  {
    id: 1,
    title: 'Get Things Done',
    description: 'Your VA tackles tasks with precision, freeing you to focus on your vision.',
    icon: <FaCheckCircle className="text-lg" style={{ color: '#C8287E' }} aria-hidden="true" />,
  },
  {
    id: 2,
    title: 'Launch Faster',
    description: 'AI-trained VAs speed up projects for quicker market entry.',
    icon: <FaCheckCircle className="text-lg" style={{ color: '#C8287E' }} aria-hidden="true" />,
  },
  {
    id: 3,
    title: 'Gain Visibility',
    description: 'Consistent content keeps your brand in the spotlight.',
    icon: <FaCheckCircle className="text-lg" style={{ color: '#C8287E' }} aria-hidden="true" />,
  },
  {
    id: 4,
    title: 'Feel Organized',
    description: 'Streamlined systems for personal and professional life.',
    icon: <FaCheckCircle className="text-lg" style={{ color: '#C8287E' }} aria-hidden="true" />,
  },
  {
    id: 5,
    title: 'Scale with Confidence',
    description: 'Grow stress-free with your VA’s support.',
    icon: <FaCheckCircle className="text-lg" style={{ color: '#C8287E' }} aria-hidden="true" />,
  },
  {
    id: 6,
    title: 'Personal Life, Handled',
    description: 'Travel, appointments, and more—sorted.',
    icon: <FaConciergeBell className="text-lg" style={{ color: '#C8287E' }} aria-hidden="true" />,
  },
];

// Animation variants
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, type: 'spring', stiffness: 100, damping: 12 },
  },
  hover: {
    scale: 1.02,
    boxShadow: '0 4px 12px rgba(200, 40, 126, 0.2)',
    transition: { duration: 0.2 },
  },
};

const CoreBenefits = () => {
  return (
    <section
      id="core-benefits"
      className="w-full py-8 bg-gray-50"
    >
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-center"
          style={{ color: '#C8287E' }}
          variants={cardVariants}
        >
          Core Benefits
          <span className="block w-24 h-0.5 mx-auto mt-1 bg-[#C8287E] rounded-full" />
        </motion.h2>
        <motion.h3
          className="text-xs sm:text-sm font-semibold mb-8 text-center"
          style={{ color: '#333333' }}
          variants={cardVariants}
        >
          Here’s What Happens When You Work With Us
        </motion.h3>

        {/* Benefit Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              className="bg-white p-4 rounded-lg shadow-sm border border-[#C8287E] hover:shadow-md transition-shadow duration-200 flex items-start"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 mr-3">{benefit.icon}</div>
              <div>
                <h4
                  className="text-sm sm:text-base font-semibold"
                  style={{ color: '#C8287E' }}
                >
                  {benefit.title}
                </h4>
                <p
                  className="text-xs sm:text-sm text-gray-700 mt-1 leading-relaxed"
                  style={{ color: '#333333' }}
                >
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CoreBenefits;