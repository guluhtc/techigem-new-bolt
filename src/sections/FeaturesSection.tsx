import React from 'react';
import { Shield, Zap, Globe, Clock, Lock, Heart } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

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
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-4">
              <span className="px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Features that Make Us Stand Out
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We've built our tools with your needs in mind, focusing on security, speed, and simplicity to enhance your Instagram experience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-white p-4 rounded-2xl shadow-xl">
              <img 
                src="https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Instagram Features" 
                className="rounded-xl w-full"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-300 opacity-30 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-0 right-0 w-48 h-48 bg-blue-300 opacity-30 rounded-full blur-3xl"></div>
            
            {/* Stats */}
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Heart size={20} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">98.7%</h4>
                  <p className="text-sm text-gray-600">User satisfaction</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Zap size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">2.5M+</h4>
                  <p className="text-sm text-gray-600">Monthly users</p>
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