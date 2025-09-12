import {
  ArrowUp,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import React from "react";

export const FooterSection = (): JSX.Element => {
  const quickLinks = [
    { title: "About Us" },
    { title: "Services" },
    { title: "Case Studies" },
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-4 h-4" />,
      text: "+91 98209 74399",
    },
    {
      icon: <Mail className="w-4 h-4" />,
      text: "vora@ves.co.in",
    },
    {
      icon: <MapPin width={50} height={50} />,
      text: "01, 2nd Floor Mahalaxmi Industrial Estate,  D.S. Road Gandhi Nagar, Lower Parel(W) Mumbai 400013",
    },
  ];

  return (
    <footer className="w-full bg-[#f3f3f3]">
      <div className="container mx-auto px-5 sm:px-8 md:px-12 lg:px-20 py-10 lg:py-14">
        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Left section - Logo + description */}
          <div className="flex flex-col">
            <div className="mb-6">
              <img
                className="w-[140px] lg:w-[160px] h-auto"
                alt="Vora logo"
                src="/images/logo.png"
              />
            </div>
            <p className="text-sm sm:text-base text-[#00000099] leading-6 font-['Inter',Helvetica] mb-6">
              We provide professional electrical solutions with safety, efficiency, ensure seamless energy flow for homes and businesses.
            </p>
            <img
              className="w-[140px] sm:w-[160px]"
              alt="Social icons"
              src="/images/social-icons.svg"
            />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-[#000000b2] hover:text-black transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="flex flex-col gap-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  {item.icon}
                  <span className="text-sm text-[#000000b2]">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Subscribe Our Newsletter</h3>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                className="h-10 px-4 rounded-[32px] bg-[#e0e0e0] text-sm placeholder-[#020202b2] focus:outline-none"
                placeholder="Your Email"
              />
              <button className="flex items-center gap-2 px-4 py-2 rounded-[32px] bg-yellow-400 text-black font-medium text-sm w-fit hover:bg-yellow-300 transition">
                Submit
                <ArrowUp className="w-4 h-4 rotate-90" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-[#2d2d2d] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#000000b2] text-sm text-center sm:text-left">
            © 2025 All Right Reserved by VESP...
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-sm font-medium text-black hover:text-gray-700"
          >
            Back To Top
            <div className="w-7 h-7 bg-yellow-400 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
              <ArrowUp className="w-4 h-4 text-black" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
