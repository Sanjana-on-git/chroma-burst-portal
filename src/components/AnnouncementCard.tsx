
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface AnnouncementCardProps {
  title: string;
  description: string;
  emoji: string;
  bgClass: string;
  textColorClass?: string;
  delay?: number;
  navigateTo: string;
}

const AnnouncementCard: React.FC<AnnouncementCardProps> = ({
  title,
  description,
  emoji,
  bgClass,
  textColorClass = "text-gray-800",
  delay = 0,
  navigateTo
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigateTo);
  };

  return (
    <Card 
      className={`${bgClass} transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer animate-slide-in backdrop-blur-sm`}
      style={{ animationDelay: `${delay}ms` }}
      onClick={handleClick}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="text-3xl">{emoji}</div>
          <ArrowRight className={`${textColorClass} opacity-0 group-hover:opacity-100 transition-opacity`} size={20} />
        </div>
        
        <h3 className={`text-xl font-semibold mb-3 ${textColorClass}`}>
          {title}
        </h3>
        
        <p className={`${textColorClass} opacity-80 text-sm leading-relaxed`}>
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default AnnouncementCard;
