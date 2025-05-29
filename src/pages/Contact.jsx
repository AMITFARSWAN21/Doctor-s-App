import React, { useState,useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });


  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
  
      try {
        const response = await fetch("http://localhost:8080/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
  
        if (response.ok) {
          setSubmitSuccess(true);
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
          setTimeout(() => setSubmitSuccess(false), 5000);
        } else {
          console.error("Failed to submit message");
        }
  
      } catch (error) {
        console.error("Error submitting form:", error);
      }
  
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 py-20 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg">We'd love to hear from you</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>

            <div className="flex items-start bg-white p-6 rounded-xl shadow">
              <div className="text-2xl mr-4">📧</div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Email Us</h3>
                <p className="text-gray-600">support@doccare.com</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-xl shadow">
              <div className="text-2xl mr-4">📞</div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Call Us</h3>
                <p className="text-gray-600">+91 9876543210</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-xl shadow">
              <div className="text-2xl mr-4">📍</div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Visit Us</h3>
                <p className="text-gray-600">Faridabad, Haryana, India</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-xl shadow">
              <div className="text-2xl mr-4">⏰</div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Hours</h3>
                <p className="text-gray-600">Mon-Fri: 8am - 6pm<br />Sat: 9am - 2pm<br />Sun: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>

            {submitSuccess && (
              <div className="bg-green-100 text-green-700 p-4 rounded mb-4">
                Thank you! Your message has been sent.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full border px-4 py-2 rounded-lg ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full border px-4 py-2 rounded-lg ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border px-4 py-2 rounded-lg border-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border px-4 py-2 rounded-lg border-gray-300"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General</option>
                  <option value="billing">Billing</option>
                  <option value="support">Support</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full border px-4 py-2 rounded-lg ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700 transition"
              >
                {isSubmitting ? 'Sending...' : 'Send Message ✉️'}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="h-[500px] w-full">
            <iframe
              title="Faridabad Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14016.901280019426!2d77.3061641!3d28.4089121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd54b279a2b1%3A0xb0b352486a9f6a6f!2sFaridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1714639123456!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-1">Our Location</h3>
            <p className="text-gray-600">We are located in Faridabad, Haryana. Free parking and wheelchair access available.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
