import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Bell, AlertCircle, Filter, Search, ClipboardList } from 'lucide-react';

const NewsNotifications = () => {
  const newsItems = [
    {
      title: "Academic Calendar Update",
      description: "Important changes to the upcoming semester schedule and examination dates have been finalized.",
      type: "Academic",
      date: "Jan 15, 2024",
      priority: "high",
      time: "2 days ago"
    },
    {
      title: "New Policy Guidelines",
      description: "Updated student conduct and academic integrity policies are now in effect.",
      type: "Policy",
      date: "Jan 12, 2024",
      priority: "medium",
      time: "5 days ago"
    },
    {
      title: "Registration Deadline",
      description: "Course registration for spring closes on January 20th at 11:59 PM.",
      type: "Deadline",
      date: "Jan 10, 2024",
      priority: "high",
      time: "1 week ago"
    },
    {
      title: "Library Hours Extended",
      description: "The main library will be open 24/7 during exam periods starting next week.",
      type: "Service",
      date: "Jan 8, 2024",
      priority: "low",
      time: "1 week ago"
    }
  ];

  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedMonth, setSelectedMonth] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getMonthFromDate = (date: string) => {
    const d = new Date(date + " 00:00");
    return months[d.getMonth()];
  };

  const getYearFromDate = (date: string) => {
    return new Date(date + " 00:00").getFullYear().toString();
  };

  const uniqueYears = [...new Set(newsItems.map(item => getYearFromDate(item.date)))];
  const uniqueTypes = [...new Set(newsItems.map(item => item.type))];

  const filteredNews = newsItems.filter(item => {
    const itemYear = getYearFromDate(item.date);
    const itemMonth = getMonthFromDate(item.date);

    return (
      (selectedYear === 'All' || itemYear === selectedYear) &&
      (selectedMonth === 'All' || itemMonth === selectedMonth) &&
      (selectedType === 'All' || item.type === selectedType) &&
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-gradient-to-r from-red-400/80 to-pink-400/80';
      case 'medium': return 'bg-gradient-to-r from-blue-400/80 to-cyan-400/80';
      default: return 'bg-gradient-to-r from-green-400/80 to-emerald-400/80';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/20">
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
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

      <main className="max-w-4xl mx-auto px-6 py-12 mt-6">
        {/* Filters + Search */}
        <div className="mb-10 rounded-xl bg-white/80 backdrop-blur-sm p-6 shadow-md border border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search announcements..."
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
              />
            </div>

            {/* Dropdown Filters */}
            <div className="flex flex-wrap gap-4 justify-end">
              {/* Year Filter */}
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-gray-500" />
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="px-3 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
                >
                  <option value="All">All Years</option>
                  {uniqueYears.map(year => <option key={year} value={year}>{year}</option>)}
                </select>
              </div>

              {/* Month Filter */}
              <div className="flex items-center gap-2">
                <Filter size={16} className="text-gray-500" />
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="px-3 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
                >
                  <option value="All">All Months</option>
                  {months.map((month, idx) => <option key={idx} value={month}>{month}</option>)}
                </select>
              </div>

              {/* Type Filter */}
              <div className="flex items-center gap-2">
                <ClipboardList size={16} className="text-gray-500" />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-3 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
                >
                  <option value="All">All Types</option>
                  {uniqueTypes.map((type, idx) => <option key={idx} value={type}>{type}</option>)}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300/60 via-purple-300/60 to-pink-300/60 rounded-full z-0"></div>

          <div className="space-y-8 relative z-10">
            {filteredNews.length === 0 && (
              <p className="text-gray-500 text-center italic">No announcements match your filters.</p>
            )}

            {filteredNews.map((item, index) => (
              <div key={index} className="relative flex items-start gap-6 group">
                <div className={`relative z-20 w-16 h-16 ${getPriorityColor(item.priority)} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.priority === 'high' ? (
                    <AlertCircle className="text-white" size={24} />
                  ) : (
                    <Bell className="text-white" size={20} />
                  )}
                </div>

                <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:bg-white/95 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group-hover:border-purple-200 relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                        {item.title}
                      </h3>
                      <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100/80 to-purple-100/80 text-blue-700 rounded-full">
                        {item.type}
                      </span>
                      {item.priority === 'high' && (
                        <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-red-100/80 to-pink-100/80 text-red-700 rounded-full animate-pulse">
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
