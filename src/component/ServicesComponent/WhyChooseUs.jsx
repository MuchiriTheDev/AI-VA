import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaUserCheck, FaSyncAlt, FaGlobeAfrica, FaCalendarAlt } from 'react-icons/fa';

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

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaRobot className="text-2xl text-color" aria-hidden="true" />,
      title: 'AI-Integrated Solutions',
      description: 'Our VAs leverage AI tools to automate and optimize tasks, providing smarter support.',
    },
    {
      icon: <FaUserCheck className="text-2xl text-color" aria-hidden="true" />,
      title: 'Skilled & Trained Professionals',
      description: 'Each VA undergoes rigorous training to ensure they meet our high standards.',
    },
    {
      icon: <FaSyncAlt className="text-2xl text-color" aria-hidden="true" />,
      title: 'Customized Support',
      description: 'We match you with VAs that align with your specific needs and business goals.',
    },
    {
      icon: <FaGlobeAfrica className="text-2xl text-color" aria-hidden="true" />,
      title: 'Global Impact',
      description: 'By partnering with us, you support skilled professionals in Kenya, fostering global economic growth.',
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="w-full max-w-[100vw] min-h-[60vh] h-fit py-12 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#C8287E]/5 to-transparent opacity-30 z-0"></div>

      <motion.div
        className="max-w-6xl mx-auto text-center relative z-10"
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
          Why Choose Us?
          <span className="block w-32 h-1 mx-auto mt-3 bg-gradient-to-r from-[#C8287E] to-[#a62066] rounded-full"></span>
        </motion.h2>

        {/* Reasons Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-10"
          variants={containerVariants}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-sm sm:text-base font-semibold text-color mb-3">{reason.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Transform Your Workflow */}
        <motion.div
          className="bg-gradient-to-r from-[#C8287E]/10 to-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto mb-8"
          variants={itemVariants}
          whileHover="hover"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-color mb-4">
            Transform Your Workflow
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Imagine a day when your to-do list is managed, your clients are engaged, and your tasks are
            handled—all without lifting a finger.{' '}
            <span className="font-semibold text-color">Our VAs make this a reality.</span>
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="flex flex-col items-center"
          variants={itemVariants}
        >
          <h4 className="text-sm sm:text-base font-semibold text-gray-600 mb-4">
            Ready to Get Started?
          </h4>
          <a
            href="https://zcal.co/carolinekabi/discovery-call-30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2 text-xs sm:text-sm font-semibold rounded-full bg-color text-white shadow-lg hover:bg-[#a62066] transition-colors duration-300"
            aria-label="Book a discovery call to find your perfect virtual assistant with AI Empowered Virtual Assistants"
          >
            <FaCalendarAlt className="mr-2 text-xs sm:text-sm" aria-hidden="true" />
            Schedule Your Call Now
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;