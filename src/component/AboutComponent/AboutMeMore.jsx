import React from 'react';

const AboutMeMore = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <h2 className="text-2xl sm:text-3xl font-bold text-color mb-6 text-center">
          A Bit More About Me
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto text-center">
          What most people don’t see is the time I’ve spent behind the scenes—locked in my apartment, brainstorming with ChatGPT, testing every AI tool I could find, figuring out how to build something real from scratch.
        </p>

        {/* Narrative Section */}
        <div className="relative bg-gradient-to-r from-[#C8287E]/5 to-white rounded-lg shadow-md p-8 mb-10">
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl mx-auto">
            There was no template for what I was trying to create. So I made one—with <span className="font-semibold text-color">heart</span>, with <span className="font-semibold text-color">hustle</span>, and with my own story as the foundation.
          </p>
          <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed max-w-xl mx-auto">
            I don’t come from ease. I come from <span className="font-semibold text-color">vision</span>. I’m the kind of woman who might walk into a challenge not knowing how—but I always figure it out.
          </p>
          <p className="text-sm sm:text-base font-semibold text-color mt-4 leading-relaxed max-w-xl mx-auto">
            That’s what I bring to this work. That’s what I bring to you.
          </p>
        </div>

        {/* Why This Work Matters Section */}
        <div className="relative">
          <h3 className="text-xl sm:text-2xl font-semibold text-color mb-6 text-center">
            Why This Work Matters
          </h3>
          <div className="flex flex-col sm:flex-row gap-6">
            {/* For Our Clients */}
            <div className="sm:w-1/2 bg-white rounded-lg shadow-md p-6">
              <h4 className="text-base sm:text-lg font-semibold text-gray-600 mb-3">
                For Our Clients
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                It’s about <span className="font-semibold text-color">clarity</span>, <span className="font-semibold text-color">peace</span>, and <span className="font-semibold text-color">progress</span>. Finally moving those journaled dreams into action. Finally breathing again.
              </p>
            </div>
            {/* For Our Team */}
            <div className="sm:w-1/2 bg-white rounded-lg shadow-md p-6">
              <h4 className="text-base sm:text-lg font-semibold text-gray-600 mb-3">
                For Our Team
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                It’s about <span className="font-semibold text-color">flexibility</span>, <span className="font-semibold text-color">dignity</span>, <span className="font-semibold text-color">opportunity</span>, and global exposure. Many of our VAs are women who now work from home, raise families, and grow careers they love—with AI in hand and power in their voice.
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default AboutMeMore;