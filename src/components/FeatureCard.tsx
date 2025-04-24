import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  iconColor = 'text-purple-600'
}) => {
  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="flex items-start space-x-4">
        <div className="bg-purple-100/80 rounded-xl p-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          <Icon size={24} className={`${iconColor} transition-colors duration-300`} />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-purple-600 transition-colors duration-300">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;