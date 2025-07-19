import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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

const TermsOfService = () => {
  const sections = [
    { id: 'overview', title: 'Website and Services Overview' },
    { id: 'use', title: 'Use of the Website' },
    { id: 'intellectual-property', title: 'Intellectual Property' },
    { id: 'user-submissions', title: 'User Submissions' },
    { id: 'payment-terms', title: 'Payment Terms' },
    { id: 'no-guarantees', title: 'No Guarantees' },
    { id: 'third-party-links', title: 'Third-Party Links' },
    { id: 'disclaimer', title: 'Disclaimer' },
    { id: 'limitation-of-liability', title: 'Limitation of Liability' },
    { id: 'indemnification', title: 'Indemnification' },
    { id: 'modifications', title: 'Modifications' },
    { id: 'governing-law', title: 'Governing Law' },
    { id: 'contact-us', title: 'Contact Us' },
  ];

  return (
    <section
      id="terms-of-service"
      className="w-full max-w-[100vw] min-h-[80vh] h-fit py-12 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
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
          Terms and Conditions
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
          className="text-[0.65rem] sm:text-xs text-gray-600 mb-8 leading-relaxed"
          variants={itemVariants}
        >
          Welcome to AI Empowered VAs! These Terms and Conditions ("Terms") govern your access to and use of our website located at{' '}
          <a
            href="https://empoweredaiva.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-color hover:underline"
            aria-label="Visit AI Empowered VAs website"
          >
            https://empoweredaiva.com/
          </a>{' '}
          (the "Site") and the services provided by AI Empowered VAs ("Company," "we," "us," or "our"). Please read these Terms carefully before using the Site. By accessing or using the Site, you agree to be bound by these Terms and our{' '}
          <Link
            to="/privacy-policy"
            className="text-color hover:underline"
            aria-label="View Privacy Policy"
          >
            Privacy Policy
          </Link>. If you do not agree to these Terms, please do not use our Site.
        </motion.p>

        {/* Terms Sections */}
        <motion.div className="space-y-12" variants={containerVariants}>
          <motion.section id="overview" variants={itemVariants} className="border-t border-gray-200 pt-6">
            <h2 className="text-base sm:text-lg font-semibold text-color mb-3">1. Website and Services Overview</h2>
            <p className="text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed">
              AI Empowered VAs is a virtual assistant agency providing administrative support, project management, customer service, and strategic business solutions with an AI-enhanced approach. We offer service packages and custom solutions to support founders, entrepreneurs, and growing businesses.
            </p>
          </motion.section>

          <motion.section id="use" variants={itemVariants} className="border-t border-gray-200 pt-6">
            <h2 className="text-base sm:text-lg font-semibold text-color mb-3">2. Use of the Website</h2>
            <p className="text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed">
              You may use this Site for lawful purposes only. You agree not to use the Site:
            </p>
            <ul className="list-disc list-inside text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed mt-2 space-y-1">
              <li>For any fraudulent or unlawful purpose.</li>
              <li>To infringe on the intellectual property rights of the Company or others.</li>
              <li>To distribute viruses or harmful code.</li>
              <li>To collect or track the personal information of others.</li>
            </ul>
            <p className="text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed mt-2">
              We reserve the right to restrict or terminate your access to the Site at any time if you violate these Terms.
            </p>
          </motion.section>

          <motion.section id="intellectual-property" variants={itemVariants} className="border-t border-gray-200 pt-6">
            <h2 className="text-base sm:text-lg font-semibold text-color mb-3">3. Intellectual Property</h2>
            <p className="text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed">
              All content on this Site, including but not limited to text, graphics, logos, icons, images, videos, and digital downloads, is the property of AI Empowered VAs and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, duplicate, copy, sell, resell, or exploit any portion of the Site or its content without express written permission.
            </p>
          </motion.section>

          <motion.section id="user-submissions" variants={itemVariants} className="border-t border-gray-200 pt-6">
            <h2 className="text-base sm:text-lg font-semibold text-color mb-3">4. User Submissions</h2>
            <p className="text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed">
              If you submit any feedback, testimonials, or materials via forms or email, you grant us a non-exclusive, worldwide, royalty-free license to use, copy, modify, publish, or distribute those materials for marketing or other purposes, unless you explicitly request otherwise in writing.
            </p>
          </motion.section>

          <motion.section id="payment-terms" variants={itemVariants} className="border-t border-gray-200 pt-6">
            <h2 className="text-base sm:text-lg font-semibold text-color mb-3">5. Payment Terms</h2>
            <p className="text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed">
              Payments for our services are outlined in individual agreements or proposals. All payments must be made in full as agreed upon, and are non-refundable unless otherwise stated. Invoices are payable via Wise or other methods specified. Late payments may incur additional fees or suspension of services.
            </p>
          </motion.section>

          <motion.section id="no-guarantees" variants={itemVariants} className="border-t border-gray-200 pt-6">
            <h2 className="text-base sm:text-lg font-semibold text-color mb-3">6. No Guarantees</h2>
            <p className="text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed">
              We make every effort to deliver high-quality results, but we do not guarantee specific outcomes or results. Success depends on various factors outside of our control. The Company is not liable for any business outcomes resulting from the use of our services.
            </p>
          </motion.section>

          <motion.section id="third-party-links" variants={itemVariants} className="border-t border-gray-200 pt-6">
            <h2 className="text-base sm:text-lg font-semibold text-color mb-3">7. Third-Party Links</h2>
            <p className="text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed">
              This Site may contain links to third-party websites or tools. We do not control and are not responsible for the content, privacy practices, or availability of those websites. Use them at your own risk.
            </p>
          </motion.section>

          <motion.section id="disclaimer" variants={itemVariants} className="border-t border-gray-200 pt-6">
            <h2 className="text-base sm:text-lg font-semibold text-color mb-3">8. Disclaimer</h2>
            <p className="text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed">
              The Site is provided "as is" without warranties of any kind, either express or implied. We do not warrant that the Site will be uninterrupted, secure, or error-free. Use of this Site and our services is at your sole risk.
            </p>
          </motion.section>

          <motion.section id="limitation-of-liability" variants={itemVariants} className="border-t border-gray-200 pt-6">
            <h2 className="text-base sm:text-lg font-semibold text-color mb-3">9. Limitation of Liability</h2>
            <p className="text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed">
              To the fullest extent permitted by law, AI Empowered VAs shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use or inability to use the Site or services.
            </p>
          </motion.section>

          <motion.section id="indemnification" variants={itemVariants} className="border-t border-gray-200 pt-6">
            <h2 className="text-base sm:text-lg font-semibold text-color mb-3">10. Indemnification</h2>
            <p className="text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed">
              You agree to indemnify and hold harmless AI Empowered VAs and its team members from and against any claims, damages, liabilities, or expenses arising out of your use of the Site or breach of these Terms.
            </p>
          </motion.section>

          <motion.section id="modifications" variants={itemVariants} className="border-t border-gray-200 pt-6">
            <h2 className="text-base sm:text-lg font-semibold text-color mb-3">11. Modifications</h2>
            <p className="text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed">
              We may update or modify these Terms at any time without prior notice. The revised Terms will be effective as of the date they are posted on the Site. Continued use of the Site constitutes acceptance of the revised Terms.
            </p>
          </motion.section>

          <motion.section id="governing-law" variants={itemVariants} className="border-t border-gray-200 pt-6">
            <h2 className="text-base sm:text-lg font-semibold text-color mb-3">12. Governing Law</h2>
            <p className="text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed">
              These Terms are governed by and construed in accordance with the laws of the Republic of Kenya, without regard to its conflict of law principles.
            </p>
          </motion.section>

          <motion.section id="contact-us" variants={itemVariants} className="border-t border-gray-200 pt-6">
            <h2 className="text-base sm:text-lg font-semibold text-color mb-3">13. Contact Us</h2>
            <p className="text-[0.65rem] sm:text-xs text-gray-600 leading-relaxed">
              If you have any questions about these Terms, please contact us at:
              <br />
              AI Empowered VAs
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
                href="https://empoweredaiva.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-color hover:underline"
                aria-label="Visit AI Empowered VAs website"
              >
                https://empoweredaiva.com/
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

export default TermsOfService;