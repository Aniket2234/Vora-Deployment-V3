import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";

export const HeaderSection = (): JSX.Element => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    // { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    // { label: "Projects", href: "/project" },
    { label: "Contact", href: "/contact" },
  ];

  // Function to handle Message Us button click
  const handleMessageUsClick = () => {
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      // Scroll to contact section on home page
      const contactSection = document.getElementById('contact-section') ||
        document.querySelector('[data-section="contact"]') ||
        document.querySelector('.contact-section');

      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        // Fallback: redirect to contact page if section not found
        window.location.href = '/contact';
      }
    } else {
      // Redirect to contact page if not on home page
      window.location.href = '/contact';
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-[1000] h-20">
      {/* Logo with home redirect */}
      <div className="absolute top-0 left-0 h-20 flex items-center pl-0 sm:pl-0 md:pl-0 lg:pl-10 z-20">
        <a href="/" className="cursor-pointer">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-auto w-auto max-w-[170px] object-contain hover:opacity-90 transition-opacity"
          />
        </a>
      </div>

      {/* Main header content (centered) */}
      <div className="max-w-screen-xl mx-auto px-4 h-20 flex items-center justify-end md:justify-between">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 ml-auto">
          <ul className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-[#070700] text-base font-medium hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <Button
            onClick={handleMessageUsClick}
            className="flex items-center gap-1 pl-4 pr-3 py-2 rounded-full text-base font-medium text-[#070700] bg-[linear-gradient(180deg,rgba(254,221,0,1)_0%,rgba(254,221,0,1)_100%)] shadow-[inset_0_1px_1px_#e3eb00,inset_0_-1px_4px_#e4ec00] hover:bg-[linear-gradient(180deg,rgba(254,221,0,0.9)_0%,rgba(254,221,0,0.9)_100%)]"
          >
            Message Us
            <img src="/images/arrowcircleright-2.svg" alt="Arrow" className="w-6 h-6" />
          </Button>
        </nav>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1 p-2"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="w-6 h-0.5 bg-black" />
          <span className="w-6 h-0.5 bg-black" />
          <span className="w-6 h-0.5 bg-black" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg z-[9999]">
          <ul className="flex flex-col items-start gap-4 p-4">
            {navItems.map((item, index) => (
              <li key={index} className="w-full">
                <a
                  href={item.href}
                  className="block w-full text-[#070700] text-base font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="w-full">
              <Button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleMessageUsClick();
                }}
                className="w-full flex items-center justify-center gap-1 pl-4 pr-3 py-2 rounded-full text-base font-medium text-[#070700] bg-[linear-gradient(180deg,rgba(254,221,0,1)_0%,rgba(254,221,0,1)_100%)] shadow-[inset_0_1px_1px_#e3eb00,inset_0_-1px_4px_#e4ec00] hover:bg-[linear-gradient(180deg,rgba(254,221,0,0.9)_0%,rgba(254,221,0,0.9)_100%)]"
              >
                Message Us
                <img src="/images/arrowcircleright-2.svg" alt="Arrow" className="w-6 h-6" />
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};