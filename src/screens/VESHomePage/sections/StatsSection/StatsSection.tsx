import { useEffect, useRef, useState } from "react";

const CountUpAnimation = ({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, hasAnimated]);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  return <>{count}{suffix}</>;
};

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
    { value: 70, suffix: "+", label: "Projects" },
    { value: 17, suffix: "+", label: "Years of Experience" },
    { value: 1000, suffix: "+", label: "Clients" }
  ];

  return (
    <section 
      ref={sectionRef}
      className="w-full py-12 sm:py-16 overflow-hidden"
    >
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div 
          className="rounded-3xl shadow-lg p-8 sm:p-12 md:p-16"
          style={{ backgroundColor: "rgba(254, 221, 0, 0.9)" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                  {isVisible ? (
                    <CountUpAnimation end={stat.value} suffix={stat.suffix} duration={2000} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <div className="text-base sm:text-lg lg:text-xl text-gray-800 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
