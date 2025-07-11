import React from 'react';
import { motion } from 'framer-motion';
import { FaHeadset, FaTasks, FaShareAlt, FaUserClock, FaCalendarAlt } from 'react-icons/fa';

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

const ServicesHero = () => {
  const services = [
    {
      icon: <FaHeadset className="text-3xl text-color" aria-hidden="true" />,
      title: 'Customer Support Excellence',
      description:
        'Deliver exceptional customer experiences with our VAs managing your support channels, ensuring timely and empathetic responses.',
    },
    {
      icon: <FaTasks className="text-3xl text-color" aria-hidden="true" />,
      title: 'Administrative Task Management',
      description:
        'From scheduling meetings to managing emails, our VAs streamline your daily operations, enhancing productivity.',
    },
    {
      icon: <FaShareAlt className="text-3xl text-color" aria-hidden="true" />,
      title: 'Social Media & Content Management',
      description:
        'Our VAs handle your content calendar, create engaging posts, and repurpose existing content to maintain a consistent online presence.',
    },
    {
      icon: <FaUserClock className="text-3xl text-color" aria-hidden="true" />,
      title: 'AI-Enhanced Personal Assistance',
      description:
        'Beyond business tasks, our VAs assist with personal scheduling, travel arrangements, and more, all optimized with AI tools for efficiency.',
    },
  ];

  return (
    <section
      id="services-hero"
      className="w-full max-w-[100vw] min-h-[60vh] h-fit py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#C8287E]/5 mt-20 relative overflow-hidden"
    >
      <motion.div
        className="max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Headline */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-color mb-4 leading-tight"
          variants={itemVariants}
        >
          Empower Your Business.{' '}
          <span className="block sm:inline italic text-gray-900">Reclaim Your Time.</span>
          <span className="block w-32 h-1 mx-auto mt-3 bg-gradient-to-r from-[#C8287E] to-[#a62066] rounded-full"></span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-sm sm:text-base text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto"
          variants={itemVariants}
        >
          We specialize in providing top-tier virtual assistant services that integrate{' '}
          <span className="font-semibold text-color">cutting-edge AI tools</span> with human expertise.
          Our Kenyan-based VAs are trained to handle both your business and personal tasks, ensuring
          you can focus on what truly matters.
        </motion.p>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2  gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-base sm:text-lg font-semibold text-color mb-3">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

       
      </motion.div>
    </section>
  );
};

export default ServicesHero;