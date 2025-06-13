import React from "react";
import { Button } from "../ui/button";
import {
  Award,
  Users,
  Clock,
  Shield,
  Heart,
  ArrowRight,
  PlayCircle,
} from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: Award,
      value: "25+",
      label: "Years Experience",
      description: "Serving the community",
    },
    {
      icon: Users,
      value: "10K+",
      label: "Happy Patients",
      description: "Satisfied customers",
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Emergency Care",
      description: "Available anytime",
    },
    {
      icon: Shield,
      value: "100%",
      label: "Safe & Secure",
      description: "Guaranteed safety",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "We treat every patient with empathy, understanding, and genuine care for their wellbeing.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for perfection in every procedure, using the latest technology and techniques.",
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description:
        "Your safety and trust are our top priorities in everything we do.",
    },
  ];

  return (
    <section className="section-padding bg-dental-bg-primary">
      <div className="container-custom">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-dental-primary/10 text-dental-primary px-4 py-2 rounded-full text-sm font-medium">
                <Heart className="w-4 h-4 fill-current" />
                <span>About Dentaire</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Creating Beautiful Smiles for{" "}
                <span className="text-gradient">Over 25 Years</span>
              </h2>

              <p className="text-xl text-dental-text-secondary leading-relaxed">
                At Dentaire, we believe that everyone deserves a healthy,
                beautiful smile. Our team of experienced professionals combines
                advanced dental technology with compassionate care to provide
                exceptional dental services.
              </p>

              <p className="text-dental-text-secondary leading-relaxed">
                Founded in 1998, we have been dedicated to transforming lives
                through comprehensive dental care. Our state-of-the-art facility
                and commitment to continuing education ensures that our patients
                receive the most advanced and effective treatments available.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-dental-text-primary">
                Our Core Values
              </h3>

              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-dental-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-dental-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dental-text-primary mb-2">
                        {value.title}
                      </h4>
                      <p className="text-dental-text-secondary leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">
                Meet Our Team
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="btn-outline flex items-center space-x-2"
              >
                <PlayCircle className="w-5 h-5" />
                <span>Watch Our Story</span>
              </Button>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative animate-fade-in">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg"
                alt="Professional dental team in modern clinic environment"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />

              {/* Experience Badge */}
              <div className="absolute -top-6 -left-6 bg-dental-primary text-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-sm">Years of Trust</div>
                </div>
              </div>

              {/* Patient Satisfaction */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-dental-neutral-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-dental-secondary">
                    99%
                  </div>
                  <div className="text-sm text-dental-text-secondary">
                    Patient Satisfaction
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-8 right-8 w-32 h-32 bg-dental-secondary/10 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-24 h-24 bg-dental-primary/10 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center bg-white p-8 rounded-2xl card-shadow hover:scale-105 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-dental-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-8 h-8 text-dental-primary" />
              </div>
              <div className="text-3xl font-bold text-dental-primary mb-2">
                {achievement.value}
              </div>
              <div className="font-semibold text-dental-text-primary mb-1">
                {achievement.label}
              </div>
              <div className="text-sm text-dental-text-secondary">
                {achievement.description}
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 bg-gradient-to-r from-dental-primary to-dental-secondary rounded-2xl p-8 md:p-12 text-white animate-fade-up">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold">Our Mission</h3>
            <p className="text-xl leading-relaxed opacity-90">
              To provide exceptional dental care in a comfortable, modern
              environment while building lasting relationships with our patients
              based on trust, quality, and personalized attention.
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-2xl font-bold">Excellence</div>
                <div className="text-sm opacity-80">In Every Treatment</div>
              </div>
              <div className="w-px bg-white/30"></div>
              <div>
                <div className="text-2xl font-bold">Comfort</div>
                <div className="text-sm opacity-80">Patient First</div>
              </div>
              <div className="w-px bg-white/30"></div>
              <div>
                <div className="text-2xl font-bold">Innovation</div>
                <div className="text-sm opacity-80">Latest Technology</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
