import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Blog = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [email, setEmail] = useState('');

  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      category: 'health-articles',
      title: 'Diet high in fiber, fermented foods could keep inflammatory diseases at bay',
      excerpt: 'Learn about the key factors that contribute to heart health and how to maintain a healthy cardiovascular system.',
      image: assets.blog1,
      date: '2024-03-15',
      author: 'Dr. Sarah Johnson',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      category: 'medical-news',
      title: 'Latest Breakthroughs in Cancer Research',
      excerpt: 'Recent developments in cancer treatment and promising new therapies on the horizon.',
      image: assets.blog2,
      date: '2024-03-14',
      author: 'Dr. Michael Chen',
      readTime: '4 min read',
      featured: true
    },
    {
      id: 3,
      category: 'wellness-tips',
      title: '10 Simple Ways to Improve Your Mental Health',
      excerpt: 'Practical tips and strategies for maintaining good mental health in today\'s fast-paced world.',
      image: assets.blog3,
      date: '2024-03-13',
      author: 'Dr. Emily Brown',
      readTime: '3 min read'
    },
    {
      id: 4,
      category: 'disease-prevention',
      title: 'Preventing Diabetes: Lifestyle Changes That Matter',
      excerpt: 'Learn about the key lifestyle modifications that can help prevent type 2 diabetes.',
      image: assets.blog4,
      date: '2024-03-12',
      author: 'Dr. James Wilson',
      readTime: '6 min read'
    },
    {
      id: 5,
      category: 'healthy-lifestyle',
      title: 'The Mediterranean Diet: A Path to Better Health',
      excerpt: 'Discover the benefits of the Mediterranean diet and how to incorporate it into your lifestyle.',
      image: assets.blog5,
      date: '2024-03-11',
      author: 'Dr. Lisa Martinez',
      readTime: '4 min read'
    },
    {
      id: 6,
      category: 'health-articles',
      title: 'Understanding and Managing Chronic Pain',
      excerpt: 'Comprehensive approaches to dealing with persistent pain conditions.',
      image: assets.blog6,
      date: '2024-03-10',
      author: 'Dr. Robert Taylor',
      readTime: '7 min read'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'health-articles', name: 'Health Articles' },
    { id: 'medical-news', name: 'Medical News' },
    { id: 'wellness-tips', name: 'Wellness Tips' },
    { id: 'disease-prevention', name: 'Disease Prevention' },
    { id: 'healthy-lifestyle', name: 'Healthy Lifestyle' }
  ];

  const filteredPosts = activeTab === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeTab);

  const featuredPosts = blogPosts.filter(post => post.featured);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Health Insights & Wellness Tips</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Evidence-based medical information and health advice from our team of healthcare professionals
          </p>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Articles</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredPosts.map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">By {post.author}</span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        {/* Category Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-xs font-medium text-gray-500">By {post.author}</span>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-24 bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-blue-600 p-10 text-white flex items-center">
              <div>
                <h2 className="text-2xl font-bold mb-3">Stay Updated with Health News</h2>
                <p className="mb-6 opacity-90">
                  Subscribe to our newsletter for weekly health tips, medical breakthroughs, and wellness advice.
                </p>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Join 10,000+ subscribers</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-10 flex items-center">
              <form onSubmit={handleSubscribe} className="w-full">
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300"
                >
                  Subscribe Now
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;