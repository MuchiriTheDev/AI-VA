import React from 'react';
import { assets } from '../../assets/assets';

const WhyIDoThis = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
        {/* Left Content: Image */}
        <div className="md:w-1/3 flex justify-center">
          <div className="relative">
            <img
              src={assets.why}
              alt="AI-powered virtual assistant support for founders"
              className="w-[300px] h-[360px] sm:w-[400px] sm:h-[480px] md:w-[450px] h-screen3 rounded-lg shadow-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Content: Text */}
        <div className="md:w-2/3 text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-color mb-3">
            Why I Do This Work
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed max-w-md mx-auto md:mx-0">
            I built this agency to solve two problems at once:
          </p>
         <ol className='pl-7 list-disc text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed max-w-md mx-auto md:mx-0'>
           <li className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed max-w-md mx-auto md:mx-0">
            Founders, especially women of color, deserve <span className="font-semibold text-color">high-level support</span> that empowers them to move forward—not just stay afloat.
          </li>
          <li className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed max-w-md mx-auto md:mx-0">
            Talented, hardworking professionals in Kenya deserve access to <span className="font-semibold text-color">remote work</span> that honors their intelligence, trains them for the future, and frees them from grueling commutes.
          </li>
         </ol>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0 mb-5">
            Here, we create that bridge. <br />
            <span className="font-semibold text-color">One founder. One VA. One transformation at a time.</span>
          </p>
          <a
            href="https://zcal.co/carolinekabi/discovery-call-30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full bg-color text-white shadow-md hover:bg-[#a62066] transition-colors duration-300"
            aria-label="Book a discovery call to learn about AI Empowered Virtual Assistants"
          >
            Reach Out to Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyIDoThis;