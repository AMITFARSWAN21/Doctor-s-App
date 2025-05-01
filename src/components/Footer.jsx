import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-12 shadow-md">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-8 sm:flex-row px-4">

        {/* Brief Description */}
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Prescripto</h1>
          <p className="text-gray-600 max-w-xs">
            Prescripto is your one-stop solution for booking appointments with trusted doctors.
            Our platform connects you with qualified healthcare professionals to meet your medical needs.
          </p>
        </div>

        {/* Contact Details */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800">Contact Us</h2>
          <p className="text-gray-600">Phone: +91 9876543210</p>
          <p className="text-gray-600">Email: support@doccare.com</p>
          <p className="text-gray-600">New Delhi, India</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center space-y-2 sm:space-y-0 sm:flex-row sm:space-x-8">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link>
          <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
          <Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-6 text-sm">
        © {new Date().getFullYear()} DocCare. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
