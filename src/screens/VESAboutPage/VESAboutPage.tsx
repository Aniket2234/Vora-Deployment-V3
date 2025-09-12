import React, { useState, lazy, Suspense } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Zap, Users, Award, Star, TrendingUp } from 'lucide-react';

// Import header and footer
import { HeaderSection } from "../VESHomePage/sections/HeaderSection/HeaderSection";
const FooterSection = lazy(() => import("../VESHomePage/sections/FooterSection/FooterSection").then(module => ({ default: module.FooterSection })));

// Loading skeleton component for better UX - Mobile optimized
const SectionSkeleton = ({ height = "h-64 md:h-96" }) => (
    <div className={`w-full ${height} bg-gray-100 animate-pulse flex items-center justify-center px-4`}>
        <div className="text-gray-400 text-sm md:text-base">Loading...</div>
    </div>
);

// Intersection Observer hook for viewport detection - Mobile optimized
const LazySection = ({
    children,
    fallback = <SectionSkeleton />,
    threshold = 0.1,
    rootMargin = "50px 0px"
}) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);
    const ref = React.useRef(null);

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
                threshold: isMobile ? 0.05 : threshold,
                rootMargin: isMobile ? "100px 0px" : rootMargin
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
                    <div className="animate-fade-in-up">
                        {children}
                    </div>
                </Suspense>
            ) : (
                fallback
            )}
        </div>
    );
};

// About Page Header Section Component - Fixed mobile spacing with fully black text
const AboutPageHeader = ({ logoPath = "https://via.placeholder.com/120x120/ffffff/000000?text=LOGO" }) => (
    <div style={{ backgroundColor: '#c4c4c4' }} className="text-white py-8 sm:py-12 md:py-16 lg:py-20 mt-16 sm:mt-0">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <div className="text-center">
                <div className="flex justify-center mb-4 sm:mb-6">
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 text-black opacity-100 animate-slide-down">About Us</h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black opacity-100 max-w-4xl mx-auto px-2 sm:px-4 animate-fade-in animation-delay-300">
                    Where Integrity, Innovation and Legacy, Power Future-Ready Solutions.
                </p>
                <nav className="flex justify-center items-center mt-4 sm:mt-6 text-black opacity-100 animate-fade-in animation-delay-500">
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg">Homepage</span>
                    <span className="mx-2 text-sm sm:text-lg">›</span>
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg">About</span>
                </nav>
            </div>
        </div>
        <style>{`
            @keyframes fade-in-up {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes slide-down {
                from {
                    opacity: 0;
                    transform: translateY(-30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes fade-in {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
            
            .animate-fade-in-up {
                animation: fade-in-up 0.8s ease-out;
            }
            
            .animate-slide-down {
                animation: slide-down 0.6s ease-out;
            }
            
            .animate-fade-in {
                animation: fade-in 0.8s ease-out forwards;
            }
            
            .animation-delay-300 {
                animation-delay: 0.3s;
            }
            
            .animation-delay-500 {
                animation-delay: 0.5s;
            }
        `}</style>
    </div>
);

// Main About Section Component - Improved mobile layout
const MainAboutSection = ({ companyImagePath = "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" }) => (
    <div className="bg-white py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                <div className="order-2 lg:order-1 transform transition-all duration-700 hover:translate-x-2">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 transition-all duration-500">
                        We're A Legacy-Driven <span className="text-yellow-500 hover:text-yellow-600 transition-colors duration-300">Electrical Solutions</span> Company
                    </h2>
                    <div className="space-y-4 sm:space-y-6 text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                        <p className="transform transition-all duration-500 delay-100 hover:translate-x-1">
                            In an industry where precision, safety, and consistency matter most, we've been powering excellence since 1963. With over six decades of experience, our name stands for integrity, innovation, and legacy.
                        </p>
                        <p className="transform transition-all duration-500 delay-200 hover:translate-x-1">
                            We provide end-to-end electrical services — from installations to advanced green solutions — trusted by large brands and enterprises across sectors. As pioneers in electrical innovation, we deliver future-ready infrastructure that's smart, sustainable, and built on trust.
                        </p>
                    </div>

                    {/* Key Points */}
                    <div className="mt-8 sm:mt-12 space-y-3 sm:space-y-4">
                        <div className="flex items-center space-x-3 sm:space-x-4 transform transition-all duration-300 hover:translate-x-2 hover:scale-105">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0 animate-pulse"></div>
                            <span className="text-gray-800 font-semibold text-sm sm:text-base">Trusted by leading brands since 1963</span>
                        </div>
                        <div className="flex items-center space-x-3 sm:space-x-4 transform transition-all duration-300 delay-100 hover:translate-x-2 hover:scale-105">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0 animate-pulse animation-delay-200"></div>
                            <span className="text-gray-800 font-semibold text-sm sm:text-base">Full-spectrum electrical & energy services</span>
                        </div>
                        <div className="flex items-center space-x-3 sm:space-x-4 transform transition-all duration-300 delay-200 hover:translate-x-2 hover:scale-105">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0 animate-pulse animation-delay-400"></div>
                            <span className="text-gray-800 font-semibold text-sm sm:text-base">Powered by innovation & guided by legacy</span>
                        </div>
                    </div>

                    <button className="mt-6 sm:mt-8 bg-yellow-500 hover:bg-yellow-600 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base transform hover:scale-105 hover:shadow-lg">
                        Know More
                    </button>
                </div>

                <div className="relative order-1 lg:order-2 group">
                    <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
                        <img
                            src={companyImagePath}
                            alt="Electrical team at work"
                            className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-500 rounded-full opacity-20 animate-float"></div>
                    <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 bg-gray-900 rounded-full opacity-10 animate-float animation-delay-1000"></div>
                </div>
            </div>
        </div>
        <style jsx>{`
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }
            .animate-float {
                animation: float 3s ease-in-out infinite;
            }
            .animation-delay-200 {
                animation-delay: 0.2s;
            }
            .animation-delay-400 {
                animation-delay: 0.4s;
            }
            .animation-delay-1000 {
                animation-delay: 1s;
            }
        `}</style>
    </div>
);

// Services Overview Section Component
const ServicesOverviewSection = () => {
    const services = [
        {
            title: "Electrical Installation",
            imagePath: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "Professional installation services for residential and commercial properties"
        },
        {
            title: "Commercial & Industrial Services",
            imagePath: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "Comprehensive electrical solutions for large-scale operations"
        },
        {
            title: "Power Distribution",
            imagePath: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "Efficient power distribution systems and infrastructure"
        },
        {
            title: "Lighting & Low Voltage Systems",
            imagePath: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "Modern lighting solutions and low voltage installations"
        },
        {
            title: "Project Services",
            imagePath: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "End-to-end project management and execution"
        },
        {
            title: "Energy Efficiency & Green Solutions",
            imagePath: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "Sustainable energy solutions for a greener future"
        }
    ];

    return (
        <div className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 transform transition-all duration-500 hover:scale-105">
                        Our <span className="text-yellow-500 hover:text-yellow-600 transition-colors duration-300">Services</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 transform transition-all duration-500 delay-200">
                        Expert Electrical Solutions For Every Need
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 group"
                            style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="bg-gray-200 h-40 sm:h-48 overflow-hidden">
                                <img
                                    src={service.imagePath}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 transition-colors duration-300 group-hover:text-yellow-600">{service.title}</h3>
                                <p className="text-gray-600 text-sm sm:text-base transition-all duration-300 group-hover:text-gray-800">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Why Choose Us Section Component
const WhyChooseUsSection = () => {
    const features = [
        {
            icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "6 Decades of Experience",
            description: "Years of hands-on expertise in handling diverse electrical projects with precision and reliability."
        },
        {
            icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Advanced Technology",
            description: "We use the latest tools and techniques to deliver modern, energy-efficient electrical solutions."
        },
        {
            icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Affordable Pricing",
            description: "Get high-quality electrical services at competitive rates without compromising on safety or efficiency."
        },
        {
            icon: <Star className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Satisfaction Guaranteed",
            description: "We prioritize customer satisfaction with timely service, attention to detail, and long-lasting solutions."
        }
    ];

    return (
        <div className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 transform transition-all duration-500 hover:scale-105">
                        Why <span className="text-yellow-500 hover:text-yellow-600 transition-colors duration-300">Choose Us</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 transform transition-all duration-500 delay-200">
                        Trusted Electrical Services For Every Project
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center group transform transition-all duration-500 hover:scale-110 hover:-translate-y-3"
                            style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-yellow-500 text-white rounded-full mb-4 sm:mb-6 group-hover:bg-yellow-600 transition-all duration-500 group-hover:rotate-12 group-hover:shadow-lg">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 transition-colors duration-300 group-hover:text-yellow-600">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base px-2 transition-all duration-300 group-hover:text-gray-800">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Our Process Section Component - FIXED ALIGNMENT
const OurProcessSection = () => {
    const processes = [
        {
            step: "01",
            title: "Consultation & Assessment",
            description: "We begin with a thorough consultation to understand your needs and assess the project requirements."
        },
        {
            step: "02",
            title: "Planning & Installation",
            description: "Our team creates detailed plans and executes professional installations with precision and care."
        },
        {
            step: "03",
            title: "Testing & Maintenance",
            description: "We conduct comprehensive testing and provide ongoing maintenance to ensure optimal performance."
        }
    ];

    return (
        <div className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 transform transition-all duration-500 hover:scale-105">
                        Our <span className="text-yellow-500 hover:text-yellow-600 transition-colors duration-300">Process</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 transform transition-all duration-500 delay-200">
                        Our Efficient Steps For Quality Service
                    </p>
                </div>

                <div className="relative">
                    {/* Desktop Layout */}
                    <div className="hidden md:block">
                        <div className="flex items-start justify-between relative">
                            {/* Connecting Line - Full width behind all steps */}
                            <div className="absolute top-10 sm:top-12 left-0 right-0 h-0.5 bg-yellow-500 z-0"></div>

                            {processes.map((process, index) => (
                                <div key={index} className="relative z-10 flex-1 text-center px-4 transform transition-all duration-500 hover:scale-105"
                                    style={{ animationDelay: `${index * 0.2}s` }}>
                                    <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-yellow-500 text-black rounded-full text-xl sm:text-2xl font-bold mb-4 sm:mb-6 transition-all duration-500 hover:rotate-12 hover:shadow-lg">
                                        {process.step}
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 transition-colors duration-300 hover:text-yellow-400">{process.title}</h3>
                                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base px-2 transition-all duration-300 hover:text-white">{process.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden space-y-8">
                        {processes.map((process, index) => (
                            <div key={index} className="relative text-center transform transition-all duration-500 hover:scale-105"
                                style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-500 text-black rounded-full text-xl font-bold mb-4 transition-all duration-500 hover:rotate-12 hover:shadow-lg">
                                    {process.step}
                                </div>
                                <h3 className="text-xl font-bold mb-3 transition-colors duration-300 hover:text-yellow-400">{process.title}</h3>
                                <p className="text-gray-300 leading-relaxed text-sm px-2 transition-all duration-300 hover:text-white">{process.description}</p>

                                {/* Vertical connecting line for mobile */}
                                {index < 2 && (
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-0.5 h-4 bg-yellow-500"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Success Story Section Component
const SuccessStorySection = ({ projectImagePath = "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }) => (
    <div className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 transform transition-all duration-500 hover:scale-105">
                    Success <span className="text-yellow-500 hover:text-yellow-600 transition-colors duration-300">Story</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 px-4 transform transition-all duration-500 delay-200">
                    Successful Electrical Work Completed Efficiently
                </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-6xl mx-auto transform transition-all duration-500 hover:shadow-2xl group">
                <div className="grid lg:grid-cols-2 gap-0">
                    <div className="bg-gray-200 order-2 lg:order-1 overflow-hidden">
                        <img
                            src={projectImagePath}
                            alt="GreenTech Solar Installation"
                            className="w-full h-64 sm:h-80 lg:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                    <div className="p-6 sm:p-8 lg:p-12 order-1 lg:order-2 transform transition-all duration-500 group-hover:translate-x-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 transition-colors duration-300 group-hover:text-yellow-600">
                            GreenTech Solar Installation
                        </h3>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 transition-all duration-300 group-hover:text-gray-900">
                            Installed a high-efficiency solar power system for an eco-friendly office, optimizing energy usage and reducing costs significantly.
                        </p>

                        <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6 transform transition-all duration-300 group-hover:translate-x-1">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:rotate-12">
                                <span className="text-base sm:text-xl font-bold text-white">RT</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm sm:text-base transition-colors duration-300 group-hover:text-yellow-600">Rachel Thompson</h4>
                                <p className="text-gray-600 text-xs sm:text-sm">CEO, TeamTalk</p>
                            </div>
                        </div>

                        <button className="text-yellow-500 hover:text-yellow-600 font-semibold transition-all duration-300 text-sm sm:text-base transform hover:translate-x-2">
                            Read More →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// CTA Section Component
const CTASection = () => (
    <div className="py-8 sm:py-12 md:py-16 lg:py-20 bg-yellow-500 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-4xl text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 transform transition-all duration-500 hover:scale-105">
                Ready to Power Your Future?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-black mb-6 sm:mb-8 opacity-80 px-4 transform transition-all duration-500 delay-200">
                Contact us today for professional electrical solutions that combine legacy expertise with innovative technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 text-sm sm:text-base transform hover:scale-105 hover:shadow-lg">
                    Contact Us
                </button>
                <button className="border-2 border-black text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-black hover:text-yellow-500 transition-all duration-300 text-sm sm:text-base transform hover:scale-105 hover:shadow-lg">
                    Get Quote
                </button>
            </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-black opacity-10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-black opacity-5 rounded-full animate-float animation-delay-1000"></div>

        <style jsx>{`
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-15px); }
            }
            .animate-float {
                animation: float 4s ease-in-out infinite;
            }
            .animation-delay-1000 {
                animation-delay: 1s;
            }
        `}</style>
    </div>
);

// Main About Page Component - Fixed mobile layout
export const VESAboutPage = ({
    logoPath,
    companyImagePath,
    projectImagePath
}) => {
    return (
        <div className="relative w-full bg-gray-50 overflow-x-hidden min-h-screen">
            {/* Load navigation header immediately */}
            <HeaderSection />

            {/* About page specific header - Added proper top spacing for mobile */}
            <AboutPageHeader logoPath={logoPath} />

            {/* Main About Section */}
            <LazySection fallback={<SectionSkeleton height="h-96 sm:h-[32rem] lg:h-[40rem]" />}>
                <MainAboutSection companyImagePath={companyImagePath} />
            </LazySection>

            {/* Services Overview Section */}
            <LazySection fallback={<SectionSkeleton height="h-80 sm:h-96 lg:h-[32rem]" />}>
                <ServicesOverviewSection />
            </LazySection>

            {/* Why Choose Us Section */}
            <LazySection fallback={<SectionSkeleton height="h-64 sm:h-80 lg:h-96" />}>
                <WhyChooseUsSection />
            </LazySection>

            {/* Our Process Section */}
            <LazySection fallback={<SectionSkeleton height="h-64 sm:h-80 lg:h-96" />}>
                <OurProcessSection />
            </LazySection>

            {/* Success Story Section */}
            <LazySection fallback={<SectionSkeleton height="h-80 sm:h-96 lg:h-[32rem]" />}>
                <SuccessStorySection projectImagePath={projectImagePath} />
            </LazySection>

            {/* CTA Section */}
            <LazySection fallback={<SectionSkeleton height="h-48 sm:h-64" />}>
                <CTASection />
            </LazySection>

            {/* Footer */}
            <LazySection fallback={<div className="h-48 sm:h-64 bg-gray-800"></div>}>
                <FooterSection />
            </LazySection>

            {/* Global styles for animations */}
            <style jsx global>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes slide-down {
                    from {
                        opacity: 0;
                        transform: translateY(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                
                @keyframes float {
                    0%, 100% { 
                        transform: translateY(0px); 
                    }
                    50% { 
                        transform: translateY(-10px); 
                    }
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out;
                }
                
                .animate-slide-down {
                    animation: slide-down 0.6s ease-out;
                }
                
                .animate-fade-in {
                    animation: fade-in 0.8s ease-out forwards;
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
                .animation-delay-200 {
                    animation-delay: 0.2s;
                }
                
                .animation-delay-300 {
                    animation-delay: 0.3s;
                }
                
                .animation-delay-400 {
                    animation-delay: 0.4s;
                }
                
                .animation-delay-500 {
                    animation-delay: 0.5s;
                }
                
                .animation-delay-1000 {
                    animation-delay: 1s;
                }
                
                /* Smooth scrolling */
                html {
                    scroll-behavior: smooth;
                }
                
                /* Enhanced hover effects */
                .group:hover .group-hover\\:scale-110 {
                    transform: scale(1.1);
                }
                
                .group:hover .group-hover\\:rotate-12 {
                    transform: rotate(12deg);
                }
                
                /* Custom shadow for enhanced effects */
                .hover\\:shadow-3xl:hover {
                    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
                }
                
                /* Staggered animation delays for grid items */
                .grid > *:nth-child(1) { animation-delay: 0.1s; }
                .grid > *:nth-child(2) { animation-delay: 0.2s; }
                .grid > *:nth-child(3) { animation-delay: 0.3s; }
                .grid > *:nth-child(4) { animation-delay: 0.4s; }
                .grid > *:nth-child(5) { animation-delay: 0.5s; }
                .grid > *:nth-child(6) { animation-delay: 0.6s; }
                
                /* Pulse animation for bullet points */
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                
                .animate-pulse {
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                
                /* Improved transitions for all interactive elements */
                * {
                    transition-property: transform, opacity, color, background-color, border-color, box-shadow;
                    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                /* Focus states for accessibility */
                button:focus,
                a:focus {
                    outline: 2px solid #eab308;
                    outline-offset: 2px;
                }
                
                /* Enhanced mobile touch targets */
                @media (max-width: 768px) {
                    button, a {
                        min-height: 44px;
                        min-width: 44px;
                    }
                }
            `}</style>
        </div>
    );
};