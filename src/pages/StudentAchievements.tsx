
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Medal, Star, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const StudentAchievements = () => {
  const achievements = [
    {
      title: "National Programming Championship Winner",
      student: "Alex Johnson",
      description: "First place in the annual coding competition with innovative algorithm design.",
      award: "Gold Medal",
      date: "2024-01-15",
      category: "academic",
      icon: Trophy
    },
    {
      title: "Research Excellence Scholarship",
      student: "Maria Garcia",
      description: "Received full scholarship for groundbreaking research in artificial intelligence.",
      award: "Full Scholarship",
      date: "2024-01-10",
      category: "scholarship",
      icon: Award
    },
    {
      title: "International Design Competition",
      student: "David Chen",
      description: "Second place in global product design challenge for sustainable technology.",
      award: "Silver Medal",
      date: "2024-01-08",
      category: "design",
      icon: Medal
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-poppins">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-yellow-100 transition-colors mb-6">
              <ArrowLeft size={20} />
              <span>Back to Announcements</span>
            </Link>
            
            <div className="flex items-center gap-4 mb-4">
              <Trophy className="text-white text-4xl animate-glow" size={40} />
              <h1 className="text-5xl md:text-6xl font-bold font-poppins text-white drop-shadow-lg">
                🏆 Student Achievements
              </h1>
            </div>
            
            <p className="text-xl text-white text-opacity-90 font-poppins font-light max-w-2xl">
              Celebrating top-performing students, awards, and academic excellence
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-to-br from-yellow-50 to-orange-100 border-0 hover:scale-105 transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-500 text-white rounded-full">
                      <IconComponent size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-orange-900">{achievement.title}</h3>
                        <span className="text-sm text-orange-600 bg-orange-200 px-2 py-1 rounded-full">
                          {achievement.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="text-orange-600" size={16} />
                        <p className="text-orange-800 font-medium">{achievement.student}</p>
                      </div>
                      <p className="text-orange-800 mb-3">{achievement.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Award className="text-orange-600" size={16} />
                          <span className="text-orange-700 font-medium">{achievement.award}</span>
                        </div>
                        <span className="text-sm text-orange-600">{achievement.date}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default StudentAchievements;
