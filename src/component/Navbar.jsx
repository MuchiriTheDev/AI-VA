import React, { useState, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { FaBars, FaTimes, FaCalendarAlt } from 'react-icons/fa';
import { assets } from '../assets/assets';

const navLinks = [
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'Services', href: '#services' },
  { id: 3, name: 'Pricing', href: '#pricing' },
  { id: 4, name: 'Contact Us', href: '#contact' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 180,
      damping: 15,
      duration: 0.4,
    },
  },
  hover: {
    scale: 1.05,
    color: '#C8287E', // Pink 300 on hover
    transition: { duration: 0.2 },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 180,
      damping: 15,
      duration: 0.4,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 4px 12px rgba(240, 98, 146, 0.3)',
    transition: { duration: 0.2 },
  },
};

const underlineVariants = {
  hidden: { scaleX: 0 },
  hover: {
    scaleX: 1,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, x: '100%' },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      duration: 0.4,
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useViewportScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position and toggle background
  useEffect(() => {
    const unsubscribe = scrollY.onChange((y) => {
      setIsScrolled(y > 100);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']
  );
  const textColor = useTransform(
    scrollY,
    [0, 100],
    ['#FFFFFF', '#8E24AA'] // White to Purple 500
  );

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
      style={{ backgroundColor }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <motion.a href="#" variants={linkVariants} whileHover={{ scale: 1.05 }}>
          <img
            src={assets.logo}
            alt="AI Empowered VAs logo"
            className="h-16 w-fit" // White logo in transparent state
          />
        </motion.a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center wfull">
          <ul className="flex space-x-11">
            {navLinks.map((link) => (
              <motion.li
                key={link.id}
                variants={linkVariants}
                whileHover="hover"
                className="relative"
              >
                <motion.a
                  href={link.href}
                  className="text-sm sm:text-base font-medium"
                  style={{ color: textColor }}
                >
                  {link.name}
                  <motion.span
                    className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#C8287E]"
                    variants={underlineVariants}
                    initial="hidden"
                    whileHover="hover"
                  />
                </motion.a>
              </motion.li>
            ))}
          </ul>
          {/* Book a Call Button (Desktop) */}
        </div>
        <motion.a
            href="#book-call"
            className="hidden md:inline-flex items-center px-4 py-2 text-sm sm:text-base font-semibold rounded-full"
            style={{ backgroundColor: '#C8287E', color: '#FFFFFF' }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            <FaCalendarAlt className="mr-2 text-sm sm:text-base" aria-hidden="true" />
            Book a Call
        </motion.a>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="md:hidden text-base sm:text-lg"
          style={{ color: textColor }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          variants={linkVariants}
          whileHover={{ scale: 1.1 }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden fixed top-0 right-0 w-3/4 max-w-xs h-full flex flex-col justify-between p-18 bg-white shadow-lg"
        variants={mobileMenuVariants}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
      >
        <div className="flex justify-end p-4">
          <motion.button
            className="text-base sm:text-lg"
            style={{ color: '#8E24AA' }}
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            variants={linkVariants}
            whileHover={{ scale: 1.1 }}
          >
            <FaTimes />
          </motion.button>
        </div>
        <ul className="flex flex-col items-center space-y-6 py-6">
          {navLinks.map((link) => (
            <motion.li
              key={link.id}
              variants={linkVariants}
              whileHover="hover"
              className="relative"
            >
              <motion.a
                href={link.href}
                className="text-base sm:text-lg font-medium"
                style={{ color: '#8E24AA' }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                <motion.span
                  className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#C8287E]"
                  variants={underlineVariants}
                  initial="hidden"
                  whileHover="hover"
                />
              </motion.a>
            </motion.li>
          ))}
          {/* Book a Call Button (Mobile) */}
        </ul>
        <div
        className='flex justify-center items-center w-full gap-4 px-4 py-2'>
            <motion.a
            href="#book-call"
            className="inline-flex items-center px-4 py-2 w-3/4 text-base sm:text-lg font-semibold rounded-full"
            style={{ backgroundColor: '#C8287E', color: '#FFFFFF' }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(false)}
          >
            <FaCalendarAlt className="mr-2 text-base sm:text-lg" aria-hidden="true" />
            Book a Call
        </motion.a>
        </div>
        
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;