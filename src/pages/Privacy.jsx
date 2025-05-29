import React, { useEffect } from 'react';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: 'collect',
      icon: '👁️',
      title: 'Information We Collect',
      content: [
        'Name, email address, and contact details.',
        'Login credentials (securely stored and encrypted).',
        'Usage data such as clicks, visited pages, and interaction time.',
      ],
    },
    {
      id: 'use',
      icon: '🧠',
      title: 'How We Use Your Information',
      content: [
        'To provide and improve our services.',
        'For account verification and security.',
        'To personalize user experience and send notifications.',
      ],
    },
    {
      id: 'protection',
      icon: '🛡️',
      title: 'Data Protection',
      content: [
        'All data is stored in secure, encrypted databases.',
        'Access control and authentication measures are enforced.',
        'Regular audits and compliance with data security laws.',
      ],
    },
    {
      id: 'sharing',
      icon: '🔒',
      title: 'Third-Party Sharing',
      content: [
        'We do not sell your data.',
        'We may share data with trusted service providers (e.g., analytics, email services).',
        'All third parties comply with strict data protection agreements.',
      ],
    },
    {
      id: 'rights',
      icon: '✅',
      title: 'Your Rights',
      content: [
        'You can access and update your information anytime.',
        'Request a copy of your data in portable format.',
        'Request deletion of your data from our system.',
      ],
    },
    {
      id: 'changes',
      icon: '📄',
      title: 'Changes to Policy',
      content: [
        'We may update this policy from time to time.',
        'You will be notified of significant changes via email or on the site.',
        'Your continued use means you accept the revised policy.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 mb-10">
          {sections.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="text-sm md:text-base text-gray-700 hover:text-blue-600 font-medium transition duration-200"
            >
              {sec.title.split(' ')[0]}
            </a>
          ))}
        </nav>

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">Privacy Policy</h1>

        {/* Sections */}
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="group relative bg-white border border-gray-200 rounded-2xl shadow-lg p-6 md:p-8 mb-10 transition-all duration-300 hover:shadow-2xl hover:border-blue-500"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-3xl md:text-4xl">{section.icon}</div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 group-hover:text-blue-600">
                {section.title}
              </h2>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-1">
              {section.content.map((point, index) => (
                <li key={index} className="text-base md:text-lg">{point}</li>
              ))}
            </ul>
          </section>
        ))}

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} YourCompany. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Privacy;
