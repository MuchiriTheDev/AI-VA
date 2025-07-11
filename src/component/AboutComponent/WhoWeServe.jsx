import React from 'react';

const WhoWeServe = () => {
  const audiences = [
    {
      title: 'U.S.-Based Founders, Coaches, and Consultants',
      description: 'We support driven professionals who need streamlined systems to scale their businesses efficiently.',
    },
    {
      title: 'High-Performing Black Women Entrepreneurs',
      description: 'We empower Black women leaders with tailored support to amplify their impact and achieve their vision.',
    },
    {
      title: 'Visionaries Tired of Doing It All',
      description: 'We help ambitious leaders who want to win without carrying every task on their shoulders.',
    },
    {
      title: 'Leaders Ready to Ask for Help',
      description: 'We provide full support for those ready to delegate and reclaim focus for what matters most.',
    },
  ];

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-color mb-6">
          Who We Serve
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
          You come to us feeling stretched, unfocused, and behind. You leave with systems that work, tasks that get done, and a VA you never want to let go.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-sm sm:text-base font-semibold text-color mb-3">
                {audience.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;