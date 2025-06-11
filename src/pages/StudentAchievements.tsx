
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Medal, Star, Award, Calendar, User, MapPin } from 'lucide-react';

const StudentAchievements = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const achievements = [
    {
      title: "National Programming Championship Winner",
      student: "Alex Johnson",
      department: "Computer Science",
      description: "First place in the annual coding competition with innovative algorithm design for sustainable computing solutions.",
      detailedInfo: "Alex developed a revolutionary sorting algorithm that reduces computational complexity by 30%, contributing to more sustainable software development practices. The solution has been adopted by three major tech companies.",
      award: "Gold Medal",
      date: "Jan 15, 2024",
      category: "Academic Excellence",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      prize: "$10,000 Scholarship"
    },
    {
      title: "Research Excellence Scholarship",
      student: "Maria Garcia",
      department: "Engineering",
      description: "Received full scholarship for groundbreaking research in artificial intelligence and machine learning applications.",
      detailedInfo: "Maria's research on neural networks for renewable energy optimization has led to 15% improvement in solar panel efficiency. Her work has been published in three peer-reviewed journals.",
      award: "Full Scholarship",
      date: "Jan 10, 2024",
      category: "Research",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=300&h=300&fit=crop&crop=face",
      prize: "$50,000 Grant"
    },
    {
      title: "International Design Competition",
      student: "David Chen",
      department: "Design",
      description: "Second place in global product design challenge for sustainable technology and environmental innovation.",
      detailedInfo: "David's eco-friendly packaging design using biodegradable materials has been licensed by a Fortune 500 company. The design reduces packaging waste by 40%.",
      award: "Silver Medal",
      date: "Jan 8, 2024",
      category: "Innovation",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      prize: "Industry Internship"
    },
    {
      title: "Medical Innovation Award",
      student: "Sarah Williams",
      department: "Biomedical Engineering",
      description: "Developed a low-cost diagnostic device for rural healthcare applications with 95% accuracy rate.",
      detailedInfo: "Sarah's portable diagnostic tool costs 80% less than existing solutions and can detect five common diseases in under 10 minutes. The device is being tested in three developing countries.",
      award: "Innovation Prize",
      date: "Jan 5, 2024",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      prize: "Patent Filing Support"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Academic Excellence': return 'from-blue-400 to-cyan-400';
      case 'Research': return 'from-purple-400 to-pink-400';
      case 'Innovation': return 'from-green-400 to-emerald-400';
      case 'Healthcare': return 'from-red-400 to-rose-400';
      default: return 'from-gray-400 to-slate-400';
    }
  };

  const handleCardClick = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-yellow-50/20">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors mb-4 text-sm font-medium group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Announcements
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
              <Trophy className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                Student Achievements
              </h1>
              <p className="text-gray-600 mt-1">Celebrating academic excellence and student recognition</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="relative h-96 perspective-1000 cursor-pointer"
              onClick={() => handleCardClick(index)}
            >
              <div className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
                flippedCard === index ? 'rotate-y-180' : ''
              }`}>
                {/* Front of card */}
                <div className="absolute inset-0 backface-hidden bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  {/* Student image */}
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={achievement.image} 
                      alt={achievement.student}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Award badge */}
                    <div className={`absolute top-4 right-4 bg-gradient-to-r ${getCategoryColor(achievement.category)} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                      {achievement.category}
                    </div>
                    
                    {/* Trophy icon */}
                    <div className="absolute bottom-4 left-4 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <Trophy className="text-white" size={20} />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start gap-2 mb-3">
                      <Star className="text-orange-600 mt-1 flex-shrink-0" size={16} />
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm leading-tight">{achievement.title}</h3>
                        <p className="text-orange-600 font-medium text-sm">{achievement.student}</p>
                        <p className="text-xs text-gray-600">{achievement.department}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                      {achievement.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Award className="text-orange-500" size={12} />
                        <span className="font-medium">{achievement.award}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={12} className="text-orange-500" />
                        <span>{achievement.date}</span>
                      </div>
                    </div>
                    
                    <div className="mt-3 text-center">
                      <span className="text-xs text-gray-400">Click to learn more</span>
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-orange-500 via-orange-600 to-yellow-600 rounded-2xl border border-orange-300 overflow-hidden shadow-lg">
                  <div className="p-6 h-full flex flex-col justify-between text-white">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Medal className="text-yellow-200" size={24} />
                        <h3 className="font-bold text-lg">{achievement.student}</h3>
                      </div>
                      
                      <p className="text-orange-100 text-sm leading-relaxed mb-4">
                        {achievement.detailedInfo}
                      </p>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin size={14} className="text-yellow-200" />
                          <span className="text-orange-100">{achievement.department}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star size={14} className="text-yellow-200" />
                          <span className="text-orange-100">{achievement.prize}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <span className="text-xs text-orange-200">Click to flip back</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StudentAchievements;
