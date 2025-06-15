import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, Trophy
} from 'lucide-react';

const StudentAchievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [sortOption, setSortOption] = useState('Newest');
  const [archivedAchievements, setArchivedAchievements] = useState([]);
  const [showArchived, setShowArchived] = useState(false);

  const openModal = (achievement) => setSelectedAchievement(achievement);
  const closeModal = () => setSelectedAchievement(null);

  const archiveAchievement = (achievement) => {
    setArchivedAchievements([...archivedAchievements, achievement]);
  };

  const unarchiveAchievement = (achievement) => {
    setArchivedAchievements(archivedAchievements.filter(a => a !== achievement));
  };


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
  const parseDate = (dateStr) => {
    if (!dateStr || typeof dateStr !== 'string') return null;
    const parsed = Date.parse(dateStr.replace(/\s+/g, ' '));
    return isNaN(parsed) ? null : new Date(parsed);
  };

  const filteredAchievements = achievements
    .filter((achievement) => {
      const isArchived = archivedAchievements.includes(achievement);
      if (isArchived) return false;

      const matchesSearch =
        achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        achievement.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
        achievement.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesYear = yearFilter ? achievement.year === yearFilter : true;
      const matchesDepartment = departmentFilter ? achievement.department === departmentFilter : true;
      const matchesCategory = categoryFilter ? achievement.category === categoryFilter : true;

      return matchesSearch && matchesYear && matchesDepartment && matchesCategory;
    })
    .sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      if (!dateA && !dateB) return 0;
      if (!dateA) return 1;
      if (!dateB) return -1;
      return sortOption === 'Newest' ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/20 to-yellow-50/20">
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

      <div className="max-w-7xl mx-auto px-6 mt-8 mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 flex-wrap">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="🔍 Search by student, title, or description"
            className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm placeholder-gray-400"
          />
          <select value={yearFilter} onChange={(e) => setYearFilter(e.target.value)} className="px-3 py-2 rounded-lg border border-gray-300 text-sm shadow-sm">
            <option value="">🎓 Year</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
          <select value={departmentFilter} onChange={(e) => setDepartmentFilter(e.target.value)} className="px-3 py-2 rounded-lg border border-gray-300 text-sm shadow-sm">
            <option value="">🏫 Department</option>
            {[...new Set(achievements.map(a => a.department))].map((dept, i) => (
              <option key={i} value={dept}>{dept}</option>
            ))}
          </select>
          <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="px-3 py-2 rounded-lg border border-gray-300 text-sm shadow-sm">
            <option value="">🏅 Category</option>
            {[...new Set(achievements.map(a => a.category))].map((cat, i) => (
              <option key={i} value={cat}>{cat}</option>
            ))}
          </select>
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="px-3 py-2 rounded-lg border border-gray-300 text-sm shadow-sm">
            <option value="Newest">⬆️ Newest First</option>
            <option value="Oldest">⬇️ Oldest First</option>
          </select>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 pb-12">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setShowArchived(!showArchived)}
            className="px-4 py-2 bg-amber-100 text-amber-700 border border-amber-300 rounded-full text-sm hover:bg-amber-200 transition"
          >
            {showArchived ? '🔙 Back to Achievements' : '🗄️ View Archived'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(showArchived ? archivedAchievements : filteredAchievements).length > 0 ? (
            (showArchived ? archivedAchievements : filteredAchievements).map((achievement, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition-all">
                <img src={achievement.image} alt={achievement.student} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-1">{achievement.title}</h3>
                <p className="text-sm text-gray-600 mb-1">{achievement.student} - {achievement.department} ({achievement.year})</p>
                <p className="text-sm text-gray-700 mb-2">{achievement.description}</p>
                <p className="text-xs text-gray-500">{achievement.date}</p>
                <button
                  onClick={() =>
                    showArchived
                      ? unarchiveAchievement(achievement)
                      : archiveAchievement(achievement)
                  }
                  className="mt-3 px-4 py-1.5 bg-yellow-100 text-yellow-700 border border-yellow-300 rounded-full text-xs hover:bg-yellow-200 transition"
                >
                  {showArchived ? 'Unarchive' : 'Archive'}
                </button>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">No achievements match your filters.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default StudentAchievements;
