import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Button from '../components/Button';

const CTASection: React.FC = () => {
  const benefits = [
    "Access to all Instagram tools",
    "Unlimited downloads and generations",
    "No login or registration required",
    "100% free, no hidden fees"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 to-pink-500 rounded-3xl shadow-xl">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-5">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
          </div>
          
          <div className="relative z-10 py-16 px-8 md:px-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Boost Your Instagram Game?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Start using our free Instagram tools today and take your social media presence to the next level.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <CheckCircle size={16} className="mr-2" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button
              variant="primary"
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 group"
            >
              Get Started For Free
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;