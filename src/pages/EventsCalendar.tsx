
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Clock, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const EventsCalendar = () => {
  const events = [
    {
      title: "Annual Convocation Ceremony",
      description: "Graduation ceremony celebrating the achievements of our Class of 2024 graduates.",
      date: "Feb 15, 2024",
      time: "10:00 AM",
      location: "Main Auditorium",
      type: "Academic",
      attendees: "500+"
    },
    {
      title: "Tech Innovation Symposium",
      description: "Student presentations showcasing cutting-edge technology projects and research innovations.",
      date: "Feb 20, 2024",
      time: "2:00 PM",
      location: "Engineering Block",
      type: "Academic",
      attendees: "200+"
    },
    {
      title: "Spring Cultural Festival",
      description: "Three-day celebration featuring music, dance, art exhibitions, and international food stalls.",
      date: "Mar 1-3, 2024",
      time: "6:00 PM onwards",
      location: "Campus Grounds",
      type: "Cultural",
      attendees: "1000+"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50/30">
      <header className="bg-white border-b border-gray-200/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors mb-6 text-sm font-medium">
            <ArrowLeft size={16} />
            Back to Announcements
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
              <span className="text-white text-2xl">📅</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">Events Calendar</h1>
              <p className="text-gray-600">Academic, cultural, and administrative events</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-4">
          {events.map((event, index) => (
            <Card 
              key={index} 
              className="bg-white/80 border border-gray-200/50 hover:shadow-md transition-all duration-200 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="text-red-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                      <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-700 rounded-full">
                        {event.type}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">{event.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-red-500" />
                        <span>{event.date}</span>
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
                        <span>{event.attendees}</span>
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

export default EventsCalendar;
