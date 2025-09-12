import React from "react";
import { Card } from "../../../../components/ui/card";

export const ProcessSection = (): JSX.Element => {
  const processSteps = [
    {
      number: "01",
      title: "Consultation & Assessment",
    },
    {
      number: "02",
      title: "Planning & Installation",
    },
    {
      number: "03",
      title: "Testing & Maintenance",
    },
    {
      number: "04",
      title: "Consultation & Assessment",
    },
    {
      number: "05",
      title: "Planning & Installation",
    },
    {
      number: "06",
      title: "Testing & Maintenance",
    },
  ];

  return (
    <section className="w-full py-16 pb-32 bg-[#f4f5f6] overflow-hidden lg:py-16 lg:pb-32">
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center gap-16 max-w-[1280px] mx-auto">
          {/* Header Section */}
          <div className="flex flex-col items-center justify-center gap-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
            <div className="flex items-center gap-3 transform translate-y-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards]">
              <img
                className="w-[60px] h-[70px] sm:w-[80px] sm:h-[95px] lg:w-[99px] lg:h-[117px] object-contain"
                alt="Lightning icon"
                src="/images/2676-080625-vora-hp-png-02-2.png"
              />
              <div className="font-semibold text-xl sm:text-2xl lg:text-3xl tracking-[1.5px] leading-[26px] sm:leading-[30px] lg:leading-[36px]">
                OUR PROCESS
              </div>
            </div>

            <h2 className="w-full max-w-[844px] font-semibold text-[#070700] text-3xl sm:text-4xl lg:text-5xl text-center tracking-[-1.44px] leading-[36px] sm:leading-[48px] lg:leading-[57.6px] transform translate-y-4 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
              Our Efficient Steps For Quality Service
            </h2>
          </div>

          {/* Image Container with Process Card overlay */}
          <div className="w-full relative rounded-2xl overflow-hidden transform translate-y-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.8s_forwards]">
            <img
              className="w-full h-[600px] object-cover rounded-2xl transition-transform duration-700 hover:scale-[1.02]"
              alt="Service professionals working together"
              src="/images/pexels-silverkblack-23496705-1.png"
            />

            {/* Process Card placed at bottom center of image */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1100px] px-4 pb-6">
              <Card className="w-full p-6 sm:p-8 bg-white rounded-2xl shadow-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {processSteps.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 sm:p-6 bg-white rounded-lg border border-solid border-[#0707001a] transition-all duration-300 hover:shadow-md hover:-translate-y-1 group transform translate-y-6 opacity-0"
                      style={{
                        animation: `fadeInUp 0.6s ease-out ${1.2 + index * 0.15}s forwards`,
                      }}
                    >
                      <div className="flex w-10 h-10 sm:w-12 sm:h-12 items-center justify-center rounded-full bg-[#fedd00] transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 flex-shrink-0">
                        <div className="font-bold text-[#070700] text-base sm:text-lg tracking-[-0.54px] leading-[21.6px]">
                          {step.number}
                        </div>
                      </div>

                      <div className="font-semibold text-[#070700] text-base sm:text-[18px] tracking-[-0.63px] leading-[25.2px] transition-colors duration-300 group-hover:text-[#fedd00]">
                        {step.title}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Background Decorative Element */}
        <div className="absolute w-[248px] h-[348px] top-0 right-0 bg-[#ffc700] rounded-[124px/174px] blur-[150px] opacity-50 animate-pulse lg:w-[248px] lg:h-[348px] lg:rounded-[124px/174px] lg:blur-[150px] lg:opacity-50" />
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};
