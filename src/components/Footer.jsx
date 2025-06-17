import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Team", href: "/team" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "General Dentistry", href: "/services#general" },
    { name: "Cosmetic Dentistry", href: "/services#cosmetic" },
    { name: "Dental Implants", href: "/services#implants" },
    { name: "Orthodontics", href: "/services#orthodontics" },
    { name: "Teeth Whitening", href: "/services#whitening" },
    { name: "Emergency Care", href: "/services#emergency" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Youtube, href: "#", name: "YouTube" },
  ];

  return (
    <footer className="bg-dental-neutral-900 text-white">
      {/* Main Footer Content */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-dental-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Dentaire</h3>
                  <p className="text-dental-neutral-400 text-sm">
                    Professional Dental Care
                  </p>
                </div>
              </div>
              <p className="text-dental-neutral-300 leading-relaxed">
                We provide comprehensive dental care with a focus on comfort,
                quality, and cutting-edge technology. Your smile is our
                priority.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-dental-neutral-800 hover:bg-dental-primary rounded-lg flex items-center justify-center transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-dental-neutral-300 hover:text-dental-primary transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="text-dental-neutral-300 hover:text-dental-primary transition-colors duration-300"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-dental-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-dental-neutral-300">
                      123 Dental Street
                      <br />
                      Medical District
                      <br />
                      City, State 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-dental-primary flex-shrink-0" />
                  <p className="text-dental-neutral-300">(555) 123-4567</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-dental-primary flex-shrink-0" />
                  <p className="text-dental-neutral-300">info@dentaire.com</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-dental-primary mt-1 flex-shrink-0" />
                  <div className="text-dental-neutral-300">
                    <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 3:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-dental-neutral-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-dental-neutral-400 text-sm">
              © {currentYear} Dentaire. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-dental-neutral-400 hover:text-dental-primary transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-dental-neutral-400 hover:text-dental-primary transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                to="/sitemap"
                className="text-dental-neutral-400 hover:text-dental-primary transition-colors duration-300"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;