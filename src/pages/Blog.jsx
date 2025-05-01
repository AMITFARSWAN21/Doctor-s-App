import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Blog = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Sample blog data - In a real app, this would come from an API or database
  const blogPosts = [
    {
      id: 1,
      category: 'health-articles',
      title: 'Diet high in fiber, fermented foods could keep inflammatory diseases at bay',
      excerpt: 'Learn about the key factors that contribute to heart health and how to maintain a healthy cardiovascular system.',
      image: assets.blog1,
      date: '2024-03-15',
      author: 'Dr. Sarah Johnson',
      readTime: '5 min read'
    },
    {
      id: 2,
      category: 'medical-news',
      title: 'Latest Breakthroughs in Cancer Research',
      excerpt: 'Recent developments in cancer treatment and promising new therapies on the horizon.',
      image: assets.blog2,
      date: '2024-03-14',
      author: 'Dr. Michael Chen',
      readTime: '4 min read'
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

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Health Blog & Tips</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest health news, medical insights, and wellness tips from our expert doctors.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${activeTab === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {post.author}</span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-blue-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-6">Get the latest health tips and medical news delivered to your inbox.</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-800"
            />
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog; 