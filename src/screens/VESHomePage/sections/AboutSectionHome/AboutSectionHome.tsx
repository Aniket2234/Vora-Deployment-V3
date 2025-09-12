import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutSectionHome = () => {
  return (
  <div className="min-h-screen bg-white flex items-center justify-center w-full overflow-hidden">
    <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20 mx-auto">

      {/* Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 lg:mb-16">
        {/* Left Content */}
        <div className="order-1 lg:order-1 pr-0 lg:pr-6 opacity-0 animate-[slideInLeft_0.8s_ease-out_0.2s_forwards]">
          <p className="text-base sm:text-lg lg:text-xl font-semibold text-black mb-4 tracking-widest uppercase transform translate-y-4 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards]">
            ABOUT US
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-black mb-6 leading-[1.1] transform translate-y-6 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
            Where legacy meets Innovation
          </h1>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-2xl transform translate-y-8 animate-[fadeInUp_1s_ease-out_0.8s_forwards]">
In an industry where precision, safety, and consistency matter most, we've been powering excellence since 1963. With over six decades of experience, our name stands for integrity, innovation, and legacy.
          </p>
        </div>

        {/* Industrial Facility Image - Responsive Oval */}
        <div className="order-2 lg:order-2 flex justify-center lg:justify-end opacity-0 animate-[slideInRight_0.8s_ease-out_0.4s_forwards]">
          <div className="relative w-72 h-44 sm:w-80 sm:h-48 md:w-96 md:h-56 lg:w-[420px] lg:h-64 xl:w-[480px] xl:h-72 transform hover:scale-105 transition-transform duration-500 ease-out group">
            {/* Yellow oval border with glow effect */}
            <div className="absolute -inset-3 bg-gradient-to-r from-[#FEDD00] via-yellow-400 to-[#FEDD00] rounded-full opacity-80 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
            <div className="absolute -inset-2 bg-[#FEDD00] rounded-full opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl group-hover:shadow-3xl transition-shadow duration-500">
              <img
                src="/images/fam1.jpg"
                alt="Industrial Facility"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 group-hover:to-black/5 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        {/* Modern Building Image - Responsive Oval */}
        <div className="order-2 lg:order-1 flex justify-center lg:justify-start opacity-0 animate-[slideInLeft_0.8s_ease-out_1s_forwards]">
          <div className="relative w-72 h-44 sm:w-80 sm:h-48 md:w-96 md:h-56 lg:w-[420px] lg:h-64 xl:w-[480px] xl:h-72 transform hover:scale-105 transition-transform duration-500 ease-out group">
            {/* Yellow oval border with glow effect */}
            <div className="absolute -inset-3 bg-gradient-to-r from-[#FEDD00] via-yellow-400 to-[#FEDD00] rounded-full opacity-80 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
            <div className="absolute -inset-2 bg-[#FEDD00] rounded-full opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl group-hover:shadow-3xl transition-shadow duration-500">
              <img
                src="/images/city2.png"   // Place your uploaded building image here
                alt="Modern Building"
                className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 group-hover:to-black/5 transition-all duration-500"></div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="order-1 lg:order-2 space-y-6 lg:space-y-8 pl-0 lg:pl-6 opacity-0 animate-[slideInRight_0.8s_ease-out_1.2s_forwards]">
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-2xl transform translate-y-4 animate-[fadeInUp_0.8s_ease-out_1.4s_forwards]">
            We provide comprehensive electrical services, from installations to advanced green solutions, trusted by large brands and enterprises across all sectors. As pioneers in electrical innovation, we deliver future-ready infrastructure that is smart, sustainable, and built on trust.
          </p>

          {/* Feature Points */}
          <div className="transform translate-y-6 animate-[fadeInUp_0.8s_ease-out_1.6s_forwards]">
            <div className="flex flex-wrap gap-6 lg:gap-8 mb-3">
              <div className="flex items-center space-x-2 group cursor-pointer transform opacity-0 animate-[slideInFade_0.6s_ease-out_1.8s_forwards] hover:scale-105 transition-transform duration-300">
                <div className="w-4 h-4 bg-[#FEDD00] rounded-full flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300 shadow-md group-hover:shadow-[#FEDD00]/50">
                  <svg className="w-2.5 h-2.5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-black font-medium text-xs sm:text-sm leading-tight group-hover:text-black transition-colors duration-300">
                  Trusted by leading<br />brands since 1963
                </span>
              </div>

              <div className="flex items-center space-x-2 group cursor-pointer transform opacity-0 animate-[slideInFade_0.6s_ease-out_2s_forwards] hover:scale-105 transition-transform duration-300">
                <div className="w-4 h-4 bg-[#FEDD00] rounded-full flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300 shadow-md group-hover:shadow-[#FEDD00]/50">
                  <svg className="w-2.5 h-2.5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-black font-medium text-xs sm:text-sm leading-tight group-hover:text-black transition-colors duration-300">
                  Full-spectrum electrical &<br />energy services
                </span>
              </div>
            </div>

            <div className="flex">
              <div className="flex items-center space-x-2 group cursor-pointer transform opacity-0 animate-[slideInFade_0.6s_ease-out_2.2s_forwards] hover:scale-105 transition-transform duration-300">
                <div className="w-4 h-4 bg-[#FEDD00] rounded-full flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300 shadow-md group-hover:shadow-[#FEDD00]/50">
                  <svg className="w-2.5 h-2.5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-black font-medium text-xs sm:text-sm leading-tight group-hover:text-black transition-colors duration-300">
                  Powered by innovation &<br />guided by legacy
                </span>
              </div>
            </div>
          </div>

          {/* Know More Button */}
          <div className="transform translate-y-8 opacity-0 animate-[fadeInUp_0.8s_ease-out_2.4s_forwards]">
            <button className="inline-flex items-center gap-2 pl-4 pr-6 py-3 border-2 border-slate-800 rounded-full hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-all duration-300 text-sm sm:text-base font-medium text-black group hover:scale-105 hover:shadow-lg">
              <span className="font-medium tracking-wide">Know More</span>
              <div className="w-6 h-6 bg-[#FEDD00] rounded-full flex items-center justify-center transform group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 shadow-md group-hover:shadow-[#FEDD00]/50">
                <ArrowRight className="w-3 h-3 text-black" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <style>{`
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes slideInLeft {
        from { opacity: 0; transform: translateX(-50px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes slideInRight {
        from { opacity: 0; transform: translateX(50px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes slideInFade {
        from { opacity: 0; transform: translateX(20px); }
        to { opacity: 1; transform: translateX(0); }
      }
    `}</style>
  </div>
);
};

export default AboutSectionHome;