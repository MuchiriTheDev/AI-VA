import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
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
    color: '#a62066', // Darker shade of #C8287E for hover
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
          href="/"
          className="flex items-center justify-center mb-4 text-lg sm:text-xl font-semibold"
          style={{ color: '#C8287E' }} // Primary color
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={assets.logo}
            alt="AI Empowered VAs logo"
            className="w-fit h-16"
          />
        </motion.a>

        {/* Terms and Services & Privacy Policy Links */}
        <motion.div
          className="flex justify-center space-x-6 mb-4"
          variants={containerVariants}
        >
          <motion.a
            href="/terms-and-conditions"
            className="text-[0.65rem] sm:text-xs text-gray-500 hover:text-[#a62066] transition-colors duration-300"
            variants={itemVariants}
            whileHover="hover"
            aria-label="View Terms and Services"
          >
            Terms and Conditions
          </motion.a>
  
        </motion.div>

        {/* Copyright Notice */}
        <motion.span
          className="block text-[0.65rem] sm:text-xs text-center mb-5"
          style={{ color: '#333333' }} // Dark gray
          variants={itemVariants}
        >
          © 2025 AI Empowered VAs™. All Rights Reserved. Built with efficiency by your virtual assistant experts.
        </motion.span>

        {/* Social Media Links */}
        <motion.ul
          className="flex justify-center mt-4 space-x-6"
          variants={containerVariants}
        >
          {[
            {
              href: 'https://www.facebook.com/share/16Rgb8vQFr/',
              icon: <FaFacebookF size={18} className="text-[0.65rem] sm:text-xs" style={{ color: '#C8287E' }} aria-hidden="true" />,
              label: 'Follow AI Empowered Virtual Assistants on Facebook',
            },
            {
              href: 'https://www.instagram.com/aiempoweredvas?utm_source=qr&igsh=MWw2cHh3enhxb3ZjYg==',
              icon: <FaInstagram size={18} className="text-[0.65rem] sm:text-xs" style={{ color: '#C8287E' }} aria-hidden="true" />,
              label: 'Follow AI Empowered Virtual Assistants on Instagram',
            },
            {
              href: 'https://www.linkedin.com/company/empoweredaiva/',
              icon: <FaLinkedinIn size={18} className="text-[0.65rem] sm:text-xs" style={{ color: '#C8287E' }} aria-hidden="true" />,
              label: 'Follow AI Empowered Virtual Assistants on LinkedIn',
            },
          ].map((link, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              whileHover="hover"
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#a62066]"
                aria-label={link.label}
              >
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