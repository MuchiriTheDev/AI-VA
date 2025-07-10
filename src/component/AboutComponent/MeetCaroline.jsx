import React from 'react';
import { assets } from '../../assets/assets';

const MeetCaroline = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row-reverse items-center gap-8 md:gap-12">
        {/* Right Content: Text (Moved to bottom on mobile) */}
        <div className="md:w-1/2 md:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold text-color mb-3">
            Meet Caroline Kabi
          </h2>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
            Founder. Strategist. Your Secret Weapon.
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-3 leading-relaxed max-w-md mx-auto md:mx-0 italic">
            “You’re my lifeline.” <br />
            “My journal.” <br />
            “The reason I’m scaling.”
          </p>
          <p className="text-sm sm:text-base text-gray-600 mb-3 leading-relaxed max-w-md mx-auto md:mx-0">
            Client words fuel my mission. They’re why I’m here.
          </p>
          <p className="text-sm sm:text-base text-gray-600 mb-3 leading-relaxed max-w-md mx-auto md:mx-0">
            It started with a client’s plea for a sharp, reliable virtual assistant in Kenya. No platform existed to connect them. Her challenge: <span className="font-semibold text-color">“Build one.”</span> I answered.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0 mb-9">
            But I saw beyond hiring. Founders were still drowning in tasks. So I built <span className="font-semibold text-color">a support system</span>—powered by AI, driven by clarity—to give you back your life.
          </p>
          <a
            href="https://zcal.co/carolinekabi/discovery-call-30min"
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-color text-white font-semibold mt-4 py-3 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 bg-opacity-95 hover:bg-opacity-100 overflow-hidden"
            aria-label="Book a discovery call with Caroline Kabi"
          >
            Book Your Call
          </a>
        </div>

        {/* Left Content: Image (Moved to top on mobile) */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src={assets.caroline}
              alt="Caroline Kabi, Founder of AI Empowered Virtual Assistants"
              className="w-[300px] h-[360px] sm:w-[400px] sm:h-[480px] md:w-[450px] md:h-[540px] rounded-lg shadow-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetCaroline;