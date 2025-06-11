
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Clock, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const EventsCalendar = () => {
  const events = [
    {
      title: "Annual Convocation Ceremony",
      description: "Graduation ceremony for the Class of 2024. Families and friends welcome.",
      date: "2024-02-15",
      time: "10:00 AM",
      location: "Main Auditorium",
      type: "academic",
      icon: Users
    },
    {
      title: "Tech Symposium 2024",
      description: "Student presentations on cutting-edge technology and innovation projects.",
      date: "2024-02-20",
      time: "2:00 PM",
      location: "Engineering Block",
      type: "academic",
      icon: Calendar
    },
    {
      title: "Cultural Festival",
      description: "Three-day celebration featuring music, dance, art exhibitions, and food stalls.",
      date: "2024-03-01",
      time: "6:00 PM",
      location: "Campus Grounds",
      type: "cultural",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-poppins">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-red-100 transition-colors mb-6">
              <ArrowLeft size={20} />
              <span>Back to Announcements</span>
            </Link>
            
            <div className="flex items-center gap-4 mb-4">
              <Calendar className="text-white text-4xl animate-glow" size={40} />
              <h1 className="text-5xl md:text-6xl font-bold font-poppins text-white drop-shadow-lg">
                📅 Events Calendar
              </h1>
            </div>
            
            <p className="text-xl text-white text-opacity-90 font-poppins font-light max-w-2xl">
              Academic, cultural, and administrative events - never miss important dates
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-6">
          {events.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-to-br from-red-50 to-red-100 border-0 hover:scale-105 transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-500 text-white rounded-full">
                      <IconComponent size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-red-900">{event.title}</h3>
                        <span className="text-sm text-red-600 bg-red-200 px-2 py-1 rounded-full">
                          {event.type}
                        </span>
                      </div>
                      <p className="text-red-800 mb-3">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-red-700">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{event.location}</span>
                        </div>
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

export default EventsCalendar;
