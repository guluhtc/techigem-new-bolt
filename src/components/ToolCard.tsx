import React from 'react';
import { DivideIcon as LucideIcon, ArrowRight } from 'lucide-react';

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgGradient?: string;
  link: string;
}

const ToolCard: React.FC<ToolCardProps> = ({
  title,
  description,
  icon: Icon,
  iconColor = 'text-purple-600',
  bgGradient = 'from-purple-100 to-pink-100',
  link
}) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className={`p-6 flex flex-col h-full`}>
        <div className={`bg-gradient-to-br ${bgGradient} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={24} className={iconColor} />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <a 
          href={link}
          className="inline-flex items-center text-purple-600 font-medium group/link"
        >
          Try for Free
          <ArrowRight size={16} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default ToolCard;