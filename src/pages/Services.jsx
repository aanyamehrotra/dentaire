import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { ArrowRight, Heart, Smile, Shield, Zap } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-dental-bg-primary">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-dental-bg-secondary to-dental-bg-light">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-dental-primary/10 text-dental-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Smile className="w-4 h-4" />
                <span>Our Services</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Comprehensive <span className="text-gradient">Dental Care</span>{" "}
                Services
              </h1>

              <p className="text-xl text-dental-text-secondary leading-relaxed mb-8">
                From routine cleanings to advanced procedures, we offer a full
                range of dental services using the latest technology and
                techniques.
              </p>

              <Button className="btn-primary">
                Schedule Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                {
                  icon: Heart,
                  title: "General Dentistry",
                  description:
                    "Complete oral health care and preventive treatments",
                  color: "dental-primary",
                },
                {
                  icon: Smile,
                  title: "Cosmetic Dentistry",
                  description:
                    "Transform your smile with modern cosmetic procedures",
                  color: "dental-secondary",
                },
                {
                  icon: Shield,
                  title: "Dental Implants",
                  description: "Permanent solutions for missing teeth",
                  color: "dental-accent",
                },
                {
                  icon: Zap,
                  title: "Emergency Care",
                  description: "24/7 emergency dental services",
                  color: "dental-primary",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl card-shadow text-center hover:scale-105 transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 bg-${service.color}/10 rounded-xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <service.icon className={`w-8 h-8 text-${service.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-dental-text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-dental-text-secondary">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-dental-text-primary mb-6">
                Detailed Service Information Coming Soon
              </h2>
              <p className="text-dental-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
                We're developing comprehensive details about each of our
                services. Contact us today to learn more about how we can help
                improve your dental health.
              </p>
              <Button className="btn-primary">
                Contact Us for Details
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;