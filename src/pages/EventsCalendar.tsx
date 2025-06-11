
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Clock, Users, Star } from 'lucide-react';

const EventsCalendar = () => {
  const events = [
    {
      title: "Annual Convocation Ceremony",
      description: "Graduation ceremony celebrating the achievements of our Class of 2024 graduates with distinguished guest speakers.",
      date: "Feb 15, 2024",
      time: "10:00 AM",
      location: "Main Auditorium",
      type: "Academic",
      attendees: "500+",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=250&fit=crop",
      featured: true
    },
    {
      title: "Tech Innovation Symposium",
      description: "Student presentations showcasing cutting-edge technology projects and research innovations.",
      date: "Feb 20, 2024",
      time: "2:00 PM",
      location: "Engineering Block",
      type: "Academic",
      attendees: "200+",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
      featured: false
    },
    {
      title: "Spring Cultural Festival",
      description: "Three-day celebration featuring music, dance, art exhibitions, and international food stalls.",
      date: "Mar 1-3, 2024",
      time: "6:00 PM onwards",
      location: "Campus Grounds",
      type: "Cultural",
      attendees: "1000+",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=250&fit=crop",
      featured: true
    },
    {
      title: "Research Publication Workshop",
      description: "Professional development workshop focusing on academic writing and publication strategies.",
      date: "Mar 10, 2024",
      time: "9:00 AM",
      location: "Library Conference Room",
      type: "Workshop",
      attendees: "50+",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      featured: false
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Academic': return 'from-blue-400 to-cyan-400';
      case 'Cultural': return 'from-purple-400 to-pink-400';
      case 'Workshop': return 'from-green-400 to-emerald-400';
      default: return 'from-gray-400 to-slate-400';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Academic': return '🎓';
      case 'Cultural': return '🎭';
      case 'Workshop': return '🛠️';
      default: return '📅';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50/30 to-orange-50/20">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors mb-4 text-sm font-medium group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Announcements
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
              <Calendar className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Events Calendar
              </h1>
              <p className="text-gray-600 mt-1">Academic, cultural, and administrative events</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="group bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/50 hover:shadow-2xl hover:scale-[1.03] transition-all duration-500"
            >
              {/* Featured badge */}
              {event.featured && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Star size={12} fill="currentColor" />
                  Featured
                </div>
              )}
              
              {/* Image with hover effect */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* RGB Icon overlay */}
                <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${getTypeColor(event.type)} rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm`}>
                  <span className="text-white text-xl">{getTypeIcon(event.type)}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-700 transition-colors">
                    {event.title}
                  </h3>
                  <span className={`px-2 py-1 text-xs font-medium bg-gradient-to-r ${getTypeColor(event.type)} text-white rounded-full`}>
                    {event.type}
                  </span>
                </div>
                
                <p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-3">
                  {event.description}
                </p>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-red-500" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-red-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-red-500" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={14} className="text-red-500" />
                    <span>{event.attendees} attendees</span>
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

export default EventsCalendar;
