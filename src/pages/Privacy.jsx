import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with gradient background */}
      <header className="bg-gradient-to-r from-green-600 to-green-700 py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Your health and privacy are important to us. We are committed to protecting your personal and medical information.
          </p>
        </div>
      </header>

      {/* Main content container */}
      <main className="container mx-auto px-4 py-12">
        {/* White card with shadow */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Last updated notice */}
          <div className="bg-gray-100 px-6 py-3 border-b">
            <p className="text-sm text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Policy content */}
          <div className="p-6 md:p-8 space-y-10">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">1. Introduction</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Welcome to our Privacy Policy. We understand the importance of maintaining your privacy, especially when it comes to personal and medical information. This Privacy Policy explains how we collect, use, and protect your data when you use our healthcare services.
                </p>
                <p>
                  By using our website and services, you agree to the terms outlined in this policy.
                </p>
              </div>
            </section>

            {/* Information Collection */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">2. Information We Collect</h2>
              <div className="space-y-4 text-gray-700">
                <p>We collect different types of personal and medical information for various purposes, including improving the quality of our healthcare services:</p>
                
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Personal Information</h3>
                <p>While using our service, we may ask for the following details:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name, email, and contact information (phone number, address)</li>
                  <li>Demographic information (age, gender, location)</li>
                  <li>Emergency contact details</li>
                  <li>Health-related details (medical history, medications, allergies)</li>
                  <li>Payment and billing information</li>
                  <li>Other information you voluntarily provide (e.g., appointment preferences)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Medical Data</h3>
                <p>We may collect sensitive medical information, such as:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Diagnosis, treatment plans, and procedures</li>
                  <li>Test results, prescriptions, and treatment histories</li>
                  <li>Patient notes from consultations</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Usage Data</h3>
                <p>We automatically collect information about your usage of our site to improve your experience:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address, browser type, and version</li>
                  <li>Device information and screen resolution</li>
                  <li>Pages visited and time spent on the website</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Cookies</h3>
                <p>We use cookies to enhance your experience on our site. You may configure your browser to refuse all cookies or notify you when a cookie is sent.</p>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">3. How We Use Your Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>We use the collected data for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide medical consultations and healthcare services</li>
                  <li>To book and manage appointments</li>
                  <li>To send reminders for upcoming appointments or medical tests</li>
                  <li>To improve our website and services based on user interaction data</li>
                  <li>To provide personalized health recommendations</li>
                  <li>To comply with legal and regulatory healthcare requirements</li>
                </ul>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">4. Data Security</h2>
              <div className="space-y-4 text-gray-700">
                <p>Your data security is paramount to us. We implement robust security measures to protect your personal and medical data from unauthorized access, alteration, or destruction. This includes encryption, secure data storage, and access control protocols.</p>
                <p>However, please note that no method of transmission over the Internet is 100% secure, and we cannot guarantee complete security of your data.</p>
              </div>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">5. Data Sharing and Disclosure</h2>
              <div className="space-y-4 text-gray-700">
                <p>We may share your information in the following situations:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Healthcare Providers:</strong> With your consent, we may share your medical information with specialists, hospitals, or other healthcare providers for ongoing care.
                  </li>
                  <li>
                    <strong>Legal and Regulatory Requirements:</strong> We may share data when required by law or to comply with a legal process.
                  </li>
                  <li>
                    <strong>Service Providers:</strong> We may share your data with third-party vendors to facilitate services such as appointment booking or payment processing, under strict confidentiality agreements.
                  </li>
                </ul>
                <p>We do not sell your personal or medical data to third parties.</p>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">6. Your Data Protection Rights</h2>
              <div className="space-y-4 text-gray-700">
                <p>As a patient, you have the following rights regarding your personal and medical information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The right to access and obtain a copy of your personal and medical data</li>
                  <li>The right to update or correct inaccurate data</li>
                  <li>The right to request deletion of your data in certain circumstances</li>
                  <li>The right to withdraw consent for data processing</li>
                  <li>The right to request a restriction on how your data is used</li>
                </ul>
                <p>To exercise these rights, please contact us using the details below.</p>
              </div>
            </section>

            {/* Policy Changes */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">7. Changes to This Policy</h2>
              <div className="space-y-4 text-gray-700">
                <p>We may update this Privacy Policy periodically. Any changes will be posted on this page, and the "Last Updated" date will be revised accordingly. Please review this page regularly for updates.</p>
              </div>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">8. Contact Us</h2>
              <div className="space-y-4 text-gray-700">
                <p>If you have any questions about this Privacy Policy or need further clarification, please contact us:</p>
                <address className="not-italic">
                  <p>By email: privacy@yourdoctorwebsite.com</p>
                  <p>By mail: 456 Health Lane, Wellness City, WC 54321</p>
                  <p>By phone: (987) 654-3210</p>
                </address>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
