// import React, { useState, useEffect } from "react";

// export const TestimonialSection = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   // Define yellow color
//   const yellow = "#FEDD00";

//   // Brand logos data
//   const brands = [
//     {
//       name: "Payscale",
//       vectorSrc: "/images/vector-4.svg",
//       vectorWidth: "w-[58px]",
//     },
//     {
//       name: "Arktico",
//       vectorSrc: "/images/vector-3.svg",
//       vectorWidth: "w-[74px]",
//     },
//     {
//       name: "Getdonelist",
//       vectorSrc: "/images/vector-1.svg",
//       vectorWidth: "w-[65px]",
//     },
//     {
//       name: "Teamtalk",
//       vectorSrc: "/images/vector-2.svg",
//       vectorWidth: "w-[77px]",
//     },
//     // Duplicate for seamless loop
//     {
//       name: "Payscale",
//       vectorSrc: "/images/vector-4.svg",
//       vectorWidth: "w-[58px]",
//     },
//     {
//       name: "Arktico",
//       vectorSrc: "/images/vector-3.svg",
//       vectorWidth: "w-[74px]",
//     },
//     {
//       name: "Getdonelist",
//       vectorSrc: "/images/vector-1.svg",
//       vectorWidth: "w-[65px]",
//     },
//     {
//       name: "Teamtalk",
//       vectorSrc: "/images/vector-2.svg",
//       vectorWidth: "w-[77px]",
//     },
//   ];

//   return (
//     <section className="relative w-full py-8 md:py-12 bg-[#f4f5f6] overflow-hidden">
//       <div className="flex flex-col w-full max-w-[1280px] mx-auto items-center justify-center gap-6 md:gap-8 px-4 md:px-8">
//         {/* Header Section */}
//         <div
//           className={`flex flex-col w-full max-w-[626px] items-center justify-center gap-3 md:gap-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//             }`}
//         >
//           <div className="relative flex items-center gap-2 animate-in slide-in-from-top-2 duration-700 ease-out delay-100">
//             <img
//               className="w-[40px] h-[47px] sm:w-[50px] sm:h-[59px] lg:w-[60px] lg:h-[71px] object-contain"
//               alt="Lightning icon"
//               src="/images/2676-080625-vora-hp-png-02-2.png"
//             />

//             <div className="font-semibold text-lg sm:text-xl lg:text-2xl tracking-[1.5px] leading-[22px] sm:leading-[26px] lg:leading-[30px]">
//               OUR CLIENTS
//             </div>
//           </div>
//         </div>

//         {/* Brand Logos Marquee */}
//         <div className={`w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//           }`}>
//           <div className="relative overflow-hidden">
//             {/* Gradient overlays for smooth fade effect */}
//             <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-[#f4f5f6] to-transparent z-10"></div>
//             <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-[#f4f5f6] to-transparent z-10"></div>

//             <div className="flex items-center">
//               <div className="flex animate-marquee gap-12 md:gap-16 lg:gap-20 whitespace-nowrap py-4">
//                 {[...brands, ...brands].map((brand, index) => (
//                   <div
//                     key={`${brand.name}-${index}`}
//                     className="flex-shrink-0 flex items-center justify-center"
//                   >
//                     <img
//                       className="h-8 md:h-10 lg:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
//                       alt={`${brand.name} logo`}
//                       src={brand.vectorSrc}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes marquee {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }

//         .animate-marquee {
//           animation: marquee 30s linear infinite;
//         }

//         /* Pause animation on hover */
//         .animate-marquee:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </section>
//   );
// };
import React, { useState, useEffect } from "react";

export const TestimonialSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Define yellow color
  const yellow = "#FEDD00";

  // Generate brand logos data for all 26 logos
  const generateBrands = () => {
    const brands = [];
    for (let i = 1; i <= 26; i++) {
      brands.push({
        name: `Brand ${i}`,
        vectorSrc: `/images/logos/${i}.png`,
        id: i
      });
    }
    return brands;
  };

  const allBrands = generateBrands();

  // Distribute logos across 3 lines: 9, 9, 8
  const marqueeLines = [
    allBrands.slice(0, 9),   // First 9 logos (1-9)
    allBrands.slice(9, 18),  // Next 9 logos (10-18)
    allBrands.slice(18, 26)  // Last 8 logos (19-26)
  ];

  const MarqueeLine = ({ brands, direction, speed = 30 }) => (
    <div className="relative overflow-hidden w-full">
      <div className="flex items-center">
        <div 
          className={`flex gap-12 md:gap-16 lg:gap-20 whitespace-nowrap py-3 ${
            direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
          }`}
          style={{ animationDuration: `${speed}s` }}
        >
          {/* Duplicate brands for seamless loop */}
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <img
                className="h-24 md:h-28 lg:h-32 w-auto opacity-100 transition-opacity duration-300"
                alt={`${brand.name} logo`}
                src={brand.vectorSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative w-full py-8 md:py-12 bg-[#f4f5f6] overflow-hidden">
      <div className="flex flex-col w-full max-w-[1280px] mx-auto items-center justify-center gap-6 md:gap-8 px-4 md:px-8">
        {/* Header Section */}
        <div
          className={`flex flex-col w-full max-w-[626px] items-center justify-center gap-3 md:gap-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative flex items-center gap-2 animate-in slide-in-from-top-2 duration-700 ease-out delay-100">
            <img
              className="w-[40px] h-[47px] sm:w-[50px] sm:h-[59px] lg:w-[60px] lg:h-[71px] object-contain"
              alt="Lightning icon"
              src="/images/2676-080625-vora-hp-png-02-2.png"
            />

            <div className="font-semibold text-lg sm:text-xl lg:text-2xl tracking-[1.5px] leading-[22px] sm:leading-[26px] lg:leading-[30px]">
              OUR CLIENTS
            </div>
          </div>
        </div>

        {/* Brand Logos Marquee Lines */}
        <div 
          className={`w-full space-y-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* First Marquee Line - Right to Left - 9 logos */}
          <MarqueeLine brands={marqueeLines[0]} direction="left" speed={35} />
          
          {/* Second Marquee Line - Left to Right - 9 logos */}
          <MarqueeLine brands={marqueeLines[1]} direction="right" speed={32} />
          
          {/* Third Marquee Line - Right to Left - 8 logos */}
          <MarqueeLine brands={marqueeLines[2]} direction="left" speed={30} />
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }

        @keyframes marquee-right {
          from {
            transform: translateX(-33.333%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-marquee-left {
          animation: marquee-left linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right linear infinite;
        }

        /* Pause animation on hover */
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .animate-marquee-left,
          .animate-marquee-right {
            animation-duration: 25s !important;
          }
        }
      `}</style>
    </section>
  );
};