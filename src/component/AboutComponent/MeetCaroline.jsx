import React from 'react';
import { assets } from '../../assets/assets';

const MeetCaroline = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row-reverse items-center gap-8 md:gap-12">
        {/* Right Content: Text (Moved to bottom on mobile) */}
        <div className="md:w-1/2 md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-color mb-3">
            Meet Caroline Kabi
          </h2>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
            Founder. Strategist. Your Secret Weapon.
          </h3>
         
          <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed max-w-md mx-auto md:mx-0  italic">
            “Caroline, I don’t know what I’d do without you.” <br />
            “You’re my journal.” <br />
            “You’re the reason I’m still scaling.”
          </p>
          <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed max-w-md mx-auto md:mx-0">
           I’ve heard these words from clients more times than I can count—and I don’t take them lightly.
          </p>
          <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed max-w-md mx-auto md:mx-0">
            My journey into this work began when one of my clients—overwhelmed and overextended—asked if I knew any VAs in Kenya who could help other CEOs the way I helped her. She needed someone sharp, reliable, and forward-thinking. I knew plenty of people like that—but there was no platform to connect them. No system. No access.
          </p>
          <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed max-w-md mx-auto md:mx-0">
            She looked me in the eye and said: <span className="font-semibold text-color">“Then build one.”</span>So I did.
          </p>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
            However, as I began building, I realized the real problem wasn’t just access to VAs.
            It was that <span className="font-semibold text-color">even when people hired help, they still felt buried. </span>They were assigning tasks but still holding the weight. They were delegating—but not getting their lives back.
          </p>
          <div className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-md mx-auto mb-9 md:mx-0">
            That’s when I decided:
            <ul className='pl-8'>
              <li className="list-disc">
                <span className="font-semibold text-gray-600">This wouldn’t be a staffing service.</span>
              </li>
              <li className="list-disc ">
                <span className="font-semibold text-gray-600">This would be a <span className='text-color'>support system.</span></span>   
              </li>
            </ul>
          </div>
          <a
            href="https://zcal.co/carolinekabi/discovery-call-30min"
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-color text-white font-semibold mt-4 py-2 px-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 bg-opacity-95 hover:bg-opacity-100 overflow-hidden"
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