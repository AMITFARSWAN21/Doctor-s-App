import React, { useEffect } from 'react';
import { assets } from '../assets/assets';

const About = () => {
  useEffect(() => {
    // Scroll to the top when this page is loaded
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this only runs when the component is mounted

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Prescripto
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in healthcare, connecting patients with expert doctors since 2020
          </p>
        </div>

        {/* History Section */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Journey</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2020, Prescripto emerged from a simple yet powerful vision: to make healthcare accessible to everyone.
                  What started as a small platform with a handful of doctors has grown into a comprehensive healthcare solution.
                </p>
                <p>
                  Our journey began when our founder, Dr. Sommya Jain, noticed the challenges patients faced in booking
                  appointments with specialists. She envisioned a platform that would bridge this gap, making healthcare
                  more accessible and efficient.
                </p>
                <p>
                  Today, we're proud to have helped over 100,000 patients connect with their ideal healthcare providers,
                  making quality healthcare just a click away.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={assets.logo}
                alt="Prescripto Evolution"
                className="rounded-lg shadow-xl w-full h-auto"
              />
              {/* <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-6 py-3 rounded-lg">
                <p className="text-2xl font-bold">100K+</p>
                <p className="text-sm">Happy Patients</p>
              </div> */}
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Choose Prescripto?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl hover:bg-blue-50 transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Expert Doctors</h3>
              <p className="text-gray-600">
                Access to a network of highly qualified and experienced medical professionals across various specialties.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-blue-50 transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Easy Booking</h3>
              <p className="text-gray-600">
                Simple and intuitive appointment booking process that saves you time and effort.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-blue-50 transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Patient First</h3>
              <p className="text-gray-600">
                Your health and comfort are our top priorities, with 24/7 support and care.
              </p>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Visit Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Office</h3>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-center">
                  <span className="mr-2">📍</span>
                  Ashoka Enclave Main Sec-35 Faridabad
                </p>
                <p className="flex items-center">
                  <span className="mr-2">🏢</span>
                  Suite 456, Floor 7
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📞</span>
                  +(91) 98399495959
                </p>
                <p className="flex items-center">
                  <span className="mr-2">✉️</span>
                  contact@Prescripto.com
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Working Hours</h3>
              <div className="space-y-3 text-gray-600">
                <p className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-blue-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied patients who trust Prescripto for their healthcare needs.
          </p>
          <button
            onClick={() => window.location.href = '/doctors'}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
          >
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
