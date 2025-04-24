import React from 'react';
import { Download, Image, TrendingUp, BarChart, MessageSquare, Users, Instagram, ThumbsUp } from 'lucide-react';
import ToolCard from '../components/ToolCard';
import Button from '../components/Button';

const ToolsSection: React.FC = () => {
  const tools = [
    {
      title: 'Photo Downloader',
      description: 'Download high-quality Instagram photos in just one click.',
      icon: Image,
      iconColor: 'text-purple-600',
      bgGradient: 'from-purple-100 to-pink-100',
      link: '#'
    },
    {
      title: 'Story Downloader',
      description: 'Save Instagram stories before they disappear in 24 hours.',
      icon: Download,
      iconColor: 'text-blue-600',
      bgGradient: 'from-blue-100 to-cyan-100',
      link: '#'
    },
    {
      title: 'Engagement Tracker',
      description: 'Track your engagement rates across all your posts.',
      icon: TrendingUp,
      iconColor: 'text-green-600',
      bgGradient: 'from-green-100 to-emerald-100',
      link: '#'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics to understand your audience better.',
      icon: BarChart,
      iconColor: 'text-orange-600',
      bgGradient: 'from-orange-100 to-yellow-100',
      link: '#'
    },
    {
      title: 'Caption Generator',
      description: 'Create engaging captions to boost your post performance.',
      icon: MessageSquare,
      iconColor: 'text-pink-600',
      bgGradient: 'from-pink-100 to-red-100',
      link: '#'
    },
    {
      title: 'Follower Insights',
      description: 'Analyze your followers to improve your content strategy.',
      icon: Users,
      iconColor: 'text-indigo-600',
      bgGradient: 'from-indigo-100 to-purple-100',
      link: '#'
    },
  ];

  return (
    <section id="tools" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <span className="px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
              Free Instagram Tools
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            All the Tools You Need in One Place
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Access our comprehensive suite of free Instagram tools designed to help you create, download, and analyze content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 shadow-xl">
            <div className="bg-white p-8 rounded-xl flex flex-col items-center">
              <div className="bg-purple-100 p-4 rounded-full mb-6">
                <Instagram size={32} className="text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Need More Instagram Tools?
              </h3>
              <p className="text-gray-700 mb-6 max-w-md">
                We're constantly adding new tools to help you grow your Instagram presence. Sign up to get notified when we release new features.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg">
                  <ThumbsUp size={18} className="mr-2" /> View All Tools
                </Button>
                <Button variant="outline" size="lg">
                  Request a Tool
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;