import React from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaLightbulb, FaUsers } from 'react-icons/fa';

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.03, transition: { duration: 0.2 } },
};

const WhatsHoldingYouBack = () => {
  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-gray-100">
      {/* Content Container */}
      <motion.div
        className="w-full mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Headline */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight"
          style={{ color: '#8E24AA' }} // Pink 300
          variants={cardVariants}
        >
          What’s Holding You Back?
        </motion.h2>
        {/* Subheadline */}
        <motion.p
            className="text-lg md:text-base max-w-2xl mx-auto mb-8 leading-relaxed mb-10"
            style={{ color: '#333333' }} // Dark gray
            variants={cardVariants}
        >
            And How We Help You Move Forward?
        </motion.p>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Tired of Doing Everything Yourself? */}
          <motion.div
            className="bg-white p-5 rounded-md shadow-md "
            variants={cardVariants}
            whileHover="hover"
          >
            <FaExclamationTriangle
              className="mx-auto mb-4 text-3xl"
              style={{ color: '#8E24AA' }} // Purple 500
              aria-hidden="true"
            />
            <h3
              className="text-lg sm:text-xl font-semibold mb-5"
              style={{ color: '#8E24AA' }} // Purple 500
            >
              Tired of Doing Everything Yourself?
            </h3>
            <p
              className="text-sm max-w-md mx-auto leading-relaxed"
              style={{ color: '#333333' }} // Dark gray
            >
              You’ve got vision. Ideas. A business to grow. But instead, you're stuck in your inbox, buried in tasks, and falling behind on both strategy and life.
            </p>
          </motion.div>

          {/* Card 2: The Truth */}
          <motion.div
            className="bg-white p-5 rounded-lg shadow-md" // Pink 300 border
            variants={cardVariants}
            whileHover="hover"
          >
            <FaLightbulb
              className="mx-auto mb-4 text-3xl"
              style={{ color: '#8E24AA' }} // Purple 500
              aria-hidden="true"
            />
            <h4
              className="text-base sm:text-lg font-semibold mb-3"
              style={{ color: '#8E24AA' }} // Purple 500
            >
              The Truth
            </h4>
            <p
              className="text-sm max-w-md mx-auto leading-relaxed"
              style={{ color: '#333333' }} // Dark gray
            >
              You're not lazy. You're just doing work that someone else could be doing better—with AI-enhanced speed and zero micromanagement.
            </p>
          </motion.div>

          {/* Card 3: The Solution We Bring */}
          <motion.div
            className="bg-white p-5 rounded-lg shadow-md"
            variants={cardVariants}
            whileHover="hover"
          >
            <FaUsers
              className="mx-auto mb-4 text-3xl"
              style={{ color: '#8E24AA' }} // Purple 500
              aria-hidden="true"
            />
            <h4
              className="text-base sm:text-lg font-semibold mb-3"
              style={{ color: '#8E24AA' }} // Purple 500
            >
              The Solution We Bring
            </h4>
            <p
              className="text-sm max-w-md mx-auto leading-relaxed"
              style={{ color: '#333333' }} // Dark gray
            >
              We match you with a highly trained, Kenyan-based virtual assistant who knows your tools, understands your business, and uses AI to work smarter—not harder.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhatsHoldingYouBack;