import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { ArrowRight, Users, Award, Star } from "lucide-react";

const Team = () => {
  return (
    <div className="min-h-screen bg-dental-bg-primary">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-dental-bg-secondary to-dental-bg-light">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-dental-primary/10 text-dental-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                <span>Our Expert Team</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Meet Our <span className="text-gradient">Dental Experts</span>
              </h1>

              <p className="text-xl text-dental-text-secondary leading-relaxed mb-8">
                Our team of experienced dentists and specialists are dedicated
                to providing exceptional care with the latest techniques and
                technology.
              </p>

              <Button className="btn-primary">
                Book Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Team Stats */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center p-6 bg-white rounded-xl card-shadow">
                <Award className="w-8 h-8 text-dental-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-dental-primary">15</div>
                <div className="text-sm text-dental-text-secondary">
                  Expert Dentists
                </div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl card-shadow">
                <Users className="w-8 h-8 text-dental-secondary mx-auto mb-3" />
                <div className="text-2xl font-bold text-dental-secondary">
                  50+
                </div>
                <div className="text-sm text-dental-text-secondary">
                  Years Combined Experience
                </div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl card-shadow">
                <Star className="w-8 h-8 text-dental-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-dental-accent">4.9</div>
                <div className="text-sm text-dental-text-secondary">
                  Patient Rating
                </div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl card-shadow">
                <Award className="w-8 h-8 text-dental-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-dental-primary">
                  100%
                </div>
                <div className="text-sm text-dental-text-secondary">
                  Board Certified
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-dental-text-primary mb-6">
                Detailed Team Profiles Coming Soon
              </h2>
              <p className="text-dental-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
                We're preparing comprehensive profiles of our dental
                professionals. Each team member brings unique expertise and
                dedication to patient care.
              </p>
              <Button className="btn-primary">
                Schedule with Our Team
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

export default Team;