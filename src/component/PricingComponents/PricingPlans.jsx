import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaStar, FaSeedling, FaRocket, FaCrown } from 'react-icons/fa';

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

const PricingPlans = () => {
  const plans = [
    {
      name: 'The Essentials',
      price: '$600/month',
      icon: <FaSeedling className="text-3xl text-color" aria-hidden="true" />,
      description: 'For solo founders ready to stop doing everything alone.',
      features: [
        'Dedicated VA trained in AI tools',
        'Daily task management + execution',
        'Calendar, inbox, and personal admin support',
        'Content repurposing (audio/video → post/email)',
        'CRM, form, and tool management',
        'Weekly check-ins with our agency lead',
        'Founder onboarding + guided start',
      ],
      bestFor: 'Best for coaches, consultants, and speakers getting organized for scale',
      isPopular: false,
    },
    {
      name: 'The Accelerator',
      price: '$800/month',
      icon: <FaRocket className="text-3xl text-color" aria-hidden="true" />,
      description: 'For founders in motion who need proactive support.',
      features: [
        'Everything in Essentials, plus:',
        'Social media management & scheduling',
        'Newsletter or email automation setup',
        'Travel planning + personal life support',
        'Podcast or video publishing workflows',
        'Monthly strategy touchpoint with Caroline',
        'Quarterly workflow + tools audit',
      ],
      bestFor: 'Best for founders who are growing fast and want to stay ahead of the curve',
      isPopular: true,
    },
    {
      name: 'The Executive',
      price: '$1,000/month',
      icon: <FaCrown className="text-3xl text-color" aria-hidden="true" />,
      description: 'For leaders who want a second brain—not just a second set of hands.',
      features: [
        'Everything in Accelerator, plus:',
        'Direct support across both business + personal ops',
        'AI-powered workflows built for your business',
        'Priority matching with top-tier VA',
        'Business process optimization',
        'Launch coordination support',
        'Content creation + campaign delivery',
        'Customized SOPs built as you go',
      ],
      bestFor: 'Best for CEOs with multiple offers, active teams, or fast-scaling needs',
      isPopular: false,
    },
  ];

  return (
    <section
      id="pricing-plans"
      className="w-full max-w-[100vw] min-h-[80vh] mt-20 h-fit py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#C8287E]/5 relative overflow-hidden"
    >
      <motion.div
        className="max-w-7xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Headline */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 leading-tight"
          variants={itemVariants}
        >
          Strategic Support.{' '}
          <span className="italic text-color">Flat Monthly Rates. No Surprises.</span>
          <span className="block w-32 h-1 mx-auto mt-3 text-color rounded-full"></span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-xs sm:text-sm text-gray-600 mb-10 leading-relaxed max-w-5xl mx-auto"
          variants={itemVariants}
        >
          We don’t charge by the hour—because what you really want is{' '}
          <span className="font-semibold text-color">peace of mind, momentum, and full-time support</span>{' '}
          that moves your life and business forward. Choose the level of delegation that fits your pace,
          your goals, and your season of growth.
        </motion.p>

        {/* Pricing Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-9xl mx-auto"
          variants={containerVariants}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-xl text-left p-8 flex flex-col relative ${
                plan.isPopular ? 'border-2 border-[#C8287E] shadow-lg' : 'shadow-md'
              }`}
              variants={itemVariants}
              whileHover="hover"
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-color text-white text-[10px] font-semibold px-2 py-1 rounded-full flex items-center">
                  <FaStar className="mr-1 text-xs" aria-hidden="true" /> Most Popular
                </div>
              )}
              <div className="mb-4">{plan.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-color mb-2">{plan.name}</h3>
              <p className="text-xl sm:text-2xl font-bold text-gray-600 mb-4">{plan.price}</p>
              <p className="text-xs text-gray-600 mb-6 leading-relaxed">{plan.description}</p>
              <ul className="text-xs text-gray-600 mb-6 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start mb-2">
                    <FaCheckCircle className="text-color mr-2 mt-1 text-sm" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[10px] sm:text-xs text-gray-500 italic mb-6">{plan.bestFor}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PricingPlans;