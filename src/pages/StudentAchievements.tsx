
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Medal, Star, Award, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const StudentAchievements = () => {
  const achievements = [
    {
      title: "National Programming Championship Winner",
      student: "Alex Johnson",
      description: "First place in the annual coding competition with innovative algorithm design for sustainable computing solutions.",
      award: "Gold Medal",
      date: "Jan 15, 2024",
      category: "Academic Excellence",
      department: "Computer Science"
    },
    {
      title: "Research Excellence Scholarship",
      student: "Maria Garcia",
      description: "Received full scholarship for groundbreaking research in artificial intelligence and machine learning applications.",
      award: "Full Scholarship",
      date: "Jan 10, 2024",
      category: "Research",
      department: "Engineering"
    },
    {
      title: "International Design Competition",
      student: "David Chen",
      description: "Second place in global product design challenge for sustainable technology and environmental innovation.",
      award: "Silver Medal",
      date: "Jan 8, 2024",
      category: "Innovation",
      department: "Design"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50/30">
      <header className="bg-white border-b border-gray-200/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors mb-6 text-sm font-medium">
            <ArrowLeft size={16} />
            Back to Announcements
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
              <span className="text-white text-2xl">🏆</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">Student Achievements</h1>
              <p className="text-gray-600">Celebrating academic excellence and student recognition</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="bg-white/80 border border-gray-200/50 hover:shadow-md transition-all duration-200 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Trophy className="text-orange-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{achievement.title}</h3>
                      <span className="px-2 py-1 text-xs font-medium bg-orange-100 text-orange-700 rounded-full">
                        {achievement.category}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="text-orange-600" size={16} />
                      <span className="font-medium text-gray-900">{achievement.student}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-sm text-gray-600">{achievement.department}</span>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">{achievement.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Award className="text-orange-500" size={14} />
                          <span className="font-medium">{achievement.award}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} className="text-orange-500" />
                          <span>{achievement.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StudentAchievements;
