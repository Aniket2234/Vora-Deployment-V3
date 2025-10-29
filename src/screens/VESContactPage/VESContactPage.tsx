import React, { useState, lazy, Suspense, useEffect } from 'react';
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from 'lucide-react';
import { Button } from "../../components/ui/button";
import emailjs from "@emailjs/browser";
// Import header and footer
import { HeaderSection } from "../VESHomePage/sections/HeaderSection/HeaderSection";
const FooterSection = lazy(() => import("../VESHomePage/sections/FooterSection/FooterSection").then(module => ({ default: module.FooterSection })));

// Lazy load heavy components for better performance
const GoogleMapSection = lazy(() => Promise.resolve({
    default: () => (
        <div className="h-60 md:h-80">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.1404899999997!2d72.8241205!3d18.993148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU5JzM1LjMiTiA3MsKwNDknMjYuOCJF!5e0!3m2!1sen!2sin!4v1694123456789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VES Office Location"
            />
        </div>
    )
}));

// Loading skeleton component for better UX - Mobile optimized
const SectionSkeleton = ({ height = "h-64 md:h-96" }) => (
    <div className={`w-full ${height} bg-gray-100 animate-pulse flex items-center justify-center px-4`}>
        <div className="text-gray-400 text-sm md:text-base">Loading...</div>
    </div>
);

// Map loading skeleton
const MapSkeleton = () => (
    <div className="h-60 md:h-80 bg-gray-200 animate-pulse flex items-center justify-center">
        <MapPinIcon className="w-8 h-8 text-gray-400" />
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
                    {children}
                </Suspense>
            ) : (
                fallback
            )}
        </div>
    );
};

// Contact Page Header Section Component - Fixed mobile spacing
// Contact Page Header Section Component - Matching About Page Style
const ContactPageHeader = () => (
  <div className="w-full block pt-28 pb-6 text-center px-4 sm:px-6 md:px-8">
    <h2 className="font-normal text-3xl sm:text-4xl lg:text-5xl text-[#070700] tracking-tight max-w-4xl mx-auto px-2 sm:px-4 animate-fade-in opacity-0 animation-delay-300">
      Get In Touch With Our Electrical Team For All Your Residential, Commercial, And Industrial Needs.
    </h2>

    <style>{`
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
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

export default ContactPageHeader;




// Animated Section Wrapper
const AnimatedSection = ({ children, delay = 0 }) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const ref = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -100px 0px"
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

// Main Contact Content with animations
const ContactContent = () => {
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle form submission here
    //     console.log('Form submitted:', formData);
    //     alert('Thank you for your message! We will get back to you soon.');
    //     setFormData({
    //         name: '',
    //         email: '',
    //         phone: '',
    //         service: '',
    //         message: ''
    //     });
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.send(
            "service_593zw4s",      // Service ID
            "template_cmjjwl1",     // Template ID
            formData,               // Data from state
            "-muQ7r6gn-ZGEquip"     // Public Key
        )
        .then((response) => {
            console.log("SUCCESS!", response.status, response.text);
            alert("Thank you for your message! We will get back to you soon.");
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                message: ''
            });
        })
        .catch((err) => {
            console.error("FAILED...", err);
            alert("Oops! Something went wrong. Please try again.");
        });
    };

    return (
        <>
            {/* Contact Information Section */}
            <section className="py-16 md:py-24 lg:py-32 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <AnimatedSection delay={100}>
                        <div className="max-w-4xl mx-auto text-center mb-16">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <div className="w-4 h-0.5 bg-yellow-500"></div>
                                <div className="font-medium text-sm md:text-base tracking-wider uppercase">
                                    Get in touch
                                </div>
                                <div className="w-4 h-0.5 bg-yellow-500"></div>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight mb-6">
                                We'd Love To Hear From You
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Have questions about our services or need an estimate? Reach out to our team for electrical solutions.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Contact Card 1 - Phone */}
                        <AnimatedSection delay={150}>
                            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-yellow-400 flex items-center justify-center">
                                    <PhoneIcon className="w-8 h-8 text-gray-900" />
                                </div>
                                <h3 className="text-xl font-medium mb-3">Call Us</h3>
                                <p className="text-gray-600 mb-4">Available 24/7 for emergencies</p>
                                <a href="tel:+919820129358" className="text-lg font-medium hover:text-yellow-500 transition-colors duration-300">
                                    +91 98209 74399
                                </a>
                            </div>
                        </AnimatedSection>

                        {/* Contact Card 2 - Email */}
                        <AnimatedSection delay={200}>
                            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-yellow-400 flex items-center justify-center">
                                    <MailIcon className="w-8 h-8 text-gray-900" />
                                </div>
                                <h3 className="text-xl font-medium mb-3">Email Us</h3>
                                <p className="text-gray-600 mb-4">We'll respond within 24 hours</p>
                                <a href="mailto:Ashit@ves.co.in" className="text-lg font-medium hover:text-yellow-500 transition-colors duration-300">
                                    vora@ves.co.in
                                </a>
                            </div>
                        </AnimatedSection>

                        {/* Contact Card 3 - Address */}
                        <AnimatedSection delay={250}>
                            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-yellow-400 flex items-center justify-center">
                                    <MapPinIcon className="w-8 h-8 text-gray-900" />
                                </div>
                                <h3 className="text-xl font-medium mb-3">Visit Us</h3>
                                <p className="text-gray-600 mb-4">Our main office location</p>
                                <address className="text-lg font-medium not-italic">
                                    01, 2nd Floor
                                    Mahalaxmi Industrial Estate
                                    D.S. Road Gandhi Nagar<br />
                                    Lower Parel(W) Mumbai 400013
                                </address>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <AnimatedSection delay={100}>
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-normal tracking-tight mb-8">Send Us a Message</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition duration-300"
                                                placeholder="Your name"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition duration-300"
                                                placeholder="Your email"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition duration-300"
                                            placeholder="Your phone number"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition duration-300"
                                        >
                                            <option value="">Select a service</option>
                                            <option value="residential">Residential Electrical</option>
                                            <option value="commercial">Commercial Electrical</option>
                                            <option value="industrial">Industrial Electrical</option>
                                            <option value="maintenance">Electrical Maintenance</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition duration-300"
                                            placeholder="Your message"
                                            required
                                        ></textarea>
                                    </div>
                                    <div>
                                        <Button
                                            type="submit"
                                            className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 text-lg font-medium transition-colors duration-300 transform hover:scale-105"
                                        >
                                            Send Message
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={150}>
                            <div className="bg-white rounded-xl shadow-md p-8 lg:p-12 h-fit">
                                <h3 className="text-2xl font-medium mb-6">Business Hours</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <ClockIcon className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-medium">Monday - Friday</h4>
                                            <p className="text-gray-600">8:00 AM - 6:00 PM</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <ClockIcon className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-medium">Saturday</h4>
                                            <p className="text-gray-600">9:00 AM - 4:00 PM</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <ClockIcon className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-medium">Sunday</h4>
                                            <p className="text-gray-600">Emergency Services Only</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12">
                                    <h3 className="text-2xl font-medium mb-6">Our Location</h3>
                                    <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.1404899999997!2d72.8241205!3d18.993148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c85b6b5c1b71%3A0x8d5a6b4b4b4b4b4b!2s01%2C%202nd%20Floor%20Mahalaxmi%20Industrial%20Estate%2C%20D.S.%20Road%20Gandhi%20Nagar%2C%20Lower%20Parel(W)%2C%20Mumbai%20400013!5e0!3m2!1sen!2sin!4v1694123456789!5m2!1sen!2sin"
                                            width="100%"
                                            height="300"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </>
    );
};

// Main Contact Page Component - Fixed mobile layout
export const VESContactPage = ({ logoPath = "/images/logo.png" }: { logoPath?: string } = {}) => {
    useEffect(() => {
        // Add smooth scroll behavior to the entire document
        document.documentElement.style.scrollBehavior = 'smooth';
        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    return (
        <div className="relative w-full bg-gray-50 overflow-x-hidden min-h-screen">
            {/* Load navigation header immediately */}
            <HeaderSection />

            {/* Contact page specific header - Added proper top spacing for mobile */}
            <ContactPageHeader />

            {/* Main Content */}
            <div className="w-full">
                <ContactContent />
            </div>

            {/* Footer */}
            <LazySection fallback={<div className="h-48 sm:h-64 bg-gray-800"></div>}>
                <FooterSection />
            </LazySection>
        </div>
    );
};
