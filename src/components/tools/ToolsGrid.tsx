import React from 'react';
import { Download, Image, TrendingUp, BarChart, MessageSquare, Users } from 'lucide-react';
import ToolCard from '../ToolCard';

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

const ToolsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {tools.map((tool, index) => (
        <div key={index} className="transform hover:-translate-y-2 transition-all duration-300">
          <ToolCard {...tool} />
        </div>
      ))}
    </div>
  );
};

export default ToolsGrid;