import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const WhyUsSection = (): JSX.Element => {
  const features = [
    {
      title: "6 Decades of Experience",
      description:
        "Years of hands-on expertise in handling diverse electrical projects with precision and reliability.",
    },
    {
      title: "Advanced Technology",
      description:
        "We use the latest tools and techniques to deliver modern, energy-efficient electrical solutions good.",
    },
    {
      title: "Affordable Pricing",
      description:
        "Get high-quality electrical services at competitive rates without compromising on safety or efficiency.",
    },
    {
      title: "Satisfaction Guaranteed",
      description:
        "We prioritize customer satisfaction with timely service, attention to detail, and long-lasting solutions.",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-32 flex justify-center overflow-hidden">
  <div className="container flex flex-col lg:flex-row items-center gap-12 lg:gap-20 px-6 lg:px-10">
    {/* Image Section */}
    <div className="flex-1 w-full flex justify-center transform translate-x-[-50px] opacity-0 animate-[slideInLeft_1s_ease-out_0.2s_forwards]">
      <Card className="rounded-2xl overflow-hidden border-0 transition-transform duration-700 hover:scale-[1.02] group max-w-[500px]">
        <CardContent className="p-0">
          <img
            className="w-full h-auto object-cover transition-all duration-700 group-hover:brightness-110"
            alt="Electrical professionals team"
            src="/images/why.jpg"
          />
        </CardContent>
      </Card>
    </div>

    {/* Content Section */}
    <div className="flex-1 flex flex-col gap-8 lg:gap-14 w-full px-2">
      {/* Header */}
      <div className="flex flex-col gap-6 transform translate-x-[50px] opacity-0 animate-[slideInRight_1s_ease-out_0.4s_forwards]">
        <div className="flex items-center gap-3 transform translate-y-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.6s_forwards]">
          {/* Lightning Icon */}
          <img
            className="w-[60px] h-[70px] sm:w-[80px] sm:h-[95px] lg:w-[99px] lg:h-[117px] object-contain"
            alt="Lightning icon"
            src="/images/2676-080625-vora-hp-png-02-2.png"
          />
          {/* WHY CHOOSE US */}
          <span className="font-semibold text-xl sm:text-2xl lg:text-3xl tracking-[1.5px] leading-[26px] sm:leading-[30px] lg:leading-[36px]">
            WHY CHOOSE US
          </span>
        </div>

        <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-[-1px] sm:tracking-[-1.2px] lg:tracking-[-1.44px] leading-[36px] sm:leading-[48px] lg:leading-[57.6px] transform translate-y-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]">
          Powering Projects with Integrity, Legacy & Innovation
        </h2>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 group cursor-default transform translate-y-8 opacity-0"
            style={{
              animation: `fadeInUp 0.6s ease-out ${1.0 + index * 0.15}s forwards`,
            }}
          >
            <div className="flex items-center gap-3">
              <img
                className="w-8 h-8"
                alt="Number"
                src="/images/number.svg"
              />
              <h3
                className="font-semibold text-lg sm:text-xl lg:text-[21px] tracking-[-0.5px] sm:tracking-[-0.6px] lg:tracking-[-0.63px] leading-[22px] sm:leading-[24px] lg:leading-[25.2px]"
                style={{ color: "#070700" }}
              >
                {feature.title}
              </h3>
            </div>
            <p className="text-sm text-[#07070099] leading-[21px] pl-11">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
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

    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `}</style>
</section>

  );
};
