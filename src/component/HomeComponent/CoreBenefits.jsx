import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaConciergeBell } from 'react-icons/fa';

const CoreBenefits = () => {
  return (
    <div
      id="core-benefits"
      className="w-full max-w-[100vw] h-[230vh]  py-10 bg-gray-50"
    >
      {/* Title Component (assuming it matches the Services component's Title) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight" style={{ color: '#C8287E' }}>
          Core Benefits
        </h2>
        <h3 className="text-sm sm:text-base font-semibold mb-12" style={{ color: '#333333' }}>
          Here’s What Happens When You Work With Us:
        </h3>
      </div>

      <div className="relative flex justify-center items-center mt-7">
        {/* Vertical Gradient Line */}
        <div
          className="top-0 absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-2 bg-gradient-to-b from-pink-600 via-pink-400 to-pink-200 min-h-screen5 md:h-screen5 z-1"
        ></div>

        {/* Benefit Cards */}
        <div className="relative w-full h-full min-h-screen5  mx-auto">
          {benefits.map((benefit, index) => {
            const isLeft = index % 2 === 0; // Alternate sides
            const topPosition = `${index * 70}px`; // Match Services spacing

            return (
              <div
                key={benefit.id}
                className="relative w-full flex justify-start md:justify-center"
                style={{ marginTop: index === 0 ? '0' : '70px' }}
              >
                {/* Dot on the timeline */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0 }}
                  viewport={{ once: true }}
                  className="absolute w-5 h-5 bg-pink-600 rounded-full left-right md:transform md:-translate-x-1/2 z-10"
                  style={{ top: topPosition }}
                ></motion.div>

                {/* Card */}
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0 }}
                  viewport={{ once: true }}
                  className={`bg-white shadow-lg p-6 rounded-lg w-[calc(100%-3rem)] md:w-1/3 border border-[#C8287E] hover:shadow-xl transition-shadow duration-300 absolute ${
                    isLeft ? 'left-8 md:left-16 md:mr-auto' : 'left-8 md:right-16 md:ml-auto'
                  }`}
                  style={{ top: topPosition }}
                >
                  <div className="flex items-center mb-2">
                    {benefit.icon}
                    <h4
                      className="text-sm sm:text-base font-semibold ml-2"
                      style={{ color: '#C8287E' }}
                    >
                      {benefit.title}
                    </h4>
                  </div>
                  <p className="text-xs text-gray-700 mt-2">{benefit.description}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CoreBenefits;

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