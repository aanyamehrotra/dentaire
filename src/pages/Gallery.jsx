import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { ArrowRight, Camera, Image, Play } from "lucide-react";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-dental-bg-primary">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-dental-bg-secondary to-dental-bg-light">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-dental-primary/10 text-dental-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Camera className="w-4 h-4" />
                <span>Our Gallery</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                See Our <span className="text-gradient">Beautiful Work</span>
              </h1>

              <p className="text-xl text-dental-text-secondary leading-relaxed mb-8">
                Explore our modern facility, before and after transformations,
                and get a glimpse of the exceptional care we provide to our
                patients.
              </p>

              <Button className="btn-primary">
                View Our Work
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl card-shadow text-center">
                <Image className="w-12 h-12 text-dental-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dental-text-primary mb-3">
                  Before & After
                </h3>
                <p className="text-dental-text-secondary">
                  Amazing smile transformations from our cosmetic procedures
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl card-shadow text-center">
                <Camera className="w-12 h-12 text-dental-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dental-text-primary mb-3">
                  Our Facility
                </h3>
                <p className="text-dental-text-secondary">
                  Modern, comfortable spaces designed for your comfort
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl card-shadow text-center">
                <Play className="w-12 h-12 text-dental-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dental-text-primary mb-3">
                  Video Tours
                </h3>
                <p className="text-dental-text-secondary">
                  Take a virtual tour of our state-of-the-art clinic
                </p>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-dental-text-primary mb-6">
                Complete Gallery Coming Soon
              </h2>
              <p className="text-dental-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
                We're curating a comprehensive gallery showcasing our work,
                facility, and patient transformations. Visit us to see our
                beautiful clinic in person.
              </p>
              <Button className="btn-primary">
                Schedule a Visit
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

export default Gallery;