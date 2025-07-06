import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    quote:
      'Working with Caroline and the CNK VA Solutions team has been an absolute game changer for my business. Thanks to her leadership, my operations are smoother, my team is more organized, and I have the confidence to scale.',
    author: 'Martin Mwenda',
    title: `CEO Horizon Solutions`,
  },
  {
    id: 2,
    quote:
      'The CNK team transformed my workflow. My VA handles everything from scheduling to content, letting me focus on growth.',
    author: 'Sarah Johnson',
    title: 'Life Coach & Speaker',
  },
  {
    id: 3,
    quote:
      'With CNK’s AI-powered VAs, I’ve saved countless hours and scaled my consulting business without stress.',
    author: 'Michael Chen',
    title: 'Business Consultant',
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
      staggerChildren: 0.3,
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
};

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } },
  active: { scale: 1.3, backgroundColor: '#C8287E', transition: { duration: 0.2 } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 200, damping: 15 },
  },
  hover: {
    scale: 1.2,
    boxShadow: '0 0 8px rgba(240, 98, 146, 0.5)',
    transition: { duration: 0.2 },
  },
};

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle navigation button clicks
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Handle dot click for manual navigation
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="w-full max-w-[100vw] min-h-[50vh] h-fit py-8 sm:py-10 lg:py-12 bg-gray-200">
      <motion.div
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Main Headline */}
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 leading-tight"
          style={{ color: '#C8287E' }} // Pink 300
          variants={itemVariants}
        >
          Real Clients. Real Results.
        </motion.h2>

        {/* Subheading */}
        <motion.div
          className="flex items-center justify-center text-sm sm:text-base font-bold mb-6"
          style={{ color: '#333333' }} // Purple 500
          variants={itemVariants}
        >
          <p>In business since 2020 — trusted by founders, coaches, consultants & speakers across the U.S.</p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative mt-4 flex items-center justify-center">
          {/* Previous Button */}
          <motion.button
            className="absolute left-0 sm:left-2 md:-left-10 p-2 rounded-full border border-[#C8287E] bg-white"
            style={{ color: '#C8287E' }}
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-lg" />
          </motion.button>

          {/* Testimonial Block */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-gradient-to-b from-gray-50 to-gray-100 p-4 sm:p-6 rounded-lg shadow-md border border-[#F06292] max-w-lg mx-8 sm:mx-12"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
            >
              <p
                className="text-sm sm:text-base leading-relaxed italic"
                style={{ color: '#333/dark gray' }} // Dark gray
              >
                "{testimonials[currentIndex].quote}"
              </p>
              <p
                className="text-sm sm:text-base font-semibold mt-4"
                style={{ color: '#C8287E' }} // Purple 500
              >
                — {testimonials[currentIndex].author}, {testimonials[currentIndex].title}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Next Button */}
          <motion.button
            className="absolute right-0 sm:right-2 md:-right-10 p-2 rounded-full border border-[#C8287E] bg-white"
            style={{ color: '#C8287E' }}
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-lg" />
          </motion.button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: index === currentIndex ? '#000000' : '#C8287E' }}
              variants={dotVariants}
              initial="hidden"
              animate={index === currentIndex ? 'active' : 'visible'}
              onClick={() => handleDotClick(index)}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonial;