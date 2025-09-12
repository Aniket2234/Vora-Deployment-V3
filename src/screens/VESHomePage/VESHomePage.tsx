import React, { lazy, Suspense } from "react";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";

// Lazy load all sections except header and hero (which should load immediately)
const AboutSectionHome = lazy(() => import("./sections/AboutSectionHome/AboutSectionHome"));
const ServicesSection = lazy(() => import("./sections/ServicesSection").then(module => ({ default: module.ServicesSection })));
const WhyUsSection = lazy(() => import("./sections/WhyUsSection").then(module => ({ default: module.WhyUsSection })));
const ProcessSection = lazy(() => import("./sections/ProcessSection").then(module => ({ default: module.ProcessSection })));
const CaseStudySection = lazy(() => import("./sections/CaseStudySection").then(module => ({ default: module.CaseStudySection })));
const TestimonialSection = lazy(() => import("./sections/TestimonialSection").then(module => ({ default: module.TestimonialSection })));
const ContactSection = lazy(() => import("./sections/ContactSection").then(module => ({ default: module.ContactSection })));
const FooterSection = lazy(() => import("./sections/FooterSection").then(module => ({ default: module.FooterSection })));

// Loading skeleton component for better UX - Mobile optimized
const SectionSkeleton: React.FC<{ height?: string }> = ({ height = "h-64 md:h-96" }) => (
  <div className={`w-full ${height} bg-gray-100 animate-pulse flex items-center justify-center px-4`}>
    <div className="text-gray-400 text-sm md:text-base">Loading...</div>
  </div>
);

// Intersection Observer hook for viewport detection - Mobile optimized
const LazySection: React.FC<{ 
  children: React.ReactNode; 
  fallback?: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
}> = ({ 
  children, 
  fallback = <SectionSkeleton />,
  threshold = 0.1,
  rootMargin = "50px 0px" // Start loading 50px before section enters viewport
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  // Detect mobile device
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        threshold: isMobile ? 0.05 : threshold, // Lower threshold for mobile
        rootMargin: isMobile ? "100px 0px" : rootMargin // Larger margin for mobile
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, isMobile]);

  return (
    <div ref={ref} className="w-full">
      {isVisible ? (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
};

export const VESHomePage = (): JSX.Element => {
  return (
    <div className="relative w-full bg-white overflow-x-hidden">
      {/* Load header and hero immediately */}
      <HeaderSection />
      <HeroSection />

      {/* Lazy load sections when they come into view - Mobile optimized */}
      <LazySection fallback={<SectionSkeleton height="h-48 sm:h-64 md:h-96" />}>
        <AboutSectionHome />
      </LazySection>

      <LazySection fallback={<SectionSkeleton height="h-56 sm:h-72 md:h-96" />}>
        <ServicesSection />
      </LazySection>

      <LazySection fallback={<SectionSkeleton height="h-48 sm:h-64 md:h-80" />}>
        <WhyUsSection />
      </LazySection>

      {/* <LazySection fallback={<SectionSkeleton height="h-56 sm:h-72 md:h-96" />}>
        <ProcessSection />
      </LazySection>

      <LazySection fallback={<SectionSkeleton height="h-64 sm:h-80 md:h-96" />}>
        <CaseStudySection />
      </LazySection> */}

      <LazySection fallback={<SectionSkeleton height="h-48 sm:h-64 md:h-80" />}>
        <TestimonialSection />
      </LazySection>

      <LazySection fallback={<SectionSkeleton height="h-56 sm:h-72 md:h-96" />}>
        <ContactSection />
      </LazySection>

      <LazySection fallback={<SectionSkeleton height="h-32 sm:h-40 md:h-48" />}>
        <FooterSection />
      </LazySection>
    </div>
  );
};