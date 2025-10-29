import React, { useEffect, useRef, useState } from "react";

export const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "70+", label: "Projects" },
    { value: "17+", label: "Years of Experience" },
    { value: "1000+", label: "Clients" }
  ];

  return (
    <section 
      ref={sectionRef}
      className="w-full py-16 overflow-hidden"
      style={{ backgroundColor: "rgba(254, 221, 0, 0.9)" }}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-700 ease-out ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-base sm:text-lg lg:text-xl text-gray-800 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
