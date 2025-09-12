import React, { useState } from "react";

const Avatar = ({ children, className }) => (
  <div className={`rounded-full overflow-hidden ${className}`}>
    {children}
  </div>
);

const AvatarImage = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-full h-full object-cover" />
);

const AvatarFallback = ({ children }) => (
  <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
    {children}
  </div>
);

const Button = ({ children, variant, className, ...props }) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-300";
  const variantClasses =
    variant === "outline"
      ? "border border-solid bg-transparent"
      : "bg-blue-500 text-white";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className }) => (
  <div className={`rounded-lg ${className}`}>{children}</div>
);

const CardContent = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export const CaseStudySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "GreenTech Solar Installation",
      description:
        "Installed a high-efficiency solar power system for an eco-friendly office, optimizing energy usage and reducing significantly.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      client: {
        name: "Rachel Thompson",
        role: "CEO, TeamTalk",
        avatar:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
        fallback: "RT",
      },
    },
    {
      id: 2,
      title: "Smart Home Automation",
      description:
        "Complete electrical overhaul with smart home integration, featuring automated lighting, climate control, and security systems for modern living.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      client: {
        name: "Michael Chen",
        role: "Property Developer",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
        fallback: "MC",
      },
    },
    {
      id: 3,
      title: "Industrial Power Upgrade",
      description:
        "Upgraded electrical infrastructure for a manufacturing facility, improving power efficiency by 40% and ensuring compliance with safety standards.",
      image:
        "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      client: {
        name: "Sarah Wilson",
        role: "Operations Manager, TechCorp",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
        fallback: "SW",
      },
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // consistent yellow color requested
  const yellow = "#fedd00e6";

  return (
    <section className="relative w-full py-12 md:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="container max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-8 md:gap-12 lg:gap-16">
          {/* Section Header */}
          <div className="flex flex-col items-center justify-center w-full animate-in slide-in-from-top-4 duration-700 ease-out gap-6">
            {/* Section Label */}
            <div className="inline-flex items-center gap-3 animate-in slide-in-from-top-2 duration-700 ease-out delay-100">
              {/* Lightning Icon */}
              <img
                className="w-[60px] h-[70px] sm:w-[80px] sm:h-[95px] lg:w-[99px] lg:h-[117px] object-contain"
                alt="Lightning icon"
                src="/images/2676-080625-vora-hp-png-02-2.png"
              />
              <span className="font-semibold text-xl sm:text-2xl lg:text-3xl tracking-[1.5px] leading-[26px] sm:leading-[30px] lg:leading-[36px]">
                OUR PROJECTS
              </span>
            </div>

            {/* Title */}
            <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.44px] leading-tight lg:leading-[57.6px] font-['Inter',Helvetica] text-center transition-all duration-300">
              Powering the Future with Reliable Projects
            </h2>
          </div>

          {/* Carousel Container */}
          <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-12 w-full animate-in slide-in-from-bottom-8 duration-700 ease-out delay-200">
            <div className="relative w-full overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {caseStudies.map((study) => (
                  <div key={study.id} className="w-full flex-shrink-0">
                    <Card className="flex flex-col lg:flex-row items-center p-4 sm:p-6 md:p-8 lg:p-12 w-full bg-[#c7c7cd99] rounded-xl lg:rounded-2xl overflow-hidden border border-solid border-[#0707001a] shadow-none hover:shadow-lg transition-all duration-500 hover:bg-[#c7c7cdb3] group">
                      <CardContent className="p-0 flex flex-col lg:flex-row items-center w-full gap-6 md:gap-8 lg:gap-16">
                        {/* Project Image */}
                        <div className="relative w-full max-w-[400px] lg:w-[540px] h-[250px] sm:h-[300px] lg:h-[400px] overflow-hidden rounded-lg group-hover:scale-[1.02] transition-transform duration-500">
                          <img
                            className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                            alt={study.title}
                            src={study.image}
                          />
                        </div>

                        {/* Project Details */}
                        <div className="flex flex-col justify-between h-auto lg:h-[400px] flex-1 w-full gap-6 lg:gap-4">
                          <div className="flex flex-col items-start gap-3 md:gap-4 text-center lg:text-left">
                            <h3 className="font-semibold text-xl sm:text-2xl lg:text-[32px] text-black tracking-[-0.6px] lg:tracking-[-0.96px] leading-tight lg:leading-[38.4px] font-['Inter',Helvetica] transition-colors duration-300 group-hover:text-gray-800">
                              {study.title}
                            </h3>
                            <p className="font-semibold text-[#00000099] text-sm sm:text-base leading-5 sm:leading-6 font-['Inter',Helvetica] transition-colors duration-300 group-hover:text-[#000000b3]">
                              {study.description}
                            </p>
                          </div>

                          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 sm:gap-2">
                            <div className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1">
                              <Avatar className="w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-300 hover:scale-110">
                                <AvatarImage
                                  src={study.client.avatar}
                                  alt={study.client.name}
                                />
                                <AvatarFallback>{study.client.fallback}</AvatarFallback>
                              </Avatar>
                              <div className="flex flex-col gap-0.5">
                                <span className="font-semibold text-black text-sm sm:text-base tracking-[-0.28px] sm:tracking-[-0.32px] leading-tight sm:leading-[17.6px] font-['Inter',Helvetica] transition-colors duration-300 group-hover:text-gray-800">
                                  {study.client.name}
                                </span>
                                <span className="font-normal text-[#00000099] text-xs sm:text-sm leading-[18px] sm:leading-[21px] font-['Inter',Helvetica] transition-colors duration-300 group-hover:text-[#000000b3]">
                                  {study.client.role}
                                </span>
                              </div>
                            </div>

                            <Button
                              variant="outline"
                              className="h-10 sm:h-12 px-4 sm:px-[18px] py-2 rounded-[24px] sm:rounded-[32px] border border-solid border-[#575757] font-medium text-black text-sm sm:text-base tracking-[-0.28px] sm:tracking-[-0.32px] transition-all duration-300 hover:bg-black hover:text-white hover:border-black hover:scale-105 active:scale-95"
                            >
                              Read More
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation */}
            <div className="flex items-center justify-center gap-1 animate-in fade-in duration-700 delay-500">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="p-2 transition-transform duration-300 hover:scale-110 cursor-pointer"
                aria-label="Previous slide"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dot Indicators */}
              <div className="flex items-center gap-1 mx-2">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8" : "w-2 hover:bg-gray-600"}`}
                    aria-label={`Go to slide ${index + 1}`}
                    style={{ backgroundColor: index === currentSlide ? yellow : undefined }}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="p-2 transition-transform duration-300 hover:scale-110 cursor-pointer"
                aria-label="Next slide"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>



    </section>
  );
};