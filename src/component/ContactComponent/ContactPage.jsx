import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaLock, FaCalendarAlt, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

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
    boxShadow: '0 8px 16px rgba(200, 40, 126, 0.3)', // Adjusted for #C8287E
    transition: { duration: 0.2 },
  },
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    website: '',
    location: '',
    supportTypes: [],
    otherSupport: '',
    priority: '',
    startTime: '',
    success: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        supportTypes: checked
          ? [...prev.supportTypes, value]
          : prev.supportTypes.filter((item) => item !== value),
      }));
    } else {
      setFormData({ ...prev, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      businessName: '',
      website: '',
      location: '',
      supportTypes: [],
      otherSupport: '',
      priority: '',
      startTime: '',
      success: '',
      additionalInfo: '',
    });
  };

  const supportOptions = [
    'Customer service',
    'Administrative support',
    'Calendar + email management',
    'Social media support',
    'Content repurposing or creation',
    'CRM / systems / process support',
    'Personal life management (travel, family, scheduling)',
  ];

  return (
    <section
      id="contact-us"
      className="w-full max-w-[100vw] mt-20 min-h-[100vh] h-fit py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#C8287E]/5 to-white relative overflow-hidden"
    >
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Headline */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-color mb-2 text-center leading-tight"
          variants={itemVariants}
        >
          Contact Us
          <span className="block text-lg sm:text-xl md:text-2xl italic text-gray-800 mt-2">
            You Don’t Have to Do It Alone Anymore
          </span>
          <span className="block w-48 h-1 mx-auto mt-4 bg-gradient-to-r from-[#C8287E] to-[#a62066] rounded-full"></span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-xs sm:text-sm md:text-base text-gray-600 mb-12 text-center leading-relaxed max-w-4xl mx-auto"
          variants={itemVariants}
        >
          This is where overwhelm ends—and your{' '}
          <span className="font-semibold text-color">support system begins</span>. If you’re ready to
          delegate, grow, and finally get things done with a smart, AI-powered virtual assistant, you’re
          in the right place. Whether you’re clear on what you need—or just know you need help—this is
          your first step toward{' '}
          <span className="font-semibold text-color">relief, clarity, and confidence</span>.
        </motion.p>

        {/* Split Layout: Form and Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          {/* Contact Form (3/5) */}
          <motion.div
            className="lg:col-span-3 bg-white rounded-2xl shadow-xl p-8 border-t-4 border-[#C8287E]"
            variants={itemVariants}
            whileHover="hover"
          >
            <h2 className="text-lg sm:text-xl font-semibold text-color mb-6 text-center">
              Ready to Get Started?
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8287E] text-sm text-gray-700 bg-gray-50"
                    aria-label="Your full name"
                  />
                </div>
                amacı<div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8287E] text-sm text-gray-700 bg-gray-50"
                    aria-label="Your email address"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="businessName" className="block text-xs font-medium text-gray-700 mb-1">
                    Business Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8287E] text-sm text-gray-700 bg-gray-50"
                    aria-label="Your business name"
                  />
                </div>
                <div>
                  <label htmlFor="website" className="block text-xs font-medium text-gray-700 mb-1">
                    Website or Social Media Handle (Optional)
                  </label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8287E] text-sm text-gray-700 bg-gray-50"
                    aria-label="Your website or social media handle"
                    placeholder="Helps us understand your business"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="location" className="block text-xs font-medium text-gray-700 mb-1">
                  Where are you located?
                </label>
                <select
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8287E] text-sm text-gray-700 bg-gray-50"
                  aria-label="Your location"
                >
                  <option value="">Select a location</option>
                  <option value="Other">Other (please specify)</option>
                  <option value="CA">California</option>
                  <option value="NY">New York</option>
                  {/* Add more states or handle dynamically */}
                </select>
                {formData.location === 'Other' && (
                  <input
                    type="text"
                    name="locationOther"
                    value={formData.locationOther || ''}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-[#C8287E] text-sm text-gray-700 bg-gray-50"
                    aria-label="Specify your location"
                    placeholder="Specify your location"
                  />
                )}
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  What kind of support are you looking for? (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {supportOptions.map((option, idx) => (
                    <label key={idx} className="flex items-center text-xs text-gray-700">
                      <input
                        type="checkbox"
                        name="supportTypes"
                        value={option}
                        checked={formData.supportTypes.includes(option)}
                        onChange={handleChange}
                        className="mr-2 h-4 w-4 text-[#C8287E] focus:ring-[#C8287E] border-gray-300 rounded"
                        aria-label={option}
                      />
                      {option}
                    </label>
                  ))}
                  <div>
                    <label className="flex items-center text-xs text-gray-700">
                      <input
                        type="checkbox"
                        name="supportTypes"
                        value="Other"
                        checked={formData.supportTypes.includes('Other')}
                        onChange={handleChange}
                        className="mr-2 h-4 w-4 text-[#C8287E] focus:ring-[#C8287E] border-gray-300 rounded"
                        aria-label="Other support type"
                      />
                      Other
                    </label>
                    {formData.supportTypes.includes('Other') && (
                      <input
                        type="text"
                        name="otherSupport"
                        value={formData.otherSupport}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-[#C8287E] text-sm text-gray-700 bg-gray-50"
                        aria-label="Specify other support type"
                        placeholder="Please specify"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="priority" className="block text-xs font-medium text-gray-700 mb-1">
                  What’s your biggest priority right now?
                </label>
                <input
                  type="text"
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8287E] text-sm text-gray-700 bg-gray-50"
                  aria-label="Your biggest priority"
                  placeholder="E.g., 'Freeing up my time,' 'Launching my course,' 'Getting organized'"
                />
              </div>
              <div>
                <label htmlFor="startTime" className="block text-xs font-medium text-gray-700 mb-1">
                  When would you like to get started?
                </label>
                <select
                  id="startTime"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8287E] text-sm text-gray-700 bg-gray-50"
                  aria-label="When you want to start"
                >
                  <option value="">Select an option</option>
                  <option value="As soon as possible">As soon as possible</option>
                  <option value="In the next 2 weeks">In the next 2 weeks</option>
                  <option value="In the next month">In the next month</option>
                  <option value="Just exploring">Just exploring</option>
                </select>
              </div>
              <div>
                <label htmlFor="success" className="block text-xs font-medium text-gray-700 mb-1">
                  How would you define success working with a VA?
                </label>
                <textarea
                  id="success"
                  name="success"
                  value={formData.success}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8287E] text-sm text-gray-700 bg-gray-50"
                  aria-label="Define success with a virtual assistant"
                  placeholder="E.g., 'I’d love to feel like I can finally breathe,' or 'My goal is to grow while working fewer hours.'"
                ></textarea>
              </div>
              <div>
                <label htmlFor="additionalInfo" className="block text-xs font-medium text-gray-700 mb-1">
                  Anything else you’d like us to know? (Optional)
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8287E] text-sm text-gray-700 bg-gray-50"
                  aria-label="Additional information before the call"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="inline-flex items-center px-6 py-2 text-sm font-semibold rounded-full bg-color text-white shadow-md hover:bg-[#a62066] transition-colors duration-300 w-full sm:w-auto"
                variants={itemVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                aria-label="Submit your application and book a discovery call with AI Empowered Virtual Assistants"
              >
                <FaCalendarAlt className="mr-2 text-sm" aria-hidden="true" />
                Apply + Book Your Call
              </motion.button>
            </form>
            <p className="text-xs text-gray-600 mt-4 text-center">
              Prefer to reach out directly? Email us at:{' '}
              <a
                href="mailto:info@empowerthevais.com"
                className="text-color hover:underline"
                aria-label="Email AI Empowered Virtual Assistants directly"
              >
                info@empowerthevais.com
              </a>
            </p>
          </motion.div>

          {/* Sidebar: Founder Quote, Photo, Social Media */}
          <motion.div
            className="lg:col-span-2 bg-gradient-to-b from-[#C8287E]/10 to-[#a62066]/10 rounded-2xl shadow-xl p-8 flex flex-col items-center"
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="w-40 h-40 md:w-48 md:h-48 bg-gray-200 rounded-full overflow-hidden mb-6 border-2 border-[#C8287E]">
              <img
                src={assets.caroline}
                alt="Caroline, Founder of AI Empowered Virtual Assistants"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-color mb-4 text-center">
              From Our Founder
            </h3>
            <p className="text-xs md:text-sm text-gray-600 mb-6 leading-relaxed text-center">
              "You’ve carried the weight long enough. I built AI Empowered VAs to help CEOs like you
              hand things off—with strategy, intention, and trust. You’re not just getting support.
              You’re gaining a team that gets things done and gets{' '}
              <span className="font-semibold text-color">you</span>."
            </p>
            <p className="text-xs font-semibold text-gray-600 mb-6 text-center">
              — Caroline, Founder & VA Strategist
            </p>
            <div className="flex gap-6 mb-6">
              <a
                href="https://www.linkedin.com/company/empoweredaiva/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-color hover:text-[#a62066] transition-colors duration-300"
                aria-label="Follow AI Empowered Virtual Assistants on LinkedIn"
              >
                <FaLinkedin className="text-xl md:text-2xl" aria-hidden="true" />
              </a>
              <a
                href="https://www.facebook.com/share/16Rgb8vQFr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-color hover:text-[#a62066] transition-colors duration-300"
                aria-label="Follow AI Empowered Virtual Assistants on Facebook"
              >
                <FaFacebook className="text-xl md:text-2xl" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/aiempoweredvas?utm_source=qr&igsh=MWw2cHh3enhxb3ZjYg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-color hover:text-[#a62066] transition-colors duration-300"
                aria-label="Follow AI Empowered Virtual Assistants on Instagram"
              >
                <FaInstagram className="text-xl md:text-2xl" aria-hidden="true" />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-gray-600">
              <p className="flex items-center">
                <FaClock className="text-color mr-2" aria-hidden="true" />
                <span>
                  <span className="font-semibold">Response Time:</span> Within 1 business day
                </span>
              </p>
              <p className="flex items-center">
                <FaLock className="text-color mr-2" aria-hidden="true" />
                <span>
                  <span className="font-semibold">Your information</span> is kept private
                </span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Additional Sections */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {/* What Happens Next */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8"
            variants={itemVariants}
            whileHover="hover"
          >
            <h2 className="text-lg sm:text-xl font-semibold text-color mb-4 text-center">
              What Happens Next
            </h2>
            <ul className="text-xs sm:text-sm text-gray-600 leading-relaxed space-y-3 list-none text-center">
              <li>Fill out the short application form above.</li>
              <li>We’ll review it and respond within 1 business day.</li>
              <li>
                You’ll be invited to book a free Discovery Call to explore your business goals, support
                needs, and VA match.
              </li>
            </ul>
          </motion.div>

          {/* Why This Partnership Matters */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8"
            variants={itemVariants}
            whileHover="hover"
          >
            <h2 className="text-lg sm:text-xl font-semibold text-color mb-4 text-center">
              Why This Partnership Matters
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-center">
              When you work with us, you’re not just gaining{' '}
              <span className="font-semibold text-color">expert support</span>—you’re partnering with
              purpose-driven VAs from Kenya who are trained in AI and built to move your business
              forward. This isn’t outsourcing. This is{' '}
              <span className="font-semibold text-color">smart, human-centered delegation</span>.
            </p>
          </motion.div>

          {/* What to Expect on Your Discovery Call */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8"
            variants={itemVariants}
            whileHover="hover"
          >
            <h2 className="text-lg sm:text-xl font-semibold text-color mb-4 text-center">
              What to Expect on Your Discovery Call
            </h2>
            <ul className="text-xs sm:text-sm text-gray-600 leading-relaxed space-y-3 list-disc list-inside text-center">
              <li>We’ll talk about the support you need (even if you’re not 100% sure yet)</li>
              <li>You’ll define what success looks like for you</li>
              <li>We’ll share how our VAs integrate AI tools into your workflows</li>
              <li>You’ll get clarity on how we match, onboard, and support your journey</li>
              <li>No pressure—just a real conversation to explore what’s possible</li>
            </ul>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            className="text-center"
            variants={containerVariants}
          >
            <h2 className="text-lg sm:text-xl font-semibold text-color mb-4">
              Let’s Simplify Your Life—and Scale Your Business
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
              Complete the form above and we’ll be in touch within 1 business day.
            </p>
            <Link
              to="https://zcal.co/carolinekabi/discovery-call-30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2 text-sm font-semibold rounded-full bg-color text-white shadow-md hover:bg-[#a62066] transition-colors duration-300"
              variants={itemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              aria-label="Book a free discovery call with AI Empowered Virtual Assistants"
            >
              <FaCalendarAlt className="mr-2 text-sm" aria-hidden="true" />
              Apply + Book Your Call
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;