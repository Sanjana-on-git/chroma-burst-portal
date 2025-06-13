'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Clock,
  Users,
  Star,
  Sparkles,
  X
} from 'lucide-react';

const EventsCalendar = () => {
  const events = [
    {
      title: "Annual Convocation Ceremony",
      description: "Graduation ceremony celebrating the achievements of our Class of 2024 graduates with distinguished guest speakers.",
      date: "2025-12-20",
      time: "10:00 AM",
      location: "Main Auditorium",
      type: "Academic",
      attendees: "500+",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=250&fit=crop",
    },
    {
      title: "Tech Innovation Symposium",
      description: "Student presentations showcasing cutting-edge technology projects and research innovations.",
      date: "2024-02-20",
      time: "2:00 PM",
      location: "Engineering Block",
      type: "Academic",
      attendees: "200+",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
    },
    {
      title: "Spring Cultural Festival",
      description: "Three-day celebration featuring music, dance, art exhibitions, and international food stalls.",
      date: "2025-07-01",
      time: "6:00 PM onwards",
      location: "Campus Grounds",
      type: "Cultural",
      attendees: "1000+",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=250&fit=crop",
    },
    {
      title: "Research Publication Workshop",
      description: "Professional development workshop focusing on academic writing and publication strategies.",
      date: "2024-03-10",
      time: "9:00 AM",
      location: "Library Conference Room",
      type: "Workshop",
      attendees: "50+",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    }
  ];

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeTab, setActiveTab] = useState("Upcoming");

  const openModal = (event) => {
    setSelectedEvent(event);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedEvent(null);
    document.body.style.overflow = "auto";
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "Academic": return "from-blue-500 to-cyan-500";
      case "Cultural": return "from-pink-500 to-purple-500";
      case "Workshop": return "from-green-500 to-emerald-500";
      default: return "from-gray-500 to-slate-500";
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "Academic": return <Calendar size={16} />;
      case "Cultural": return <Star size={16} />;
      case "Workshop": return <Sparkles size={16} />;
      default: return <Calendar size={16} />;
    }
  };

  const today = new Date();
  const upcomingEvents = events.filter(e => new Date(e.date) >= today);
  const pastEvents = events.filter(e => new Date(e.date) < today);
  const visibleEvents = activeTab === "Upcoming" ? upcomingEvents : pastEvents;

  return (
    <div className="bg-gradient-to-br from-slate-50 to-purple-50 min-h-screen">
      <header className="p-6">
        <Link to="/" className="text-purple-600 hover:underline text-sm flex items-center gap-1">
          <ArrowLeft size={16} /> Back
        </Link>
        <h1 className="text-3xl font-bold mt-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Events Calendar
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-center gap-4 mb-6">
          {["Upcoming", "Past"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full font-medium ${
                activeTab === tab
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  : "bg-white border border-purple-300 text-purple-600 hover:bg-purple-100"
              }`}
            >
              {tab} Events
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleEvents.map(event => (
            <div
              key={event.title}
              className="group relative bg-white rounded-3xl shadow-md border hover:shadow-xl transition duration-300"
            >
              <img
                src={event.image}
                alt=""
                className="rounded-t-3xl w-full h-48 object-cover"
              />
              <div className={`absolute top-3 left-3 w-10 h-10 flex items-center justify-center rounded-xl text-white bg-gradient-to-r ${getTypeColor(event.type)}`}>
                {getTypeIcon(event.type)}
              </div>
              <div className="p-5">
                <div className={`inline-block text-xs px-2 py-1 rounded-full text-white bg-gradient-to-r ${getTypeColor(event.type)}`}>
                  {event.type}
                </div>
                <h3 className="mt-2 font-bold text-gray-900">{event.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{event.description}</p>
                <div className="mt-3 text-xs text-gray-500 space-y-1">
                  <div className="flex items-center gap-1">
                    <Clock size={12} /> {event.time}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={12} /> {event.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={12} /> {event.attendees}
                  </div>
                </div>
                <button
                  onClick={() => openModal(event)}
                  className="mt-4 w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-2 rounded-xl hover:scale-105 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4 py-8">
          <div className="relative bg-white w-full max-w-lg rounded-2xl p-6 shadow-xl">
            <button
              className="absolute top-3 right-3 bg-gray-100 hover:bg-red-200 text-gray-600 p-2 rounded-full"
              onClick={closeModal}
            >
              <X size={20} />
            </button>
            <div className="flex items-start gap-4">
              <img
                src={selectedEvent.image}
                alt=""
                className="w-24 h-24 object-cover rounded-xl border"
              />
              <div>
                <h2 className="text-xl font-bold text-purple-700">
                  {selectedEvent.title}
                </h2>
                <p className="text-sm text-gray-500">{selectedEvent.type}</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={16} /> {selectedEvent.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} /> {selectedEvent.time}
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} /> {selectedEvent.location}
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} /> {selectedEvent.attendees}
              </div>
            </div>
            <p className="mt-4 text-gray-700 text-sm">{selectedEvent.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsCalendar;
