import React from 'react';
import { Shield, Zap, Globe, Clock, Lock, Heart, ArrowRight } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import Button from '../components/Button';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Secure & Private',
      description: 'Your data is never stored on our servers and all tools work with end-to-end encryption.',
      icon: Shield,
      iconColor: 'text-purple-600'
    },
    {
      title: 'Lightning Fast',
      description: 'All our tools are optimized for speed, allowing you to download and generate content quickly.',
      icon: Zap,
      iconColor: 'text-yellow-600'
    },
    {
      title: 'Works Anywhere',
      description: 'Access our tools from any device - desktop, tablet, or mobile - with a responsive design.',
      icon: Globe,
      iconColor: 'text-blue-600'
    },
    {
      title: 'Real-time Results',
      description: 'Get instant results and analytics to help you improve your Instagram strategy.',
      icon: Clock,
      iconColor: 'text-green-600'
    },
    {
      title: 'No Login Required',
      description: 'Use our tools without creating an account or providing your Instagram credentials.',
      icon: Lock,
      iconColor: 'text-red-600'
    },
    {
      title: 'Completely Free',
      description: 'All our tools are free to use with no hidden fees or subscription requirements.',
      icon: Heart,
      iconColor: 'text-pink-600'
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md mb-6">
              <Shield size={16} className="text-purple-600" />
              <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Why Choose Us
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Features that Make Us
              <span className="relative inline-block ml-3">
                Stand Out
                <div className="absolute bottom-1 left-0 w-full h-2 bg-purple-200 transform -skew-x-12"></div>
              </span>
            </h2>

            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              We've built our tools with your needs in mind, focusing on security, speed, and simplicity to enhance your Instagram experience.
            </p>
          </div>
            
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="transform hover:-translate-y-1 transition-all duration-300"
              >
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="primary"
              size="lg"
              className="group"
            >
              <span className="flex items-center">
                Explore All Features
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-4 rounded-xl">
                  <Heart size={24} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-gray-900 mb-1">98.7%</h4>
                  <p className="text-gray-600">User satisfaction rate</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <Zap size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-gray-900 mb-1">2.5M+</h4>
                  <p className="text-gray-600">Monthly active users</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;