
import React from 'react';
import AnnouncementHeader from '@/components/AnnouncementHeader';
import AnnouncementCard from '@/components/AnnouncementCard';

const Index = () => {
  const announcements = [
    {
      title: "News & Notifications",
      description: "For official updates, notices, and alerts. Stay informed about policy changes, deadlines, and important institutional communications.",
      emoji: "📬",
      bgClass: "bg-gradient-to-br from-blue-100 to-blue-200",
      textColorClass: "text-blue-900",
      delay: 100,
      navigateTo: "/news-notifications"
    },
    {
      title: "Events Calendar",
      description: "Academic, cultural, and administrative events. Never miss convocations, seminars, workshops, or cultural festivities.",
      emoji: "📅",
      bgClass: "bg-gradient-to-br from-red-100 to-red-200",
      textColorClass: "text-red-900",
      delay: 200,
      navigateTo: "/events-calendar"
    },
    {
      title: "Photo Gallery",
      description: "Categorized albums featuring Convocation ceremonies, Fests, Workshops, and memorable institutional moments.",
      emoji: "📷",
      bgClass: "bg-gradient-to-br from-green-100 to-green-200",
      textColorClass: "text-green-900",
      delay: 300,
      navigateTo: "/photo-gallery"
    },
    {
      title: "Media Coverage",
      description: "Articles, press releases, and external mentions. Showcasing our institution's presence in news and media.",
      emoji: "📰",
      bgClass: "bg-gradient-to-br from-purple-100 to-indigo-200",
      textColorClass: "text-purple-900",
      delay: 400,
      navigateTo: "/media-coverage"
    },
    {
      title: "Student Achievements",
      description: "Highlight top-performing students, awards, scholarships, and academic excellence recognitions.",
      emoji: "🏆",
      bgClass: "bg-gradient-to-br from-yellow-100 to-orange-200",
      textColorClass: "text-orange-900",
      delay: 500,
      navigateTo: "/student-achievements"
    },
    {
      title: "Faculty & Research Highlights",
      description: "Spotlight on publications, grants, research breakthroughs, and faculty achievements in media features.",
      emoji: "🔬",
      bgClass: "bg-gradient-to-br from-teal-100 to-cyan-200",
      textColorClass: "text-teal-900",
      delay: 600,
      navigateTo: "/faculty-research"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-poppins">
      <AnnouncementHeader />
      
      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Grid layout for cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {announcements.map((announcement, index) => (
            <AnnouncementCard
              key={announcement.title}
              title={announcement.title}
              description={announcement.description}
              emoji={announcement.emoji}
              bgClass={announcement.bgClass}
              textColorClass={announcement.textColorClass}
              delay={announcement.delay}
              navigateTo={announcement.navigateTo}
            />
          ))}
        </div>
        
        {/* Decorative elements */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-400 via-green-400 to-blue-500 rounded-full text-white font-medium shadow-lg">
            <span className="animate-pulse">✨</span>
            <span>Stay tuned for more updates</span>
            <span className="animate-pulse">✨</span>
          </div>
        </div>
      </main>
      
      {/* Footer decoration */}
      <footer className="mt-20 bg-gradient-to-r from-red-400 via-green-400 to-blue-500 h-2"></footer>
    </div>
  );
};

export default Index;
