
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Bell, AlertCircle } from 'lucide-react';

const NewsNotifications = () => {
  const newsItems = [
    {
      title: "Academic Calendar Update",
      description: "Important changes to the upcoming semester schedule and examination dates have been finalized. All students are advised to check their course schedules and make necessary adjustments.",
      type: "Academic",
      date: "Jan 15, 2024",
      priority: "high",
      time: "2 days ago"
    },
    {
      title: "New Policy Guidelines",
      description: "Updated student conduct and academic integrity policies are now in effect across all departments. Please review the new guidelines in the student handbook.",
      type: "Policy",
      date: "Jan 12, 2024",
      priority: "medium",
      time: "5 days ago"
    },
    {
      title: "Registration Deadline",
      description: "Final reminder: Course registration for the spring semester closes on January 20th at 11:59 PM. Late registrations will incur additional fees.",
      type: "Deadline",
      date: "Jan 10, 2024",
      priority: "high",
      time: "1 week ago"
    },
    {
      title: "Library Hours Extended",
      description: "Starting next week, the main library will be open 24/7 during exam periods to accommodate student study needs.",
      type: "Service",
      date: "Jan 8, 2024",
      priority: "low",
      time: "1 week ago"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-gradient-to-r from-red-400 to-pink-400';
      case 'medium': return 'bg-gradient-to-r from-blue-400 to-cyan-400';
      default: return 'bg-gradient-to-r from-green-400 to-emerald-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors mb-4 text-sm font-medium group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Announcements
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Bell className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                News & Notifications
              </h1>
              <p className="text-gray-600 mt-1">Official updates and institutional communications</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 via-purple-300 to-pink-300 rounded-full"></div>
          
          <div className="space-y-8">
            {newsItems.map((item, index) => (
              <div key={index} className="relative flex items-start gap-6 group">
                {/* Timeline badge */}
                <div className={`relative z-10 w-16 h-16 ${getPriorityColor(item.priority)} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.priority === 'high' ? (
                    <AlertCircle className="text-white" size={24} />
                  ) : (
                    <Bell className="text-white" size={20} />
                  )}
                </div>
                
                {/* Content card */}
                <div className="flex-1 bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:bg-white/90 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group-hover:border-purple-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                        {item.title}
                      </h3>
                      <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full">
                        {item.type}
                      </span>
                      {item.priority === 'high' && (
                        <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-red-100 to-pink-100 text-red-700 rounded-full animate-pulse">
                          Urgent
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-sm text-gray-500 mb-1">
                        <Calendar size={14} />
                        <span>{item.date}</span>
                      </div>
                      <span className="text-xs text-gray-400">{item.time}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewsNotifications;
