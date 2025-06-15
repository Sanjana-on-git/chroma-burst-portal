'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Users, MapPin, Archive, Undo } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const PhotoGallery = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [archivedEvents, setArchivedEvents] = useState([]);
  const [activeTab, setActiveTab] = useState('gallery');

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
  }, [isModalOpen]);

  const archiveEvent = (id) => {
    setArchivedEvents([...archivedEvents, id]);
  };

  const unarchiveEvent = (id) => {
    setArchivedEvents(archivedEvents.filter(eid => eid !== id));
  };

   const events = [
    {
      id: 1,
      title: 'Tech Expo 2025',
      date: 'May 20, 2025',
      description: 'Explore robotics, software, and green tech innovations led by students.',
      images: [
        'https://images.unsplash.com/photo-1558685555-bcdb675f9b9a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1524676347681-e677a364744f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1683740128079-09405ab63ab8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1722089932219-0d57ba7eabc5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
      attendees: 250,
      location: 'Innovation Hall',
    },
    {
      id: 2,
      title: 'Convocation 2024',
      date: 'April 10, 2025',
      description: 'Graduates walk the stage with pride and dreams.',
      images: [
        'https://plus.unsplash.com/premium_photo-1714265045463-554b14836d42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1524676347681-e677a364744f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1683740128079-09405ab63ab8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1722089932219-0d57ba7eabc5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      
      ],
      attendees: 500,
      location: 'Main Auditorium',
    },
    {
      id: 3,
      title: 'Photography Exhibition',
      date: 'Dec 5, 2024',
      description: 'Capturing moments through the lens of creativity.',
      images: [
       'https://images.unsplash.com/photo-1488684430052-f2d92fb178c2?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1524676347681-e677a364744f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1683740128079-09405ab63ab8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1722089932219-0d57ba7eabc5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
      attendees: 180,
      location: 'Art Gallery',
    },
  ];

  const [yearFilter, setYearFilter] = useState('');
const [monthFilter, setMonthFilter] = useState('');
const [typeFilter, setTypeFilter] = useState('');
const [searchQuery, setSearchQuery] = useState('');


  const filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    const matchesYear = yearFilter ? eventDate.getFullYear().toString() === yearFilter : true;
    const matchesMonth = monthFilter ? (eventDate.getMonth() + 1).toString().padStart(2, '0') === monthFilter : true;
    const matchesType = typeFilter ? event.title.toLowerCase().includes(typeFilter.toLowerCase()) : true;
    const matchesSearch = searchQuery ? event.title.toLowerCase().includes(searchQuery.toLowerCase()) || event.description.toLowerCase().includes(searchQuery.toLowerCase()) : true;
    return matchesYear && matchesMonth && matchesType && matchesSearch;
  });

  const displayedEvents = activeTab === 'gallery'
    ? filteredEvents.filter(event => !archivedEvents.includes(event.id))
    : filteredEvents.filter(event => archivedEvents.includes(event.id));

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Button variant="ghost" className="gap-2 text-gray-500 hover:text-black" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4" /> Back to Announcements
          </Button>
          <div className="flex gap-2">
            <Button variant={activeTab === 'gallery' ? 'default' : 'outline'} onClick={() => setActiveTab('gallery')}>Gallery</Button>
            <Button variant={activeTab === 'archive' ? 'default' : 'outline'} onClick={() => setActiveTab('archive')}>
              <Archive className="w-4 h-4 mr-1" /> Archive
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent mb-6">PHOTO GALLERY</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">A creative collage of our campus highlights, celebrating the moments that define our community.</p>
      </div>

      <div className="container mx-auto px-6 pb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex gap-3 flex-wrap">
          <select onChange={(e) => setYearFilter(e.target.value)} className="border rounded px-3 py-2 text-sm">
            <option value="">All Years</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
          <select onChange={(e) => setMonthFilter(e.target.value)} className="border rounded px-3 py-2 text-sm">
            <option value="">All Months</option>
            {/* Months options */}
          </select>
          <select onChange={(e) => setTypeFilter(e.target.value)} className="border rounded px-3 py-2 text-sm">
            <option value="">All Types</option>
            {/* Type options */}
          </select>
        </div>
        <input
          type="text"
          placeholder="Search events..."
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border rounded px-4 py-2 w-full md:w-64 text-sm"
        />
      </div>

      <div className="container mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedEvents.map(event => (
          <Card key={event.id} className="group overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-200">
            <div className="relative cursor-pointer" onClick={() => openModal(event)}>
              <img src={event.images[0]} alt={event.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700" />
              <Badge className="absolute top-4 left-4 bg-blue-600 text-white">{event.date}</Badge>
              <div className="absolute bottom-4 left-4 text-white text-sm flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" /> {event.attendees}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> {event.location}
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{event.title}</h3>
              <p className="text-gray-600 mt-2">{event.description}</p>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" /> {event.date}
                </div>
                <button
                  className="text-gray-500 hover:text-red-500"
                  onClick={() => activeTab === 'gallery' ? archiveEvent(event.id) : unarchiveEvent(event.id)}
                >
                  {activeTab === 'gallery' ? <Archive className="w-4 h-4" /> : <Undo className="w-4 h-4" />}
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="relative bg-white rounded-xl shadow-2xl w-[95%] max-w-6xl max-h-[90vh] overflow-y-auto">
            <button onClick={closeModal} className="absolute top-4 right-4 z-50 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:text-red-500 hover:border-red-500 transition">
              <span className="text-2xl">×</span>
            </button>
            <div className="p-6">
              <div className="relative mb-6">
                <img src={selectedEvent.images[0]} alt="Main" className="w-full h-64 object-cover rounded-md" />
                <h2 className="absolute bottom-4 left-4 text-white text-3xl font-bold drop-shadow-md z-10">{selectedEvent.title}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {selectedEvent.images.map((img, idx) => (
                  <img key={idx} src={img} alt={`Gallery ${idx}`} className="w-full h-48 object-cover rounded-md hover:scale-105 transition-transform duration-300" />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
