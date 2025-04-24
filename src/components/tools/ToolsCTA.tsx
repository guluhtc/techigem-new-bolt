import React from 'react';
import { Instagram, ArrowRight } from 'lucide-react';
import Button from '../Button';

const ToolsCTA: React.FC = () => {
  return (
    <div className="mt-20">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 transform -skew-y-2 rounded-3xl"></div>
        <div className="relative bg-white m-1 p-8 md:p-12 rounded-2xl shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                <Instagram size={24} className="text-purple-600" />
                <span className="text-lg font-semibold text-purple-600">25,000+ Monthly Users</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Ready to Grow Your Instagram?
              </h3>
              <p className="text-gray-600 mb-6 md:mb-0">
                Join thousands of creators who use our tools to enhance their Instagram presence.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg"
                className="group"
              >
                <span className="flex items-center">
                  Get Started Free
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
              >
                View All Tools
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsCTA;