import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaConciergeBell } from 'react-icons/fa';

const benefits = [
  {
    id: 1,
    title: 'Get Things Done',
    description: 'No more dusty to-do lists—your VA tackles tasks with precision, freeing you to focus on your vision.',
    icon: <FaCheckCircle className="text-xl" style={{ color: '#C8287E' }} aria-hidden="true" />,
  },
  {
    id: 2,
    title: 'Launch Faster',
    description: 'Your AI-trained VA accelerates your projects, getting you to market with speed and efficiency.',
    icon: <FaCheckCircle className="text-xl" style={{ color: '#C8287E' }} aria-hidden="true" />,
  },
  {
    id: 3,
    title: 'Gain Visibility',
    description: 'Consistent content and systems in motion ensure your brand stands out and stays top-of-mind.',
    icon: <FaCheckCircle className="text-xl" style={{ color: '#C8287E' }} aria-hidden="true" />,
  },
  {
    id: 4,
    title: 'Feel Organized',
    description: 'Stay on top of your personal and professional life with a VA who streamlines everything.',
    icon: <FaCheckCircle className="text-xl" style={{ color: '#C8287E' }} aria-hidden="true" />,
  },
  {
    id: 5,
    title: 'Scale with Confidence',
    description: 'Your VA has your back, empowering you to grow your business without the stress.',
    icon: <FaCheckCircle className="text-xl" style={{ color: '#C8287E' }} aria-hidden="true" />,
  },
  {
    id: 6,
    title: 'Personal Life, Handled',
    description: 'Travel bookings, doctor appointments, calendar management, and family coordination—done.',
    icon: <FaConciergeBell className="text-xl" style={{ color: '#C8287E' }} aria-hidden="true" />,
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
      staggerChildren: 0.3, // Increased stagger for text-message effect
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.05,
    rotate: 2, // Slight rotation for playful effect
    transition: { duration: 0.2 },
  },
};

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 15,
      duration: 0.4,
    },
  },
  hover: { scale: 1.3, transition: { duration: 0.2 } },
};

const CoreBenefits = () => {
  return (
    <section id="core-benefits" className="w-full max-w-[100vw] min-h-[60vh] md:min-h-[80vh] h-fit py-8 sm:py-10 lg:py-12 bg-white">
      {/* Main Headline */}
      <motion.div
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-3 leading-tight"
          style={{ color: '#C8287E' }} // Pink 300
          variants={itemVariants}
        >
          Core Benefits
        </motion.h2>
        <motion.h3
          className="text-sm sm:text-base font-semibold mb-6"
          style={{ color: '#333333' }} // Purple 500
          variants={itemVariants}
        >
          Here’s What Happens When You Work With Us:
        </motion.h3>

        {/* Timeline */}
        <div className="relative flex justify-center items-center mt-8">
          {/* Vertical Gradient Line */}
          <div
            className="w-1.5 bg-gradient-to-b from-[#C8287E] to-[#] min-h-[50vh] md:min-h-[70vh] h-screen absolute left-3 md:left-1/2 md:transform md:-translate-x-1/2"
          ></div>

          {/* Benefit Items */}
          <div className="relative w-full">
            {benefits.map((benefit, index) => {
              const isLeft = index % 2 === 0; // Alternate sides for medium screens and above
              const topPosition = `${index * 80}px`; // Reduced vertical spacing

              return (
                <div
                  key={benefit.id}
                  className="relative w-full flex justify-start md:justify-center"
                  style={{ marginTop: index === 0 ? '0' : '33px' }}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute w-5 h-5 bg-[#C8287E] rounded-full left-2 md:left-1/2 md:transform md:-translate-x-1/2 z-10"
                    style={{ top: topPosition }}
                    variants={dotVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true }}
                  ></motion.div>

                  {/* Content Block */}
                  <motion.div
                    className={`bg-gradient-to-b from-gray-50 to-gray-100 shadow-md p-4 rounded-lg w-[calc(100%-3rem)] md:w-[30%] border border-[#C8287E] hover:shadow-lg transition-shadow duration-300 ${
                      isLeft ? 'left-7 md:left-0 md:mr-auto' : 'left-7 md:right-0 md:ml-auto'
                    }`}
                    style={{ top: topPosition }}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-2">
                      {benefit.icon}
                      <h4
                        className="text-sm sm:text-base font-semibold ml-2"
                        style={{ color: '#C8287E' }} // Purple 500
                      >
                        {benefit.title}
                      </h4>
                    </div>
                    <p
                      className="text-sm sm:text-base leading-relaxed"
                      style={{ color: '#333333' }} // Dark gray
                    >
                      {benefit.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CoreBenefits;