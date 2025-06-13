import React from "react";
import { Button } from "../ui/button";
import { Star, ArrowRight, Award, Users } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      position: "Chief Dental Officer",
      specialization: "General & Cosmetic Dentistry",
      experience: "15+ Years",
      image:
        "https://images.pexels.com/photos/7584483/pexels-photo-7584483.jpeg",
      bio: "Dr. Johnson specializes in cosmetic dentistry and has transformed thousands of smiles.",
    },
    {
      name: "Dr. Michael Chen",
      position: "Oral Surgeon",
      specialization: "Oral Surgery & Implants",
      experience: "12+ Years",
      image:
        "https://images.pexels.com/photos/7584483/pexels-photo-7584483.jpeg",
      bio: "Expert in dental implants and complex oral surgical procedures.",
    },
    {
      name: "Dr. Emily Rodriguez",
      position: "Orthodontist",
      specialization: "Orthodontics & Braces",
      experience: "10+ Years",
      image:
        "https://images.pexels.com/photos/7584483/pexels-photo-7584483.jpeg",
      bio: "Specializes in creating beautiful, straight smiles for patients of all ages.",
    },
    {
      name: "Dr. James Wilson",
      position: "Pediatric Dentist",
      specialization: "Children's Dentistry",
      experience: "8+ Years",
      image:
        "https://images.pexels.com/photos/7584483/pexels-photo-7584483.jpeg",
      bio: "Dedicated to making dental visits fun and comfortable for children.",
    },
  ];

  return (
    <section className="section-padding bg-dental-bg-light">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center space-x-2 bg-dental-primary/10 text-dental-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            <span>Our Expert Team</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet the <span className="text-gradient">Professionals</span> Behind
            Your Smile
          </h2>

          <p className="text-xl text-dental-text-secondary leading-relaxed">
            Our team of experienced dentists and specialists are committed to
            providing you with the highest quality dental care in a comfortable
            and welcoming environment.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden card-shadow hover:scale-105 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Member Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.position}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dental-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Experience Badge */}
                <div className="absolute top-4 right-4 bg-dental-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {member.experience}
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-dental-text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-dental-primary font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-sm text-dental-text-secondary">
                    {member.specialization}
                  </p>
                </div>

                <p className="text-dental-text-secondary text-sm leading-relaxed">
                  {member.bio}
                </p>

                {/* View Profile Link */}
                <div className="flex items-center justify-between pt-4 border-t border-dental-neutral-200">
                  <span className="text-dental-primary font-medium text-sm">
                    View Profile
                  </span>
                  <ArrowRight className="w-4 h-4 text-dental-primary group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Highlights */}
        <div className="bg-white rounded-2xl p-8 md:p-12 card-shadow animate-fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-dental-text-primary">
                  Why Our Team Makes the Difference
                </h3>
                <p className="text-dental-text-secondary leading-relaxed">
                  Our dental professionals bring together decades of experience,
                  continuous education, and a genuine passion for helping
                  patients achieve optimal oral health.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Board-certified specialists in all dental fields",
                  "Continuous education and advanced training",
                  "Patient-centered approach to dental care",
                  "Latest technology and treatment techniques",
                  "Multilingual staff for diverse communities",
                  "Emergency care coordination and support",
                ].map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-dental-secondary rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-white fill-current" />
                    </div>
                    <span className="text-dental-text-secondary">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              <Button className="btn-primary">
                Meet All Team Members
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Team Stats */}
              <div className="bg-dental-primary/10 p-6 rounded-xl text-center">
                <Award className="w-8 h-8 text-dental-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-dental-primary">
                  15+
                </div>
                <div className="text-sm text-dental-text-secondary">
                  Certified Specialists
                </div>
              </div>

              <div className="bg-dental-secondary/10 p-6 rounded-xl text-center">
                <Users className="w-8 h-8 text-dental-secondary mx-auto mb-3" />
                <div className="text-2xl font-bold text-dental-secondary">
                  50+
                </div>
                <div className="text-sm text-dental-text-secondary">
                  Years Combined Experience
                </div>
              </div>

              <div className="bg-dental-accent/10 p-6 rounded-xl text-center">
                <Star className="w-8 h-8 text-dental-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-dental-accent">
                  4.9/5
                </div>
                <div className="text-sm text-dental-text-secondary">
                  Patient Rating
                </div>
              </div>

              <div className="bg-dental-primary/10 p-6 rounded-xl text-center">
                <Award className="w-8 h-8 text-dental-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-dental-primary">
                  100%
                </div>
                <div className="text-sm text-dental-text-secondary">
                  Satisfaction Rate
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-dental-primary to-dental-secondary rounded-2xl p-8 md:p-12 text-white animate-fade-up">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Meet Our Team?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Schedule a consultation today and experience the difference our
            expert team can make for your dental health and smile.
          </p>
          <Button className="bg-white text-dental-primary hover:bg-dental-neutral-100 font-bold px-8 py-4">
            Book Your Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
