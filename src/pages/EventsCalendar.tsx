
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Clock, Users, Star, Sparkles } from 'lucide-react';

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
      case 'Academic': return 'from-blue-400/80 to-cyan-400/80';
      case 'Cultural': return 'from-purple-400/80 to-pink-400/80';
      case 'Workshop': return 'from-green-400/80 to-emerald-400/80';
      default: return 'from-gray-400/80 to-slate-400/80';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Academic': return Calendar;
      case 'Cultural': return Star;
      case 'Workshop': return Sparkles;
      default: return Calendar;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/20 to-pink-50/20">
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors mb-4 text-sm font-medium group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Announcements
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <Calendar className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Events Calendar
              </h1>
              <p className="text-gray-600 mt-1">Academic, cultural, and administrative events</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {events.map((event, index) => {
            const IconComponent = getTypeIcon(event.type);
            return (
              <div 
                key={index} 
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 hover:border-purple-300/60"
              >
                {/* Featured badge */}
                {event.featured && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400/90 to-orange-400/90 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 backdrop-blur-sm">
                    <Star size={12} fill="currentColor" />
                    Featured
                  </div>
                )}
                
                {/* Image with sophisticated hover effect */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating RGB icon */}
                  <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${getTypeColor(event.type)} rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white" size={20} />
                  </div>

                  {/* Date overlay */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-sm font-bold text-gray-900">{event.date}</div>
                    <div className="text-xs text-gray-600">{event.time}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 text-xs font-medium bg-gradient-to-r ${getTypeColor(event.type)} text-white rounded-full`}>
                      {event.type}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-700 transition-colors mb-2 line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <Clock size={12} className="text-purple-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={12} className="text-purple-500" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={12} className="text-purple-500" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>

                  {/* Hover button */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-2 px-4 rounded-xl font-medium hover:from-purple-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default EventsCalendar;
