import React from "react";
import { Button } from "../ui/button";
import {
  Heart,
  Smile,
  Shield,
  Zap,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: "General Dentistry",
      description:
        "Comprehensive oral health care including cleanings, fillings, and preventive treatments.",
      features: ["Regular Checkups", "Dental Cleanings", "Cavity Fillings"],
      image:
        "https://images.pexels.com/photos/9951396/pexels-photo-9951396.jpeg",
      color: "dental-primary",
    },
    {
      icon: Smile,
      title: "Cosmetic Dentistry",
      description:
        "Transform your smile with our advanced cosmetic dental procedures and treatments.",
      features: ["Teeth Whitening", "Veneers", "Smile Makeover"],
      image:
        "https://images.pexels.com/photos/9951396/pexels-photo-9951396.jpeg",
      color: "dental-secondary",
    },
    {
      icon: Shield,
      title: "Dental Implants",
      description:
        "Permanent solution for missing teeth with our state-of-the-art implant technology.",
      features: ["Single Implants", "Full Mouth", "Implant Crowns"],
      image:
        "https://images.pexels.com/photos/9951396/pexels-photo-9951396.jpeg",
      color: "dental-accent",
    },
    {
      icon: Zap,
      title: "Emergency Care",
      description:
        "24/7 emergency dental services for urgent dental problems and pain relief.",
      features: ["24/7 Availability", "Pain Relief", "Quick Treatment"],
      image:
        "https://images.pexels.com/photos/9951396/pexels-photo-9951396.jpeg",
      color: "dental-primary",
    },
  ];

  return (
    <section className="section-padding bg-dental-bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center space-x-2 bg-dental-primary/10 text-dental-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span>Our Services</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Complete Dental Care for{" "}
            <span className="text-gradient">Every Need</span>
          </h2>

          <p className="text-xl text-dental-text-secondary leading-relaxed">
            From routine checkups to advanced procedures, we provide
            comprehensive dental care using the latest technology and
            techniques.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 card-shadow hover:scale-105 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Service Icon */}
              <div className="relative mb-6">
                <div
                  className={`w-16 h-16 bg-${service.color}/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`w-8 h-8 text-${service.color}`} />
                </div>
                <div
                  className={`absolute -top-2 -right-2 w-6 h-6 bg-${service.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
              </div>

              <h3 className="text-xl font-bold text-dental-text-primary mb-4">
                {service.title}
              </h3>

              <p className="text-dental-text-secondary mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center space-x-2 text-sm text-dental-text-secondary"
                  >
                    <CheckCircle
                      className={`w-4 h-4 text-${service.color} flex-shrink-0`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <div className="flex items-center justify-between">
                <span className={`text-${service.color} font-medium text-sm`}>
                  Learn More
                </span>
                <ArrowRight
                  className={`w-4 h-4 text-${service.color} group-hover:translate-x-1 transition-transform duration-300`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Service Highlights */}
        <div className="bg-white rounded-2xl p-8 md:p-12 card-shadow animate-fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-dental-text-primary">
                Why Choose Our Dental Services?
              </h3>

              <p className="text-dental-text-secondary leading-relaxed">
                We combine years of experience with cutting-edge technology to
                provide the highest quality dental care in a comfortable,
                welcoming environment.
              </p>

              <div className="space-y-4">
                {[
                  "State-of-the-art equipment and technology",
                  "Experienced and certified dental professionals",
                  "Comfortable and relaxing environment",
                  "Comprehensive treatment plans",
                  "Emergency care available 24/7",
                  "Flexible payment options available",
                ].map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-dental-secondary rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-dental-text-secondary">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              <Button className="btn-primary">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7584483/pexels-photo-7584483.jpeg"
                alt="Professional dental team providing excellent care"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />

              {/* Service Badge */}
              <div className="absolute -bottom-6 -left-6 bg-dental-primary text-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm">Services Available</div>
                </div>
              </div>

              {/* Quality Badge */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-dental-neutral-100">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-dental-accent text-dental-accent"
                      />
                    ))}
                  </div>
                  <span className="font-bold text-dental-text-primary">
                    5.0
                  </span>
                </div>
                <p className="text-xs text-dental-text-secondary mt-1">
                  Quality Rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;