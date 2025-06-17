import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  User,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    date: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["(555) 123-4567", "(555) 987-6543"],
      color: "dental-primary",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@dentaire.com", "appointments@dentaire.com"],
      color: "dental-secondary",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Dental Street", "Medical District, City 12345"],
      color: "dental-accent",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon-Fri: 8AM-6PM", "Sat: 9AM-3PM, Sun: Closed"],
      color: "dental-primary",
    },
  ];

  const services = [
    "General Dentistry",
    "Cosmetic Dentistry",
    "Dental Implants",
    "Orthodontics",
    "Emergency Care",
    "Teeth Whitening",
  ];

  return (
    <section className="section-padding bg-dental-bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center space-x-2 bg-dental-primary/10 text-dental-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient">Transform</span> Your
            Smile?
          </h2>

          <p className="text-xl text-dental-text-secondary leading-relaxed">
            Schedule your appointment today and take the first step towards a
            healthier, more beautiful smile. We're here to help you every step
            of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-up">
            <div>
              <h3 className="text-2xl font-bold text-dental-text-primary mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 bg-${info.color}/10 rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <info.icon className={`w-6 h-6 text-${info.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dental-text-primary mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p
                          key={detailIndex}
                          className="text-dental-text-secondary"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="bg-dental-accent/10 border border-dental-accent/20 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-dental-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-dental-accent mb-2">
                    Emergency Care
                  </h4>
                  <p className="text-dental-text-secondary text-sm">
                    For dental emergencies, call our 24/7 emergency line at{" "}
                    <strong>(555) 911-HELP</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Appointment Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 card-shadow animate-fade-up">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-dental-text-primary mb-2">
                  Book Your Appointment
                </h3>
                <p className="text-dental-text-secondary">
                  Fill out the form below and we'll contact you to confirm your
                  appointment within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-dental-text-primary">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-dental-text-light" />
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-dental-text-primary">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-dental-text-light" />
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-dental-text-primary">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-dental-text-light" />
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-dental-text-primary">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-5 h-5 text-dental-text-light" />
                      <Input
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-dental-text-primary">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-dental-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dental-primary focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-dental-text-primary">
                    Additional Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-dental-text-light" />
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your dental concerns or any specific requests..."
                      className="pl-10 min-h-[120px]"
                    />
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <input type="checkbox" id="terms" className="mt-1" required />
                  <label
                    htmlFor="terms"
                    className="text-sm text-dental-text-secondary"
                  >
                    I agree to the{" "}
                    <a
                      href="/terms"
                      className="text-dental-primary hover:underline"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="/privacy"
                      className="text-dental-primary hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <Button type="submit" className="btn-primary w-full text-lg">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
              </form>

              {/* Form Benefits */}
              <div className="mt-8 pt-6 border-t border-dental-neutral-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-dental-secondary" />
                    <span className="text-sm text-dental-text-secondary">
                      Quick Response
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-dental-secondary" />
                    <span className="text-sm text-dental-text-secondary">
                      Flexible Scheduling
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-dental-secondary" />
                    <span className="text-sm text-dental-text-secondary">
                      Free Consultation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white rounded-2xl overflow-hidden card-shadow animate-fade-up">
          <div className="h-96 bg-dental-neutral-200 flex items-center justify-center">
            <div className="text-center space-y-4">
              <MapPin className="w-12 h-12 text-dental-primary mx-auto" />
              <div>
                <h4 className="text-xl font-bold text-dental-text-primary">
                  Visit Our Modern Clinic
                </h4>
                <p className="text-dental-text-secondary">
                  123 Dental Street, Medical District, City 12345
                </p>
                <Button className="btn-outline mt-4">Get Directions</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;