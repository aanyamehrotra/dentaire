import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Clock } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Team", href: "/team" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Header Bar */}
      <div className="bg-dental-primary text-white py-2 hidden md:block">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Call us: (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Mon-Fri: 8AM-6PM, Sat: 9AM-3PM</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span>📧 info@dentaire.com</span>
              <span>📍 123 Dental Street, City</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-dental-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-dental-primary">
                  Dentaire
                </h2>
                <p className="text-xs text-dental-text-secondary">
                  Professional Dental Care
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-dental-text-primary hover:text-dental-primary font-medium transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dental-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* CTA Button and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button className="btn-primary hidden md:inline-flex">
                Book Appointment
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-dental-neutral-100 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-dental-text-primary" />
                ) : (
                  <Menu className="w-6 h-6 text-dental-text-primary" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-white border-t border-dental-neutral-200">
            <div className="container-custom py-4">
              <div className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-dental-text-primary hover:text-dental-primary font-medium py-2 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="btn-primary w-full mt-4">
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;