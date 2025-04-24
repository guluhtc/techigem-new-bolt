import React from 'react';
import { Download, ArrowRight, Instagram, Sparkles, Zap, Users, LineChart, Shield } from 'lucide-react';
import Button from '../components/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden relative">
      {/* Floating elements on left and right */}
      <div className="absolute left-0 top-1/4 w-48 md:w-64 h-48 md:h-64 bg-purple-300/30 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
      <div className="absolute right-0 top-1/3 w-56 md:w-72 h-56 md:h-72 bg-pink-300/30 rounded-full mix-blend-multiply filter blur-xl animate-float delay-300"></div>
      <div className="absolute left-1/4 bottom-0 w-72 md:w-96 h-72 md:h-96 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-xl animate-float delay-700"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center relative mb-12 md:mb-16">
            {/* Floating badges */}
            <div className="absolute -left-4 md:-left-20 top-0 transform bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg animate-float">
              <div className="flex items-center space-x-2">
                <Sparkles size={16} className="text-yellow-500" />
                <span className="text-sm font-medium whitespace-nowrap">AI-Powered Tools</span>
              </div>
            </div>
            <div className="absolute -right-4 md:-right-20 top-1/4 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg animate-float delay-300">
              <div className="flex items-center space-x-2">
                <Zap size={16} className="text-purple-500" />
                <span className="text-sm font-medium whitespace-nowrap">Lightning Fast</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6 px-4">
              <span className="relative inline-block">
                <span className="relative z-10 text-gray-900">Transform Your </span>
                <div className="absolute bottom-0 left-0 w-full h-2 md:h-3 bg-purple-200 transform -skew-x-12"></div>
              </span>
              <br className="hidden sm:block" />
              <span className="relative mt-2 sm:mt-0">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 animate-gradient">
                  Instagram Game
                </span>
                <div className="absolute -right-4 md:-right-8 -top-4 md:-top-8">
                  <div className="relative w-12 md:w-16 h-12 md:h-16 animate-float delay-700">
                    <div className="absolute inset-0 bg-pink-200 rounded-full animate-ping opacity-20"></div>
                    <div className="relative flex items-center justify-center w-full h-full bg-gradient-to-br from-pink-500 to-purple-600 rounded-full">
                      <Instagram size={20} className="text-white" />
                    </div>
                  </div>
                </div>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8 max-w-2xl mx-auto px-4 relative">
              Unlock the full potential of your Instagram presence with our suite of
              <span className="font-semibold text-purple-600"> premium-quality </span> 
              tools, downloaders, and AI-powered content generators - 
              <span className="font-semibold text-pink-500"> completely free</span>.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center px-4">
              <Button
                variant="primary"
                size="lg"
                className="group relative overflow-hidden w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 animate-gradient-x"></span>
                <span className="relative flex items-center justify-center">
                  <Download size={18} className="mr-2" />
                  Start Download
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group hover:bg-purple-50 w-full sm:w-auto"
              >
                Explore All Tools
              </Button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 px-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all animate-float">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <LineChart size={24} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Analytics</h3>
                  <p className="text-sm text-gray-600">Track your growth</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-purple-100 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-purple-500 rounded-full"></div>
                </div>
                <div className="h-2 bg-pink-100 rounded-full overflow-hidden">
                  <div className="w-1/2 h-full bg-pink-500 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all animate-float delay-150">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Shield size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Security</h3>
                  <p className="text-sm text-gray-600">100% Safe & Secure</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Protected</span>
                </div>
                <span className="text-green-500 font-medium">Active</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all animate-float delay-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-pink-100 p-3 rounded-xl">
                  <Users size={24} className="text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Community</h3>
                  <p className="text-sm text-gray-600">Join 25k+ users</p>
                </div>
              </div>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br ${
                      i === 1 ? 'from-purple-500 to-pink-500' :
                      i === 2 ? 'from-blue-500 to-teal-500' :
                      i === 3 ? 'from-yellow-500 to-red-500' :
                      'from-green-500 to-emerald-500'
                    }`}
                  ></div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600">
                  +21k
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;