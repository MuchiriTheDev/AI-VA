import React from 'react';

const WhatMakesUsDifferent = () => {
  const features = [
    {
      title: 'Strategic Matchmakers',
      description: 'We pair you with a virtual assistant aligned to your work style, pace, and goals.',
    },
    {
      title: 'AI-Enabled Partners',
      description: 'Our team leverages tools like ChatGPT, Notion, and Zapier to streamline tasks, reduce chaos, and boost efficiency.',
    },
    {
      title: 'Whole-Life Supporters',
      description: 'We manage your inbox, family calendar, travel, follow-ups, and even your headspace for true balance.',
    },
    {
      title: 'Founder-Led, Heart-First',
      description: 'You work directly with us—no bots, just personalized support.',
    },
    {
      title: 'Commitment to Fit',
      description: 'If it’s not working, we rematch, refine, and stick with you until it feels right.',
    },
  ];

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-color mb-6">
          What Makes Us Different
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
          We’re not just a virtual assistant agency. We’re your partners in transformation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-sm sm:text-base font-semibold text-color mb-3">
                {feature.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;