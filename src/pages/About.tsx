import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { ArrowRight, Heart, Award, Users, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-dental-bg-primary">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-dental-bg-secondary to-dental-bg-light">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-dental-primary/10 text-dental-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4 fill-current" />
                <span>About Dentaire</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Your Partner in{" "}
                <span className="text-gradient">Dental Health</span>
              </h1>

              <p className="text-xl text-dental-text-secondary leading-relaxed mb-8">
                For over 25 years, Dentaire has been committed to providing
                exceptional dental care with a focus on comfort, innovation, and
                personalized treatment for every patient.
              </p>

              <Button className="btn-primary">
                Learn More About Our Story
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Placeholder Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-dental-text-primary mb-6">
                More Content Coming Soon
              </h2>
              <p className="text-dental-text-secondary leading-relaxed mb-8">
                We're currently developing comprehensive content for this page.
                Please check back soon or contact us directly for more
                information about our practice.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-white rounded-xl card-shadow">
                  <Award className="w-8 h-8 text-dental-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-dental-primary">
                    25+
                  </div>
                  <div className="text-sm text-dental-text-secondary">
                    Years Experience
                  </div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl card-shadow">
                  <Users className="w-8 h-8 text-dental-secondary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-dental-secondary">
                    10K+
                  </div>
                  <div className="text-sm text-dental-text-secondary">
                    Happy Patients
                  </div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl card-shadow">
                  <Shield className="w-8 h-8 text-dental-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-dental-accent">
                    99%
                  </div>
                  <div className="text-sm text-dental-text-secondary">
                    Success Rate
                  </div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl card-shadow">
                  <Heart className="w-8 h-8 text-dental-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-dental-primary">
                    15
                  </div>
                  <div className="text-sm text-dental-text-secondary">
                    Expert Dentists
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
