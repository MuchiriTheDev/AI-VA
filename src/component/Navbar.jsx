import React, { useState, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { FaBars, FaTimes, FaCalendarAlt } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation for page detection
import { assets } from '../assets/assets';

const navLinks = [
  { id: 1, name: 'Home', href: '/' },
  { id: 2, name: 'About', href: '/about' },
  { id: 3, name: 'Services', href: '/services' },
  { id: 4, name: 'Pricing', href: '/pricing' },
  { id: 5, name: 'Contact Us', href: '/contact' },
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
  const location = useLocation(); // Get current page path
  const isHomePage = location.pathname === '/'; // Check if on homepage

  // Track scroll position for homepage only
  useEffect(() => {
    if (isHomePage) {
      const unsubscribe = scrollY.onChange((y) => {
        setIsScrolled(y > 100);
      });
      return () => unsubscribe();
    } else {
      setIsScrolled(false); // No scroll effect on other pages
    }
  }, [scrollY, isHomePage]);

  // Conditional background and text color based on page and scroll
  const backgroundColor = isHomePage
    ? useTransform(scrollY, [0, 100], ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)'])
    : 'rgba(255, 255, 255, 1)';
  const textColor = isHomePage
    ? useTransform(scrollY, [0, 100], ['#FFFFFF', '#8E24AA'])
    : '#8E24AA';

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-shadow duration-300 ${
        isScrolled && isHomePage ? 'shadow-md' : ''
      }`}
      style={{ backgroundColor }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="#" variants={linkVariants} whileHover={{ scale: 1.05 }}>
          <img
            src={assets.logo}
            alt="AI Empowered VAs logo"
            className="h-12 w-fit" // Reduced logo size for consistency
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <motion.li
                key={link.id}
                variants={linkVariants}
                whileHover="hover"
                className="relative"
              >
                <Link
                  to={link.href}
                  className="text-sm font-medium"
                  style={{ color: textColor }}
                >
                  {link.name}
                  <motion.span
                    className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#C8287E]"
                    variants={underlineVariants}
                    initial="hidden"
                    whileHover="hover"
                  />
                </Link>
              </motion.li>
            ))}
          </ul>
          {/* Book a Call Button (Desktop) */}
          <Link
            to="https://zcal.co/carolinekabi/discovery-call-30min"
            target="_blank"
            className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full"
            style={{ backgroundColor: '#C8287E', color: '#FFFFFF' }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            <FaCalendarAlt className="mr-2 text-sm" aria-hidden="true" />
            Book a Call
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="md:hidden text-base"
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
        className="md:hidden fixed top-0 right-0 w-3/4 max-w-xs h-full flex flex-col justify-between p-6 bg-white shadow-lg"
        variants={mobileMenuVariants}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
      >
        <div className="flex justify-end">
          <motion.button
            className="text-base"
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
              <Link
                to={link.href}
                className="text-base font-medium"
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
              </Link>
            </motion.li>
          ))}
        </ul>
        <div className="flex justify-center items-center w-full px-4 py-4">
          <Link
            to="https://zcal.co/carolinekabi/discovery-call-30min"
            target="_blank"
            className="inline-flex items-center px-4 py-2 w-3/4 text-base font-semibold rounded-full"
            style={{ backgroundColor: '#C8287E', color: '#FFFFFF' }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(false)}
          >
            <FaCalendarAlt className="mr-2 text-base" aria-hidden="true" />
            Book a Call
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;