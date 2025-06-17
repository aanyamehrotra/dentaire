import React from "react";
import { Button } from "../ui/button";
import { Play, Check, Star } from "lucide-react";

const HeroSection = () => {
  const benefits = [
    "25+ Years of Experience",
    "Advanced Technology",
    "Comfortable Environment",
    "Emergency Care Available",
  ];

  const stats = [
    { value: "10,000+", label: "Happy Patients" },
    { value: "25+", label: "Years Experience" },
    { value: "15", label: "Expert Dentists" },
    { value: "99%", label: "Success Rate" },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-dental-bg-secondary to-dental-bg-light overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-dental-primary rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-dental-secondary rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-dental-accent rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-dental-primary rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-dental-primary/10 text-dental-primary px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 fill-current" />
                <span>Trusted by 10,000+ Patients</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Your <span className="text-gradient">Perfect Smile</span> Starts
                Here
              </h1>

              <p className="text-xl text-dental-text-secondary leading-relaxed max-w-lg">
                Experience world-class dental care with our team of expert
                dentists. We combine advanced technology with compassionate care
                to give you the smile you deserve.
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-dental-secondary rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-dental-text-secondary font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary text-lg px-8 py-4">
                Book Appointment
              </Button>
              <Button
                variant="outline"
                className="btn-outline text-lg px-8 py-4 flex items-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Watch Our Story</span>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-dental-neutral-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-dental-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-dental-text-secondary">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg"
                alt="Modern dental office showcasing professional equipment and clean environment"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />

              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-dental-neutral-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-dental-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">25+</span>
                  </div>
                  <div>
                    <p className="font-semibold text-dental-text-primary">
                      Years of Excellence
                    </p>
                    <p className="text-sm text-dental-text-secondary">
                      Trusted dental care
                    </p>
                  </div>
                </div>
              </div>

              {/* Rating Badge */}
              <div className="absolute -top-4 -right-4 bg-dental-accent text-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-bold">4.9</span>
                </div>
                <p className="text-xs mt-1">1000+ Reviews</p>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-8 right-8 w-48 h-48 bg-dental-primary/10 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-32 h-32 bg-dental-secondary/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;