import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, Trophy, Award, Calendar, Star, BookOpen, X
} from 'lucide-react';

const StudentAchievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const openModal = (achievement) => setSelectedAchievement(achievement);
  const closeModal = () => setSelectedAchievement(null);

  const achievements = [
    {
      title: "National Programming Championship Winner",
      student: "Alex Johnson",
      department: "Computer Science",
      year: "2024",
      description: "First place in the annual coding competition with innovative algorithm design for sustainable computing solutions.",
      detailedInfo: "Alex developed a revolutionary sorting algorithm that reduces computational complexity by 30%, contributing to more sustainable software development practices. The solution has been adopted by three major tech companies.",
      award: "Gold Medal",
      date: "Jan 15, 2024",
      category: "Academic Excellence",
      image: "https://images.unsplash.com/photo-1637073849667-91120a924221?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      prize: "$10,000 Scholarship",
      icon: "💻"
    },
    {
      title: "Research Excellence Scholarship",
      student: "Maria Garcia",
      department: "Engineering",
      year: "2024",
      description: "Received full scholarship for groundbreaking research in artificial intelligence and machine learning applications.",
      detailedInfo: "Maria's research on neural networks for renewable energy optimization has led to 15% improvement in solar panel efficiency. Her work has been published in three peer-reviewed journals.",
      award: "Full Scholarship",
      date: "Jan 10, 2024",
      category: "Research",
      image: "https://images.unsplash.com/photo-1588600878108-578307a3cc9d?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      prize: "$50,000 Grant",
      icon: "🔬"
    },
    {
      title: "International Design Competition",
      student: "David Chen",
      department: "Design",
      year: "2024",
      description: "Second place in global product design challenge for sustainable technology and environmental innovation.",
      detailedInfo: "David's eco-friendly packaging design using biodegradable materials has been licensed by a Fortune 500 company. The design reduces packaging waste by 40%.",
      award: "Silver Medal",
      date: "Jan 8, 2024",
      category: "Innovation",
      image: "https://plus.unsplash.com/premium_photo-1661770132071-026114fffb61?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      prize: "Industry Internship",
      icon: "🎨"
    },
    {
      title: "Medical Innovation Award",
      student: "Sarah Williams",
      department: "Biomedical Engineering",
      year: "2024",
      description: "Developed a low-cost diagnostic device for rural healthcare applications with 95% accuracy rate.",
      detailedInfo: "Sarah's portable diagnostic tool costs 80% less than existing solutions and can detect five common diseases in under 10 minutes. The device is being tested in three developing countries.",
      award: "Innovation Prize",
      date: "Jan 5, 2024",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      prize: "Patent Filing Support",
      icon: "🏥"
    },
    {
      title: "Literary Excellence Award",
      student: "Emma Thompson",
      department: "Literature",
      year: "2024",
      description: "Won the prestigious national poetry competition with a collection focusing on climate change awareness.",
      detailedInfo: "Emma's poetry collection 'Voices of the Earth' has been translated into 12 languages and is being used in environmental education programs across universities.",
      award: "Poetry Prize",
      date: "Dec 28, 2023",
      category: "Arts",
      image: "https://images.unsplash.com/photo-1573169790341-483eec303e04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      prize: "Publishing Contract",
      icon: "📚"
    },
    {
      title: "Sports Excellence Recognition",
      student: "Michael Rodriguez",
      department: "Sports Science",
      year: "2024",
      description: "Set new university record in track and field, qualifying for national championships.",
      detailedInfo: "Michael broke the 400m university record that had stood for 15 years and represents the institution at national level competitions.",
      award: "Sports Medal",
      date: "Dec 20, 2023",
      category: "Sports",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      prize: "Athletic Scholarship",
      icon: "⚡"
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Academic Excellence': return 'from-blue-400/80 to-cyan-400/80';
      case 'Research': return 'from-purple-400/80 to-pink-400/80';
      case 'Innovation': return 'from-green-400/80 to-emerald-400/80';
      case 'Healthcare': return 'from-red-400/80 to-rose-400/80';
      case 'Arts': return 'from-orange-400/80 to-yellow-400/80';
      case 'Sports': return 'from-indigo-400/80 to-violet-400/80';
      default: return 'from-gray-400/80 to-slate-400/80';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/20 to-yellow-50/20">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors mb-4 text-sm font-medium group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Announcements
          </Link>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
              <Trophy className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                Student Achievements
              </h1>
              <p className="text-gray-600 mt-1">Celebrating academic excellence and student recognition</p>
            </div>
          </div>
        </div>
      </header>

      {/* Cards */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 hover:border-amber-300/60"
            >
              <div className={`absolute top-0 right-0 bg-gradient-to-r ${getCategoryColor(achievement.category)} text-white px-4 py-2 rounded-bl-2xl text-xs font-medium z-10`}>
                {achievement.category}
              </div>

              <div className="relative h-56 overflow-hidden">
                <img src={achievement.image} alt={achievement.student} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-amber-500/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-white text-xl font-bold">{achievement.student}</h3>
                  <p className="text-white/90 text-sm">{achievement.department} • Class of {achievement.year}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Trophy className="text-amber-600" size={16} />
                  <h4 className="font-bold text-gray-900 text-lg group-hover:text-amber-700 transition-colors line-clamp-1">
                    {achievement.title}
                  </h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">{achievement.description}</p>
                <div className="space-y-2 text-xs text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Award className="text-amber-500" size={12} />
                    <span className="font-medium">{achievement.award}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={12} className="text-amber-500" />
                    <span>{achievement.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star size={12} className="text-amber-500" />
                    <span className="font-medium text-amber-700">{achievement.prize}</span>
                  </div>
                </div>

                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => openModal(achievement)}
                    className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-white py-3 px-4 rounded-2xl font-medium hover:from-amber-600 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <BookOpen size={16} />
                    <span>View Full Achievement</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
    {selectedAchievement && (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
    <div className="bg-white max-w-lg w-full rounded-3xl shadow-2xl p-6 relative">
      <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-black transition">
        <X size={20} />
      </button>

      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <img src={selectedAchievement.image} alt="Student" className="w-14 h-14 rounded-xl object-cover" />
        <div>
          <h2 className="text-xl font-bold text-purple-700">{selectedAchievement.title}</h2>
          <p className="text-sm text-gray-500">{selectedAchievement.category}</p>
        </div>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-gray-50 rounded-xl p-3 flex items-start gap-2">
          <Calendar className="text-purple-500" size={18} />
          <div>
            <p className="text-xs text-gray-500">Date</p>
            <p className="text-sm font-medium">{selectedAchievement.date}</p>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 flex items-start gap-2">
          <Star className="text-purple-500" size={18} />
          <div>
            <p className="text-xs text-gray-500">Prize</p>
            <p className="text-sm font-medium">{selectedAchievement.prize}</p>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 flex items-start gap-2">
          <Award className="text-purple-500" size={18} />
          <div>
            <p className="text-xs text-gray-500">Award</p>
            <p className="text-sm font-medium">{selectedAchievement.award}</p>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 flex items-start gap-2">
          <BookOpen className="text-purple-500" size={18} />
          <div>
            <p className="text-xs text-gray-500">Department</p>
            <p className="text-sm font-medium">{selectedAchievement.department}</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-purple-50/50 rounded-xl px-4 py-3 text-sm text-gray-700 border border-purple-100">
        {selectedAchievement.detailedInfo}
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default StudentAchievements;
