
import React from 'react';
import AnnouncementHeader from '@/components/AnnouncementHeader';
import AnnouncementCard from '@/components/AnnouncementCard';

const Index = () => {
  const announcements = [
    {
      title: "News & Notifications",
      description: "Official updates, notices, and institutional communications. Stay informed about policy changes and important deadlines.",
      emoji: "📬",
      bgClass: "bg-gradient-to-br from-blue-50/80 to-cyan-50/80 border border-blue-200/30",
      textColorClass: "text-blue-800",
      delay: 100,
      navigateTo: "/news-notifications"
    },
    {
      title: "Events Calendar",
      description: "Academic and cultural events calendar. Never miss convocations, seminars, workshops, or institutional festivities.",
      emoji: "📅",
      bgClass: "bg-gradient-to-br from-purple-50/80 to-pink-50/80 border border-purple-200/30",
      textColorClass: "text-purple-800",
      delay: 200,
      navigateTo: "/events-calendar"
    },
    {
      title: "Photo Gallery",
      description: "Visual documentation of institutional moments. Browse categorized albums of ceremonies and events.",
      emoji: "📷",
      bgClass: "bg-gradient-to-br from-emerald-50/80 to-teal-50/80 border border-emerald-200/30",
      textColorClass: "text-emerald-800",
      delay: 300,
      navigateTo: "/photo-gallery"
    },
    {
      title: "Media Coverage",
      description: "External recognition and press coverage. Showcasing institutional presence in news and media outlets.",
      emoji: "📰",
      bgClass: "bg-gradient-to-br from-rose-50/80 to-orange-50/80 border border-rose-200/30",
      textColorClass: "text-rose-800",
      delay: 400,
      navigateTo: "/media-coverage"
    },
    {
      title: "Student Achievements",
      description: "Celebrating academic excellence and student recognition. Awards, scholarships, and outstanding performances.",
      emoji: "🏆",
      bgClass: "bg-gradient-to-br from-amber-50/80 to-yellow-50/80 border border-amber-200/30",
      textColorClass: "text-amber-800",
      delay: 500,
      navigateTo: "/student-achievements"
    },
    {
      title: "Faculty & Research",
      description: "Research highlights and faculty achievements. Publications, grants, and academic breakthroughs.",
      emoji: "🔬",
      bgClass: "bg-gradient-to-br from-indigo-50/80 to-violet-50/80 border border-indigo-200/30",
      textColorClass: "text-indigo-800",
      delay: 600,
      navigateTo: "/faculty-research"
    },
{
      title: "Awards & Recognition",
      description: "  Celebrating outstanding achievements and contributions across academics, research, innovation, and cultural excellence.",
      emoji: "🏅",
      bgClass: "bg-gradient-to-br from-indigo-50/80 to-violet-50/80 border border-indigo-200/30",
      textColorClass: "text-indigo-800",
      delay: 600,
      navigateTo: "/Awards"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <AnnouncementHeader />
      
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </main>
    </div>
  );
};

export default Index;
