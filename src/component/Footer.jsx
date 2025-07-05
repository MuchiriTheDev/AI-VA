import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { assets } from '../assets/assets';

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
    scale: 1.1,
    color: '#F06292', // Pink 300 on hover
    transition: { duration: 0.2 },
  },
};

const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-full max-w-[100vw] min-h-[20vh] h-fit py-6 sm:py-8 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <motion.div
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Brand Name */}
        <motion.a
          href="#"
          className="flex items-center justify-center mb-4 text-xl sm:text-2xl font-semibold"
          style={{ color: '#F06292' }} // Pink 300
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
         <img src={assets.logo} alt="AI Empowered VAs logo" className='w-fit h-16' />
        </motion.a>

        {/* Copyright Notice */}
        <motion.span
          className="block text-xs sm:text-sm text-center mb-5"
          style={{ color: '#333333' }} // Dark gray
          variants={itemVariants}
        >
          © 2025 AI Empowered VAs™. All Rights Reserved. Built with efficiency by your virtual assistant experts.
        </motion.span>

        {/* Social Media Links */}
        <motion.ul
          className="flex justify-center mt-4 space-x-5"
          variants={containerVariants}
        >
          {[
            { href: '#', icon: <FaFacebookF size={22} className="text-sm sm:text-base" style={{ color: '#8E24AA' }} aria-hidden="true" /> },
            { href: '#', icon: <FaInstagram size={22} className="text-sm sm:text-base" style={{ color: '#8E24AA' }} aria-hidden="true" /> },
            { href: '#', icon: <FaTwitter size={22} className="text-sm sm:text-base" style={{ color: '#8E24AA' }} aria-hidden="true" /> },
            { href: '#', icon: <FaLinkedinIn size={22} className="text-sm sm:text-base" style={{ color: '#8E24AA' }} aria-hidden="true" /> },
            { href: '#', icon: <FaEnvelope size={22} className="text-sm sm:text-base" style={{ color: '#8E24AA' }} aria-hidden="true" /> },
          ].map((link, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              whileHover="hover"
            >
              <a href={link.href} className="text-gray-500 hover:text-[#F06292]">
                {link.icon}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </footer>
  );
};

export default Footer;