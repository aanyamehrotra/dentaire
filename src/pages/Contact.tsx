import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ContactSection from "../components/sections/ContactSection";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-dental-bg-primary">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-dental-bg-secondary to-dental-bg-light">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-dental-primary/10 text-dental-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Phone className="w-4 h-4" />
                <span>Contact Us</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Get in <span className="text-gradient">Touch</span> Today
              </h1>

              <p className="text-xl text-dental-text-secondary leading-relaxed mb-8">
                Ready to start your journey to better dental health? Contact us
                to schedule an appointment or learn more about our services.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-12 h-12 bg-dental-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-dental-primary" />
                  </div>
                  <p className="text-sm text-dental-text-secondary">Call Us</p>
                  <p className="font-semibold text-dental-text-primary">
                    (555) 123-4567
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-dental-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-dental-secondary" />
                  </div>
                  <p className="text-sm text-dental-text-secondary">Email</p>
                  <p className="font-semibold text-dental-text-primary">
                    info@dentaire.com
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-dental-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-dental-accent" />
                  </div>
                  <p className="text-sm text-dental-text-secondary">Location</p>
                  <p className="font-semibold text-dental-text-primary">
                    123 Dental Street
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-dental-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-dental-primary" />
                  </div>
                  <p className="text-sm text-dental-text-secondary">Hours</p>
                  <p className="font-semibold text-dental-text-primary">
                    Mon-Fri 8AM-6PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
