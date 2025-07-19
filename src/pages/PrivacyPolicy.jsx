import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Animation variants (identical to TermsOfService)
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
    boxShadow: '0 8px 16px rgba(200, 40, 126, 0.3)', // #C8287E shadow
    transition: { duration: 0.2 },
  },
};

const PrivacyPolicy = () => {
  const sections = [
    { id: 'information-collected', title: 'Information We Collect' },
    { id: 'use-of-information', title: 'How We Use Your Information' },
    { id: 'sharing-information', title: 'How We Share Your Information' },
    { id: 'cookies-tracking', title: 'Cookies and Tracking Technologies' },
    { id: 'data-security', title: 'Data Security' },
    { id: 'data-retention', title: 'Data Retention' },
    { id: 'your-rights', title: 'Your Rights' },
    { id: 'childrens-privacy', title: "Children's Privacy" },
    { id: 'international-users', title: 'International Users' },
    { id: 'policy-changes', title: 'Changes to This Policy' },
    { id: 'contact-us', title: 'Contact Us' },
  ];

  return (
    <section
      id="privacy-policy"
      className="w-full max-w-[100vw] min-h-[80vh] h-fit py-12 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
      role="main"
      aria-label="Privacy Policy Page"
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-color/5 to-transparent opacity-30 z-0"></div>

      <motion.div
        className="max-w-4xl mx-auto text-left relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Back to Home Link */}
        <motion.div
          className="mb-6"
          variants={itemVariants}
        >
          <Link
            to="/"
            className="inline-flex items-center text-[0.65rem] sm:text-xs text-color hover:underline"
            aria-label="Return to homepage"
          >
            <FaHome className="mr-2 text-[0.65rem] sm:text-xs" aria-hidden="true" />
            Back to Home
          </Link>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-xl sm:text-2xl md:text-3xl font-bold text-color mb-4"
          variants={itemVariants}
        >
          Privacy Policy
          <span className="block text-[0.65rem] sm:text-xs font-medium text-gray-800 mt-2">
            Effective Date: February 1, 2025
          </span>
          <span className="block w-32 h-1 mt-3 bg-gradient-to-r from-color to-[#a62066] rounded-full"></span>
        </motion.h1>

        {/* Table of Contents */}
        <motion.div
          className="bg-gray-50 rounded-lg p-6 mb-8 shadow-sm"
          variants={itemVariants}
        >
          <h2 className="text-base sm:text-lg font-semibold text-color mb-4">Table of Contents</h2>
          <ul className="list-none space-y-2">
            {sections.map((section, index) => (
              <motion.li
                key={section.id}
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <a
                  href={`#${section.id}`}
                  className="text-[0.65rem] sm:text-xs text-gray-600 hover:text-color transition-colors duration-200"
                  aria-label={`Jump to ${section.title}`}
                >
                  {index + 1}. {section.title}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Introductory Paragraph */}
        <motion.p
          className="text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed mb-8"
          variants={itemVariants}
        >
          Welcome to AI Empowered Virtual Assistants ("Company," "we," "us," or "our"). This Privacy
          Policy governs the collection, use, disclosure, and protection of your information when you
          access our website at{' '}
          <a
            href="http://empoweredaiva.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-color hover:underline"
            aria-label="Visit AI Empowered VAs website"
          >
            http://empoweredaiva.com
          </a>{' '}
          (the "Site") or engage with our services. By using the Site, you agree to be bound by this
          Privacy Policy and our{' '}
          <Link
            to="/terms-of-service"
            className="text-color hover:underline"
            aria-label="View Terms and Conditions"
          >
            Terms and Conditions
          </Link>. If you do not agree to this Policy, please do not use our Site.
        </motion.p>

        {/* Policy Sections */}
        <motion.div className="space-y-12" variants={containerVariants}>
          <motion.section
            id="information-collected"
            variants={itemVariants}
            className="border-t border-gray-200 pt-6"
          >
            <h2 className="text-base sm:text-lg font-semibold text-color mb-3">
              1. Information We Collect
            </h2>
            <p className="text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed">
              We collect personal and non-personal information when you interact with our Site or
              services, including when you:
            </p>
            <ul className="list-disc list-inside text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed mt-2 space-y-1">
              <li>Visit or navigate the Site</li>
              <li>Complete forms or subscribe to our newsletter</li>
              <li>Schedule a discovery call or submit a client intake form</li>
              <li>Communicate with us via email, social media, or other channels</li>
            </ul>
            <p className="text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed mt-2">
              The information collected may include:
            </p>
            <ul className="list-disc list-inside text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed mt-2 space-y-1">
              <li>Full name</li>
              <li>Email address</li>
              <li>Telephone number</li>
              <li>Business details (e.g., website, company name, business objectives)</li>
              <li>IP address, browser type, and device information</li>
              <li>Usage data derived from cookies and analytics tools</li>
            </ul>
          </motion.section>

          <motion.section
            id="use-of-information"
            variants={itemVariants}
            className="border-t border-gray-200 pt-6"
          >
            <h2 className="text-base sm:text-lg font-semibold text-color mb-3">
              2. How We Use Your Information
            </h2>
            <p className="text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed">
              We process your information for the following purposes:
            </p>
            <ul className="list-disc list-inside text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed mt-2 space-y-1">
              <li>Deliver, maintain, and enhance our services</li>
              <li>Respond to your inquiries or requests</li>
              <li>Personalize your experience on the Site</li>
              <li>Send communications, including newsletters, service updates, or promotional materials</li>
              <li>Analyze Site traffic and user behavior</li>
              <li>Comply with legal obligations or protect our legitimate business interests</li>
            </ul>
            <p className="text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed mt-2">
              We do not sell, trade, or transfer your personal information to third parties for
              marketing purposes.
            </p>
          </motion.section>

          <motion.section
            id="sharing-information"
            variants={itemVariants}
            className="border-t border-gray-200 pt-6"
          >
            <h2 className="text-base sm:text-lg font-semibold text-color mb-3">
              3. How We Share Your Information
            </h2>
            <p className="text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed">
              We may share your information with trusted third-party service providers who assist in our
              operations, including:
            </p>
            <ul className="list-disc list-inside text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed mt-2 space-y-1">
              <li>Email marketing platforms</li>
              <li>Calendar and scheduling tools</li>
              <li>Customer relationship management (CRM) systems</li>
              <li>Payment processing services</li>
            </ul>
            <p className="text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed mt-2">
              These providers are contractually obligated to maintain the confidentiality and security
              of your information. We may also disclose information to comply with applicable laws or
              to protect our legal rights.
            </p>
          </motion.section>

          <motion.section
            id="cookies-tracking"
            variants={itemVariants}
            className="安全的
            border-t border-gray-200 pt-6"
          >
            <h2 className="text-base sm:text-lg font-semibold text-color mb-3">
              4. Cookies and Tracking Technologies
            </h2>
            <p className="text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed">
              Our Site employs cookies and similar technologies to improve user experience, analyze
              usage patterns, and provide personalized content. You may disable cookies through your
              browser settings, though this may restrict access to certain Site features.
            </p>
          </motion.section>

          <motion.section
            id="data-security"
            variants={itemVariants}
            className="border-t border-gray-200 pt-6"
          >
            <h2 className="text-base sm:text-lg font-semibold text-color mb-3">
              5. Data Security
            </h2>
            <p className="text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed">
              We implement industry-standard security measures to protect your personal information
              from unauthorized access, loss, or misuse. However, no method of internet transmission or
              electronic storage is entirely secure, and we cannot guarantee absolute data security.
            </p>
          </motion.section>

          <motion.section
            id="data-retention"
            variants={itemVariants}
            className="border-t border-gray-200 pt-6"
          >
            <h2 className="text-base sm:text-lg font-semibold text-color mb-3">
              6. Data Retention
            </h2>
            <p className="text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes
              outlined in this Policy, including compliance with legal, tax, or reporting obligations.
            </p>
          </motion.section>

          <motion.section
            id="your-rights"
            variants={itemVariants}
            className="border-t border-gray-200 pt-6"
          >
            <h2 className="text-base sm:text-lg font-semibold text-color mb-3">
              7. Your Rights
            </h2>
            <p className="text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed">
              Depending on your jurisdiction, you may have the following rights regarding your personal
              information:
            </p>
            <ul className="list-disc list-inside text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed mt-2 space-y-1">
              <li>Access to your personal data</li>
              <li>Correction or deletion of your information</li>
              <li>Withdrawal of consent for data processing</li>
              <li>Data portability</li>
              <li>Opt-out of marketing communications</li>
            </ul>
            <p className="text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed mt-2">
              To exercise these rights, please contact us using the details provided in Section 11.
            </p>
          </motion.section>

          <motion.section
            id="childrens-privacy"
            variants={itemVariants}
            className="border-t border-gray-200 pt-6"
          >
            <h2 className="text-base sm:text-lg font-semibold text-color mb-3">
              8. Children's Privacy
            </h2>
            <p className="text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed">
              Our Site and services are not intended for individuals under 18 years of age. We do not
              knowingly collect personal information from children. If you believe we have collected
              data from a minor, please contact us immediately using the details in Section 11.
            </p>
          </motion.section>

          <motion.section
            id="international-users"
            variants={itemVariants}
            className="border-t border-gray-200 pt-6"
          >
            <h2 className="text-base sm:text-lg font-semibold text-color mb-3">
              9. International Users
            </h2>
            <p className="text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed">
              If you access our Site from outside Kenya or the United States, your data may be
              transferred to and processed in these jurisdictions. By using the Site, you consent to
              such data transfers.
            </p>
          </motion.section>

          <motion.section
            id="policy-changes"
            variants={itemVariants}
            className="border-t border-gray-200 pt-6"
          >
            <h2 className="text-base sm:text-lg font-semibold text-color mb-3">
              10. Changes to This Policy
            </h2>
            <p className="text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed">
              We may revise this Privacy Policy periodically to reflect changes in our practices or
              legal requirements. Updates will be posted on this page with a revised "Effective Date."
              Your continued use of the Site following such changes constitutes acceptance of the
              updated Policy.
            </p>
          </motion.section>

          <motion.section
            id="contact-us"
            variants={itemVariants}
            className="border-t border-gray-200 pt-6"
          >
            <h2 className="text-base sm:text-lg font-semibold text-color mb-3">
              11. Contact Us
            </h2>
            <p className="text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              AI Empowered Virtual Assistants
              <br />
              Email:{' '}
              <a
                href="mailto:info@empoweredaiva.com"
                className="text-color hover:underline"
                aria-label="Email AI Empowered Virtual Assistants"
              >
                info@empoweredaiva.com
              </a>
              <br />
              Website:{' '}
              <a
                href="http://empoweredaiva.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-color hover:underline"
                aria-label="Visit AI Empowered VAs website"
              >
                http://empoweredaiva.com
              </a>
            </p>
          </motion.section>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-12"
          variants={itemVariants}
          whileHover="hover"
        >
          <a
            href="https://zcal.co/carolinekabi/discovery-call-30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-1.5 text-xs sm:text-sm font-semibold rounded-full bg-color text-white shadow-md hover:bg-[#a62066] transition-colors duration-300"
            variants={itemVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            aria-label="Book a free discovery call with AI Empowered Virtual Assistants"
          >
            <FaCalendarAlt className="mr-2 text-xs sm:text-sm" aria-hidden="true" />
            Book a Discovery Call
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PrivacyPolicy;