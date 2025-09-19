// import React, { useState, useEffect, useRef } from "react";
// import {
//   ArrowRightCircle,
//   Menu,
//   X,
//   Zap,
//   Building2,
//   Power,
//   Lightbulb,
//   Wrench,
//   Leaf,
// } from "lucide-react";
// import { Button } from "../../components/ui/button";
// import { Card, CardContent } from "../../components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
// import { Carousel, CarouselContent, CarouselItem } from "../../components/ui/carousel";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbSeparator,
// } from "../../components/ui/breadcrumb";
// import { HeaderSection } from "../VESHomePage/sections/HeaderSection/HeaderSection";
// import { FooterSection } from "../VESHomePage/sections/FooterSection/FooterSection";
// import { CaseStudySection } from "../VESHomePage/sections/CaseStudySection/CaseStudySection";
// import { ProcessSection } from "../VESHomePage/sections/ProcessSection/ProcessSection";
// import { TestimonialSection } from "../VESHomePage/sections/TestimonialSection";
// // Using Tailwind for styling instead of shadcn/ui components


// // Custom hook for intersection observer
// const useInView = (threshold = 0.1, rootMargin = '0px') => {
//   const [isInView, setIsInView] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold, rootMargin }
//     );

//     const currentRef = ref.current;
//     if (currentRef) {
//       observer.observe(currentRef);
//     }

//     return () => {
//       if (currentRef) {
//         observer.unobserve(currentRef);
//       }
//     };
//   }, [threshold, rootMargin]);

//   return [ref, isInView];
// };

// // Scroll to top utility function
// const scrollToTop = (behavior = 'smooth') => {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: behavior
//   });
// };

// // Generic Service Page Template
// const ServicePageTemplate = ({
//   onBack,
//   title,
//   icon: IconComponent,
//   description,
//   services,
//   features,
//   heroImage,
//   gradientColors = "from-blue-600 to-blue-800"
// }) => {
//   const [pageRef, pageInView] = useInView(0.1);

//   // Scroll to top when this component mounts
//   useEffect(() => {
//     scrollToTop('instant'); // Use instant for immediate scroll
//   }, []);

//   return (
//     <main
//       ref={pageRef}
//       className={`bg-white flex flex-col items-center w-full min-h-screen transition-all duration-1000 ease-out ${pageInView
//         ? 'opacity-100 transform translate-y-0'
//         : 'opacity-0 transform translate-y-8'
//         }`}
//     >
//       <HeaderSection />

//       <section className={`w-full h-[400px] bg-[rgb(196,196,196)] flex flex-col items-center justify-center px-4 text-black`}>
//         <h1 className="text-5xl font-bold text-center mb-4">
//           {title}
//         </h1>
//         <Breadcrumb className="text-sm">
//           <BreadcrumbList>
//             <BreadcrumbItem>
//               <button
//                 onClick={onBack}
//                 className="text-black hover:text-gray-600 underline"
//               >
//                 Services
//               </button>
//             </BreadcrumbItem>
//             <BreadcrumbSeparator />
//             <BreadcrumbItem>
//               <span className="text-black">{title}</span>
//             </BreadcrumbItem>
//           </BreadcrumbList>
//         </Breadcrumb>
//       </section>

//       {/* Content Section */}
//       <section className="w-full py-16 bg-white">
//         <div className="container mx-auto px-4 max-w-6xl">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full">
//                 <IconComponent className="w-5 h-5 text-yellow-600" />
//                 <span className="font-medium text-yellow-800">Professional Service</span>
//               </div>

//               <h2 className="text-4xl font-bold text-gray-900">
//                 {description}
//               </h2>

//               <p className="text-lg text-gray-600 leading-relaxed">
//                 Our expert team provides comprehensive {title.toLowerCase()} services
//                 for both residential and commercial projects. We ensure quality,
//                 efficiency, and compliance with all industry standards.
//               </p>

//               <div className="space-y-4">
//                 <h3 className="text-xl font-semibold text-gray-900">Our Services Include:</h3>
//                 <ul className="space-y-2 text-gray-600">
//                   {services.map((service, index) => (
//                     <li key={index} className="flex items-center gap-2">
//                       <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
//                       {service}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="flex gap-4">
//                 <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
//                   Get Free Quote
//                 </Button>
//                 <Button
//                   variant="ghost"
//                   className="border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-lg transition-colors"
//                 >
//                   Call Now: (555) 123-4567
//                 </Button>
//               </div>
//             </div>

//             <div className="relative">
//               <img
//                 src={heroImage}
//                 alt={title}
//                 className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="w-full py-16 bg-gray-50">
//         <div className="container mx-auto px-4 max-w-6xl">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               Why Choose Our {title} Services?
//             </h2>
//             <p className="text-lg text-gray-600">
//               We deliver quality, safety, and reliability in every project
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//                 <div className="text-4xl mb-4">{feature.icon}</div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <FooterSection />
//     </main>
//   );
// };

// // Electrical Installation Page
// const ElectricalInstallationPage = ({ onBack }) => {
//   return (
//     <ServicePageTemplate
//       onBack={onBack}
//       title="Electrical Installation"
//       icon={Zap}
//       description="Safe & Efficient Electrical Wiring Solutions"
//       heroImage="./images/image-1.png"
//       services={[
//         "Complete home rewiring",
//         "New construction electrical installation",
//         "Panel upgrades and replacements",
//         "Commercial electrical systems",
//         "Emergency electrical repairs"
//       ]}
//       features={[
//         {
//           icon: "🔒",
//           title: "Safety First",
//           description: "All installations comply with current electrical codes and safety standards"
//         },
//         {
//           icon: "⚡",
//           title: "Expert Team",
//           description: "Licensed and experienced electricians with years of industry expertise"
//         },
//         {
//           icon: "🎯",
//           title: "Quality Guarantee",
//           description: "We stand behind our work with comprehensive warranties and support"
//         }
//       ]}
//     />
//   );
// };

// // Commercial & Industrial Services Page
// const CommercialIndustrialPage = ({ onBack }) => {
//   return (
//     <ServicePageTemplate
//       onBack={onBack}
//       title="Commercial & Industrial Services"
//       icon={Building2}
//       description="Complex Infrastructure & High-Load Solutions"
//       heroImage="./images/image-2.png"
//       gradientColors="from-gray-600 to-gray-800"
//       services={[
//         "Industrial electrical systems design",
//         "High-voltage installations",
//         "Motor control and automation",
//         "Commercial building electrical",
//         "Factory and warehouse electrical"
//       ]}
//       features={[
//         {
//           icon: "🏭",
//           title: "Industrial Expertise",
//           description: "Specialized knowledge in complex industrial electrical systems"
//         },
//         {
//           icon: "⚙️",
//           title: "High-Load Capability",
//           description: "Handling high-voltage and high-current electrical installations"
//         },
//         {
//           icon: "🔧",
//           title: "Custom Solutions",
//           description: "Tailored electrical solutions for unique industrial requirements"
//         }
//       ]}
//     />
//   );
// };

// // Power Distribution Page
// const PowerDistributionPage = ({ onBack }) => {
//   return (
//     <ServicePageTemplate
//       onBack={onBack}
//       title="Power Distribution"
//       icon={Power}
//       description="Reliable Power Distribution Systems"
//       heroImage="./images/image-3.png"
//       gradientColors="from-red-600 to-red-800"
//       services={[
//         "Distribution panel installation",
//         "Load balancing and optimization",
//         "Power monitoring systems",
//         "Backup power solutions",
//         "Grid-tie systems"
//       ]}
//       features={[
//         {
//           icon: "⚡",
//           title: "Uninterrupted Power",
//           description: "Ensuring continuous power supply for critical operations"
//         },
//         {
//           icon: "📊",
//           title: "Smart Monitoring",
//           description: "Advanced monitoring systems for optimal power management"
//         },
//         {
//           icon: "🔋",
//           title: "Backup Solutions",
//           description: "Reliable backup power systems for emergency situations"
//         }
//       ]}
//     />
//   );
// };

// // Lighting & Low Voltage Systems Page
// const LightingLowVoltagePage = ({ onBack }) => {
//   return (
//     <ServicePageTemplate
//       onBack={onBack}
//       title="Lighting & Low Voltage Systems"
//       icon={Lightbulb}
//       description="Intelligent Lighting & Low Voltage Solutions"
//       heroImage="./images/image-4.png"
//       gradientColors="from-yellow-600 to-orange-600"
//       services={[
//         "LED lighting installations",
//         "Smart lighting controls",
//         "Security system wiring",
//         "Data and communication networks",
//         "Audio/visual system installation"
//       ]}
//       features={[
//         {
//           icon: "💡",
//           title: "Energy Efficient",
//           description: "Modern LED solutions that reduce energy consumption"
//         },
//         {
//           icon: "📱",
//           title: "Smart Controls",
//           description: "Intelligent lighting systems with automated controls"
//         },
//         {
//           icon: "🔒",
//           title: "Integrated Security",
//           description: "Complete low-voltage security and communication systems"
//         }
//       ]}
//     />
//   );
// };

// // Project Services Page
// const ProjectServicesPage = ({ onBack }) => {
//   return (
//     <ServicePageTemplate
//       onBack={onBack}
//       title="Project Services"
//       icon={Wrench}
//       description="End-to-End Electrical Project Management"
//       heroImage="./images/image-5.png"
//       gradientColors="from-green-600 to-green-800"
//       services={[
//         "Project design and planning",
//         "Cost estimation and budgeting",
//         "Material procurement",
//         "Project execution and management",
//         "Quality assurance and testing"
//       ]}
//       features={[
//         {
//           icon: "📋",
//           title: "Complete Management",
//           description: "Full project lifecycle management from concept to completion"
//         },
//         {
//           icon: "💰",
//           title: "Cost Effective",
//           description: "Optimized solutions that deliver value within budget"
//         },
//         {
//           icon: "⏱️",
//           title: "On-Time Delivery",
//           description: "Proven track record of delivering projects on schedule"
//         }
//       ]}
//     />
//   );
// };

// // Energy Efficiency & Green Solutions Page
// const EnergyEfficiencyPage = ({ onBack }) => {
//   return (
//     <ServicePageTemplate
//       onBack={onBack}
//       title="Energy Efficiency & Green Solutions"
//       icon={Leaf}
//       description="Sustainable Energy Solutions for the Future"
//       heroImage="./images/image-6.png"
//       gradientColors="from-emerald-600 to-teal-600"
//       services={[
//         "Solar panel installations",
//         "Energy efficiency audits",
//         "LED retrofit projects",
//         "Power factor correction",
//         "Smart grid integration"
//       ]}
//       features={[
//         {
//           icon: "🌱",
//           title: "Eco-Friendly",
//           description: "Sustainable solutions that reduce environmental impact"
//         },
//         {
//           icon: "💚",
//           title: "Cost Savings",
//           description: "Long-term energy savings through efficient systems"
//         },
//         {
//           icon: "🔋",
//           title: "Renewable Energy",
//           description: "Integration of solar and other renewable energy sources"
//         }
//       ]}
//     />
//   );
// };

// // Service Page Header Section Component - Clean Version
// const HeroSection = ({ logoPath = "https://via.placeholder.com/120x120/ffffff/000000?text=LOGO" }) => (
//   <div className="text-black pt-16 pb-4 sm:pt-20 sm:pb-6 md:pt-24 md:pb-8 lg:pt-32 lg:pb-10 mt-16 sm:mt-0">
//     <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
//       <div className="text-center">
//         <h2 className="font-normal text-3xl sm:text-4xl lg:text-5xl text-[#070700] tracking-tight max-w-4xl mx-auto px-2 sm:px-4 animate-fade-in opacity-0 animation-delay-300">
//           Comprehensive Solutions Tailored to Your Business Needs.
//         </h2>
//       </div>
//     </div>
//     <style>{`
//             @keyframes fade-in {
//                 from {
//                     opacity: 0;
//                 }
//                 to {
//                     opacity: 1;
//                 }
//             }
            
//             .animate-fade-in {
//                 animation: fade-in 0.8s ease-out forwards;
//             }
            
//             .animation-delay-300 {
//                 animation-delay: 0.3s;
//             }
//         `}</style>
//   </div>
// );


// // Enhanced Services Section with staggered animations
// const ServicesSection = ({ onServiceClick }) => {
//   const [sectionRef, sectionInView] = useInView(0.1);
//   const [logoRef, logoInView] = useInView(0.3);
//   const [headerRef, headerInView] = useInView(0.3);
//   const [cardsRef, cardsInView] = useInView(0.1);

//   const serviceCards = [
//     {
//       id: 'electrical-installation',
//       title: "Electrical Installation",
//       description: "Safe and efficient electrical wiring from Residential to Commercial Projects.",
//       image: "./images/image-1.png",
//     },
//     {
//       id: 'commercial-industrial',
//       title: "Commercial & Industrial Services",
//       description: "Our services cater to complex infrastructure and high-load environments.",
//       image: "./images/image-2.png",
//     },
//     {
//       id: 'power-distribution',
//       title: "Power Distribution",
//       description: "Efficient power distribution is critical for uninterrupted operations and long-term safety.",
//       image: "./images/image-3.png",
//     },
//     {
//       id: 'lighting-low-voltage',
//       title: "Lighting & Low Voltage Systems",
//       description: "We deliver intelligent lighting solutions & low voltage systems that enhance safety & functionality",
//       image: "./images/image-4.png",
//     },
//     {
//       id: 'project-services',
//       title: "Project Services",
//       description: "We offer end-to-end electrical project services from design, estimation, procurement execution.",
//       image: "./images/image-5.png",
//     },
//     {
//       id: 'energy-efficiency',
//       title: "Energy Efficiency & Green Sol.",
//       description: "Our green solutions help businesses lower carbon footprints.",
//       image: "./images/image-6.png",
//     },
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className={`w-full py-12 md:py-16 lg:py-20 bg-[#f4f4f6] transition-all duration-1500 ease-out ${sectionInView
//         ? 'opacity-100 transform translate-y-0'
//         : 'opacity-0 transform translate-y-16'
//         }`}
//     >
//       <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
//         <div className="flex flex-col items-center gap-6 lg:gap-8">
//           <img
//             ref={logoRef}
//             src="/images/V logo.png"
//             alt="Logo"
//             className={`w-16 h-12 md:w-20 md:h-15 object-contain transition-all duration-1200 ease-out delay-300 ${logoInView
//               ? 'opacity-100 transform translate-y-0 rotate-0'
//               : 'opacity-0 transform translate-y-12 rotate-12'
//               }`}
//           />

//           <div
//             ref={headerRef}
//             className={`flex flex-col items-center gap-4 max-w-2xl text-center transition-all duration-1400 ease-out delay-500 ${headerInView
//               ? 'opacity-100 transform translate-y-0'
//               : 'opacity-0 transform translate-y-16'
//               }`}
//           >
//             <div className="inline-flex items-center gap-2">
//               <div className="font-medium text-[#070700] text-sm md:text-base tracking-wider">
//                 OUR SERVICES
//               </div>
//             </div>
//             <h2 className="font-normal text-3xl sm:text-4xl lg:text-5xl text-[#070700] tracking-tight whitespace-nowrap">
//               Electrical Solutions For Every Need
//             </h2>

//           </div>

//           <div
//             ref={cardsRef}
//             className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
//           >
//             {serviceCards.map((service, index) => (
//               <ServiceCard
//                 key={index}
//                 service={service}
//                 index={index}
//                 isVisible={cardsInView}
//                 onServiceClick={onServiceClick}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Individual Service Card Component with animation
// const ServiceCard = ({ service, index, isVisible, onServiceClick }) => {
//   const delay = index * 200;

//   const handleServiceClick = () => {
//     onServiceClick(service.id);
//   };

//   return (
//     <div
//       className={`flex flex-col sm:flex-row overflow-hidden border border-gray-200 rounded-xl lg:rounded-2xl bg-white transition-all duration-1000 ease-out hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1 ${isVisible
//         ? 'opacity-100 transform translate-y-0 scale-100'
//         : 'opacity-0 transform translate-y-20 scale-95'
//         }`}
//       style={{
//         transitionDelay: isVisible ? `${delay}ms` : '0ms',
//         transformOrigin: 'center bottom'
//       }}
//     >
//       <div className="relative w-full sm:w-1/3 lg:w-[260px] h-48 sm:h-auto overflow-hidden group bg-[#fedd00e6]">
//         <img
//           src={service.image}
//           alt={service.title}
//           className="w-full h-full object-contain transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//       </div>
//       <div className="flex flex-col w-full sm:w-2/3 lg:w-[364px] gap-4 sm:gap-6 p-4 sm:p-6">
//         <div className="flex flex-col gap-2">
//           <h3 className="font-normal text-lg sm:text-xl lg:text-[21px] text-[#070700] transition-colors duration-300 hover:text-yellow-600">
//             {service.title}
//           </h3>
//           <p className="font-normal text-sm text-[#07070099] transition-colors duration-300 hover:text-[#070700aa]">
//             {service.description}
//           </p>
//         </div>
//         <button
//           onClick={handleServiceClick}
//           className="group flex items-center justify-between gap-2 pl-4 pr-2 py-2 rounded-[32px] border border-[#080800] hover:shadow-lg hover:border-yellow-400 transition-all duration-300 hover:scale-105"
//         >
//           <span className="font-medium text-sm md:text-base text-[#080800] transition-colors duration-300 group-hover:text-yellow-600">
//             Service Detail
//           </span>
//           <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300">
//             <ArrowRightCircle className="w-5 h-5 text-black transition-transform duration-300 group-hover:scale-110" />
//           </div>
//         </button>
//       </div>
//     </div>
//   );
// };

// // Enhanced wrapper for other sections
// const AnimatedSection = ({ children, delay = 0 }) => {
//   const [ref, inView] = useInView(0.1);

//   return (
//     <div
//       ref={ref}
//       className={`transition-all duration-1000 ease-out ${inView
//         ? 'opacity-100 transform translate-y-0'
//         : 'opacity-0 transform translate-y-12'
//         }`}
//       style={{ transitionDelay: `${delay}ms` }}
//     >
//       {children}
//     </div>
//   );
// };

// // Main VES Service Page Component with complete routing
// export const VESServicePage = () => {
//   const [pageLoaded, setPageLoaded] = useState(false);
//   const [currentPage, setCurrentPage] = useState('services');

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setPageLoaded(true);
//     }, 100);

//     return () => clearTimeout(timer);
//   }, []);

//   const handleServiceClick = (serviceId) => {
//     setCurrentPage(serviceId);
//   };

//   const handleBackToServices = () => {
//     setCurrentPage('services');
//     // Scroll to top when returning to services
//     scrollToTop('smooth');
//   };

//   // Render the appropriate page based on current state
//   const renderCurrentPage = () => {
//     switch (currentPage) {
//       case 'electrical-installation':
//         return <ElectricalInstallationPage onBack={handleBackToServices} />;
//       case 'commercial-industrial':
//         return <CommercialIndustrialPage onBack={handleBackToServices} />;
//       case 'power-distribution':
//         return <PowerDistributionPage onBack={handleBackToServices} />;
//       case 'lighting-low-voltage':
//         return <LightingLowVoltagePage onBack={handleBackToServices} />;
//       case 'project-services':
//         return <ProjectServicesPage onBack={handleBackToServices} />;
//       case 'energy-efficiency':
//         return <EnergyEfficiencyPage onBack={handleBackToServices} />;
//       default:
//         return (
//           <div className="w-full">
//             <HeaderSection />
//             <HeroSection />
//             <ServicesSection onServiceClick={handleServiceClick} />
//             <AnimatedSection delay={200}>
//               {/* <ProcessSection /> */}
//               {/* </AnimatedSection>
//             <AnimatedSection delay={400}> */}
//               {/* <CaseStudySection /> */}
//               <TestimonialSection />
//             </AnimatedSection>
//             <FooterSection />
//           </div>
//         );
//     }
//   };

//   return (
//     <main
//       className={`bg-white flex flex-col items-center w-full transition-all duration-1000 ease-out ${pageLoaded
//         ? 'opacity-100'
//         : 'opacity-0'
//         }`}
//     >
//       {renderCurrentPage()}
//     </main>
//   );
// };

// export default VESServicePage;
import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRightCircle,
  Menu,
  X,
  Zap,
  Building2,
  Power,
  Lightbulb,
  Wrench,
  Leaf,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem } from "../../components/ui/carousel";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { HeaderSection } from "../VESHomePage/sections/HeaderSection/HeaderSection";
import { FooterSection } from "../VESHomePage/sections/FooterSection/FooterSection";
import { CaseStudySection } from "../VESHomePage/sections/CaseStudySection/CaseStudySection";
import { ProcessSection } from "../VESHomePage/sections/ProcessSection/ProcessSection";
import { TestimonialSection } from "../VESHomePage/sections/TestimonialSection";
// Using Tailwind for styling instead of shadcn/ui components


// Custom hook for intersection observer
const useInView = (threshold = 0.1, rootMargin = '0px') => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return [ref, isInView];
};

// Scroll to top utility function
const scrollToTop = (behavior = 'smooth') => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: behavior
  });
};

// Generic Service Page Template
const ServicePageTemplate = ({
  onBack,
  title,
  icon: IconComponent,
  description,
  services,
  features,
  heroImage,
  gradientColors = "from-blue-600 to-blue-800"
}) => {
  const [pageRef, pageInView] = useInView(0.1);

  // Scroll to top when this component mounts
  useEffect(() => {
    scrollToTop('instant'); // Use instant for immediate scroll
  }, []);

  return (
    <main
      ref={pageRef}
      className={`bg-white flex flex-col items-center w-full min-h-screen transition-all duration-1000 ease-out ${pageInView
        ? 'opacity-100 transform translate-y-0'
        : 'opacity-0 transform translate-y-8'
        }`}
    >
      <HeaderSection />

      <section className={`w-full h-[400px] bg-[rgb(196,196,196)] flex flex-col items-center justify-center px-4 text-black`}>
        <h1 className="text-5xl font-bold text-center mb-4">
          {title}
        </h1>
        <Breadcrumb className="text-sm">
          <BreadcrumbList>
            <BreadcrumbItem>
              <button
                onClick={onBack}
                className="text-black hover:text-gray-600 underline"
              >
                Services
              </button>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span className="text-black">{title}</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>

      {/* Content Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full">
                <IconComponent className="w-5 h-5 text-yellow-600" />
                <span className="font-medium text-yellow-800">Professional Service</span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900">
                {description}
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Our expert team provides comprehensive {title.toLowerCase()} services
                for both residential and commercial projects. We ensure quality,
                efficiency, and compliance with all industry standards.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Our Services Include:</h3>
                <ul className="space-y-2 text-gray-600">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                  Get Free Quote
                </Button>
                <Button
                  variant="ghost"
                  className="border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-lg transition-colors"
                >
                  Call Now: (555) 123-4567
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImage}
                alt={title}
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our {title} Services?
            </h2>
            <p className="text-lg text-gray-600">
              We deliver quality, safety, and reliability in every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

// Electrical Installation Page
const ElectricalInstallationPage = ({ onBack }) => {
  return (
    <ServicePageTemplate
      onBack={onBack}
      title="Electrical Installation"
      icon={Zap}
      description="Safe & Efficient Electrical Wiring Solutions"
      heroImage="./images/image-1.png"
      services={[
        "Complete home rewiring",
        "New construction electrical installation",
        "Panel upgrades and replacements",
        "Commercial electrical systems",
        "Emergency electrical repairs"
      ]}
      features={[
        {
          icon: "🔒",
          title: "Safety First",
          description: "All installations comply with current electrical codes and safety standards"
        },
        {
          icon: "⚡",
          title: "Expert Team",
          description: "Licensed and experienced electricians with years of industry expertise"
        },
        {
          icon: "🎯",
          title: "Quality Guarantee",
          description: "We stand behind our work with comprehensive warranties and support"
        }
      ]}
    />
  );
};

// Commercial & Industrial Services Page
const CommercialIndustrialPage = ({ onBack }) => {
  return (
    <ServicePageTemplate
      onBack={onBack}
      title="Commercial & Industrial Services"
      icon={Building2}
      description="Complex Infrastructure & High-Load Solutions"
      heroImage="./images/image-2.png"
      gradientColors="from-gray-600 to-gray-800"
      services={[
        "Industrial electrical systems design",
        "High-voltage installations",
        "Motor control and automation",
        "Commercial building electrical",
        "Factory and warehouse electrical"
      ]}
      features={[
        {
          icon: "🏭",
          title: "Industrial Expertise",
          description: "Specialized knowledge in complex industrial electrical systems"
        },
        {
          icon: "⚙️",
          title: "High-Load Capability",
          description: "Handling high-voltage and high-current electrical installations"
        },
        {
          icon: "🔧",
          title: "Custom Solutions",
          description: "Tailored electrical solutions for unique industrial requirements"
        }
      ]}
    />
  );
};

// Power Distribution Page
const PowerDistributionPage = ({ onBack }) => {
  return (
    <ServicePageTemplate
      onBack={onBack}
      title="Power Distribution"
      icon={Power}
      description="Reliable Power Distribution Systems"
      heroImage="./images/image-3.png"
      gradientColors="from-red-600 to-red-800"
      services={[
        "Distribution panel installation",
        "Load balancing and optimization",
        "Power monitoring systems",
        "Backup power solutions",
        "Grid-tie systems"
      ]}
      features={[
        {
          icon: "⚡",
          title: "Uninterrupted Power",
          description: "Ensuring continuous power supply for critical operations"
        },
        {
          icon: "📊",
          title: "Smart Monitoring",
          description: "Advanced monitoring systems for optimal power management"
        },
        {
          icon: "🔋",
          title: "Backup Solutions",
          description: "Reliable backup power systems for emergency situations"
        }
      ]}
    />
  );
};

// Lighting & Low Voltage Systems Page
const LightingLowVoltagePage = ({ onBack }) => {
  return (
    <ServicePageTemplate
      onBack={onBack}
      title="Lighting & Low Voltage Systems"
      icon={Lightbulb}
      description="Intelligent Lighting & Low Voltage Solutions"
      heroImage="./images/image-4.png"
      gradientColors="from-yellow-600 to-orange-600"
      services={[
        "LED lighting installations",
        "Smart lighting controls",
        "Security system wiring",
        "Data and communication networks",
        "Audio/visual system installation"
      ]}
      features={[
        {
          icon: "💡",
          title: "Energy Efficient",
          description: "Modern LED solutions that reduce energy consumption"
        },
        {
          icon: "📱",
          title: "Smart Controls",
          description: "Intelligent lighting systems with automated controls"
        },
        {
          icon: "🔒",
          title: "Integrated Security",
          description: "Complete low-voltage security and communication systems"
        }
      ]}
    />
  );
};

// Project Services Page
const ProjectServicesPage = ({ onBack }) => {
  return (
    <ServicePageTemplate
      onBack={onBack}
      title="Project Services"
      icon={Wrench}
      description="End-to-End Electrical Project Management"
      heroImage="./images/image-5.png"
      gradientColors="from-green-600 to-green-800"
      services={[
        "Project design and planning",
        "Cost estimation and budgeting",
        "Material procurement",
        "Project execution and management",
        "Quality assurance and testing"
      ]}
      features={[
        {
          icon: "📋",
          title: "Complete Management",
          description: "Full project lifecycle management from concept to completion"
        },
        {
          icon: "💰",
          title: "Cost Effective",
          description: "Optimized solutions that deliver value within budget"
        },
        {
          icon: "⏱️",
          title: "On-Time Delivery",
          description: "Proven track record of delivering projects on schedule"
        }
      ]}
    />
  );
};

// Energy Efficiency & Green Solutions Page
const EnergyEfficiencyPage = ({ onBack }) => {
  return (
    <ServicePageTemplate
      onBack={onBack}
      title="Energy Efficiency & Green Solutions"
      icon={Leaf}
      description="Sustainable Energy Solutions for the Future"
      heroImage="./images/image-6.png"
      gradientColors="from-emerald-600 to-teal-600"
      services={[
        "Solar panel installations",
        "Energy efficiency audits",
        "LED retrofit projects",
        "Power factor correction",
        "Smart grid integration"
      ]}
      features={[
        {
          icon: "🌱",
          title: "Eco-Friendly",
          description: "Sustainable solutions that reduce environmental impact"
        },
        {
          icon: "💚",
          title: "Cost Savings",
          description: "Long-term energy savings through efficient systems"
        },
        {
          icon: "🔋",
          title: "Renewable Energy",
          description: "Integration of solar and other renewable energy sources"
        }
      ]}
    />
  );
};


// Service Page Header Section Component - Clean Version
const HeroSection = ({ logoPath = "https://via.placeholder.com/120x120/ffffff/000000?text=LOGO" }) => (
  <div className="text-black pt-16 pb-4 sm:pt-20 sm:pb-6 md:pt-24 md:pb-8 lg:pt-32 lg:pb-10 mt-16 sm:mt-0">
    <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
      <div className="text-center">
        <h2 className="font-normal text-3xl sm:text-4xl lg:text-5xl text-[#070700] tracking-tight max-w-4xl mx-auto px-2 sm:px-4 animate-fade-in opacity-0 animation-delay-300">
          Comprehensive Solutions Tailored to Your Business Needs.
        </h2>
      </div>
    </div>
    <style>{`
            @keyframes fade-in {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
            
            .animate-fade-in {
                animation: fade-in 0.8s ease-out forwards;
            }
            
            .animation-delay-300 {
                animation-delay: 0.3s;
            }
        `}</style>
  </div>
);


// Enhanced Services Section with Mobile Optimization
const ServicesSection = ({ onServiceClick }) => {
  const [sectionRef, sectionInView] = useInView(0.1);
  const [logoRef, logoInView] = useInView(0.3);
  const [headerRef, headerInView] = useInView(0.3);
  const [cardsRef, cardsInView] = useInView(0.1);

  const serviceCards = [
    {
      id: 'electrical-installation',
      title: "Electrical Installation",
      description: "Safe and efficient electrical wiring from Residential to Commercial Projects.",
      image: "./images/image-1.png",
    },
    {
      id: 'commercial-industrial',
      title: "Commercial & Industrial Services",
      description: "Our services cater to complex infrastructure and high-load environments.",
      image: "./images/image-2.png",
    },
    {
      id: 'power-distribution',
      title: "Power Distribution",
      description: "Efficient power distribution is critical for uninterrupted operations and long-term safety.",
      image: "./images/image-3.png",
    },
    {
      id: 'lighting-low-voltage',
      title: "Lighting & Low Voltage Systems",
      description: "We deliver intelligent lighting solutions & low voltage systems that enhance safety & functionality",
      image: "./images/image-4.png",
    },
    {
      id: 'project-services',
      title: "Project Services",
      description: "We offer end-to-end electrical project services from design, estimation, procurement execution.",
      image: "./images/image-5.png",
    },
    {
      id: 'energy-efficiency',
      title: "Energy Efficiency & Green Sol.",
      description: "Our green solutions help businesses lower carbon footprints.",
      image: "./images/image-6.png",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-[#f4f4f6] transition-all duration-1500 ease-out ${
        sectionInView
          ? 'opacity-100 transform translate-y-0'
          : 'opacity-0 transform translate-y-16'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-8">
          <img
            ref={logoRef}
            src="/images/V logo.png"
            alt="Logo"
            className={`w-12 h-9 sm:w-16 sm:h-12 md:w-20 md:h-15 object-contain transition-all duration-1200 ease-out delay-300 ${
              logoInView
                ? 'opacity-100 transform translate-y-0 rotate-0'
                : 'opacity-0 transform translate-y-12 rotate-12'
            }`}
          />

          <div
            ref={headerRef}
            className={`flex flex-col items-center gap-3 sm:gap-4 max-w-6xl text-center px-2 transition-all duration-1400 ease-out delay-500 ${
              headerInView
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-16'
            }`}
          >
            <div className="inline-flex items-center gap-2">
              <div className="font-medium text-[#070700] text-xs sm:text-sm md:text-base tracking-wider">
                OUR SERVICES
              </div>
            </div>
            <h2 className="font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#070700] tracking-tight leading-tight">
              <span className="block sm:inline">Electrical Solutions</span>{' '}
              <span className="block sm:inline">For Every Need</span>
            </h2>
          </div>

          <div
            ref={cardsRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 w-full"
          >
            {serviceCards.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index}
                isVisible={cardsInView}
                onServiceClick={onServiceClick}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Mobile-Optimized Service Card Component
const ServiceCard = ({ service, index, isVisible, onServiceClick }) => {
  const delay = index * 150; // Reduced delay for mobile

  const handleServiceClick = () => {
    onServiceClick(service.id);
  };

  return (
    <div
      className={`flex flex-col overflow-hidden border border-gray-200 rounded-lg sm:rounded-xl lg:rounded-2xl bg-white transition-all duration-1000 ease-out hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] ${
        isVisible
          ? 'opacity-100 transform translate-y-0 scale-100'
          : 'opacity-0 transform translate-y-20 scale-95'
      }`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
        transformOrigin: 'center bottom'
      }}
    >
      {/* Image Section - Full width on mobile */}
      <div className="relative w-full h-40 sm:h-48 overflow-hidden group bg-[#fedd00e6]">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-contain transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Content Section */}
      <div className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-6">
        <div className="flex flex-col gap-2">
          <h3 className="font-normal text-lg sm:text-xl lg:text-[21px] text-[#070700] transition-colors duration-300 hover:text-yellow-600 leading-tight">
            {service.title}
          </h3>
          <p className="font-normal text-sm sm:text-base text-[#07070099] transition-colors duration-300 hover:text-[#070700aa] leading-relaxed">
            {service.description}
          </p>
        </div>
        
        {/* Button with better mobile touch target */}
        <button
          onClick={handleServiceClick}
          className="group flex items-center justify-between gap-2 pl-4 pr-2 py-3 sm:py-2 rounded-[32px] border border-[#080800] hover:shadow-lg hover:border-yellow-400 active:bg-yellow-50 transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation min-h-[44px] sm:min-h-auto"
        >
          <span className="font-medium text-sm md:text-base text-[#080800] transition-colors duration-300 group-hover:text-yellow-600">
            Service Detail
          </span>
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0">
            <ArrowRightCircle className="w-5 h-5 text-black transition-transform duration-300 group-hover:scale-110" />
          </div>
        </button>
      </div>
    </div>
  );
};

// Enhanced wrapper for other sections
const AnimatedSection = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${inView
        ? 'opacity-100 transform translate-y-0'
        : 'opacity-0 transform translate-y-12'
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Main VES Service Page Component with complete routing
export const VESServicePage = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState('services');

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleServiceClick = (serviceId) => {
    setCurrentPage(serviceId);
  };

  const handleBackToServices = () => {
    setCurrentPage('services');
    // Scroll to top when returning to services
    scrollToTop('smooth');
  };

  // Render the appropriate page based on current state
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'electrical-installation':
        return <ElectricalInstallationPage onBack={handleBackToServices} />;
      case 'commercial-industrial':
        return <CommercialIndustrialPage onBack={handleBackToServices} />;
      case 'power-distribution':
        return <PowerDistributionPage onBack={handleBackToServices} />;
      case 'lighting-low-voltage':
        return <LightingLowVoltagePage onBack={handleBackToServices} />;
      case 'project-services':
        return <ProjectServicesPage onBack={handleBackToServices} />;
      case 'energy-efficiency':
        return <EnergyEfficiencyPage onBack={handleBackToServices} />;
      default:
        return (
          <div className="w-full">
            <HeaderSection />
            <HeroSection />
            <ServicesSection onServiceClick={handleServiceClick} />
            <AnimatedSection delay={200}>
              {/* <ProcessSection /> */}
              {/* </AnimatedSection>
            <AnimatedSection delay={400}> */}
              {/* <CaseStudySection /> */}
              <TestimonialSection />
            </AnimatedSection>
            <FooterSection />
          </div>
        );
    }
  };

  return (
    <main
      className={`bg-white flex flex-col items-center w-full transition-all duration-1000 ease-out ${pageLoaded
        ? 'opacity-100'
        : 'opacity-0'
        }`}
    >
      {renderCurrentPage()}
    </main>
  );
};

export default VESServicePage;
