import React from "react";

export const ServicesSection = () => {
  const services = [
    { name: "Electrical Installation", icon: "./images/image-1.png" },
    { name: "Commercial & Industrial Services", icon: "./images/image-2.png" },
    { name: "Power Distribution", icon: "./images/image-3.png" },
    { name: "Lighting & Low Voltage Systems", icon: "./images/image-4.png" },
    { name: "Project Services", icon: "./images/image-5.png" },
    { name: "Energy Efficiency & Green Sol.", icon: "./images/image-6.png" }
  ];

  return (
    <section className="w-full py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-1">
              <img
                className="w-[60px] h-[70px] sm:w-[80px] sm:h-[95px] lg:w-[99px] lg:h-[117px] object-contain"
                alt="Lightning icon"
                src="/images/2676-080625-vora-hp-png-02-2.png"
              />
              <div className="font-bold text-[#070700] text-xl sm:text-2xl lg:text-3xl tracking-[1.5px] sm:tracking-[2px] leading-[24px] sm:leading-[28px] lg:leading-[32px] uppercase -ml-2 sm:-ml-4">
                OUR SERVICES
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight max-w-2xl">
              Comprehensive Solutions Tailored to Your Business Needs.
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-4 sm:gap-6 p-6 sm:p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-default"
              >
                {/* Circular Icon with new background */}
                <div
                  className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "#fedd00e6" }}
                >
                  <img
                    src={`/${service.icon}`}
                    alt={service.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
                  />
                </div>

                {/* Service name (no hover effect) */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 leading-tight">
                  {service.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};