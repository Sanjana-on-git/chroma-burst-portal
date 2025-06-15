'use client';

import React, { useState } from 'react';
import { Award, Calendar, Users, Search, FolderArchive } from 'lucide-react';

type AwardItem = {
  id: number;
  title: string;
  recipient: string;
  date: string;
  image: string;
  description: string;
  category: string;
};

const initialAwards: AwardItem[] = [
  {
    id: 1,
    title: 'Best Research Paper Award',
    recipient: 'Dr. Priya Sharma',
    date: '2024-04-15',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Awarded for outstanding contribution in AI-based healthcare research.',
    category: 'Research'
  },
  {
    id: 2,
    title: 'Innovation in Tech',
    recipient: 'Team Innovate',
    date: '2024-07-10',
    image: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Recognized for developing a smart waste segregation system.',
    category: 'Innovation'
  },
  {
    id: 3,
    title: 'Excellence in Cultural Events',
    recipient: 'Cultural Committee',
    date: '2023-12-01',
    image: 'https://images.unsplash.com/photo-1668587629217-7567ae4f7b4d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'For hosting a vibrant and inclusive cultural fest.',
    category: 'Cultural'
  },
];

const AwardSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [yearFilter, setYearFilter] = useState('All');
  const [archived, setArchived] = useState<number[]>([]);
  const [showArchived, setShowArchived] = useState(false);

  const toggleArchive = (id: number) => {
    setArchived(prev => prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]);
  };

  const filteredAwards = initialAwards.filter(a => {
    const matchesSearch = a.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || a.category === categoryFilter;
    const matchesYear = yearFilter === 'All' || a.date.startsWith(yearFilter);
    const isArchived = archived.includes(a.id);
    return matchesSearch && matchesCategory && matchesYear && (showArchived ? isArchived : !isArchived);
  });

  const years = Array.from(new Set(initialAwards.map(a => a.date.slice(0, 4))));
  const categories = Array.from(new Set(initialAwards.map(a => a.category)));

  return (
    <section className="bg-[rgb(245,248,255)] py-12 px-4 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-10">🎖️ Awards & Recognition</h2>

      <div className="max-w-6xl mx-auto flex flex-wrap gap-4 items-center justify-between mb-8 p-4 rounded-xl bg-white shadow">
        <div className="relative flex gap-2 items-center w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search awards..."
            className="pl-10 pr-4 py-2 w-full sm:w-60 rounded-lg border border-purple-300 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search size={18} className="absolute left-3 text-purple-500" />
        </div>
        <select
          className="px-4 py-2 rounded-lg border border-purple-300 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          onChange={(e) => setCategoryFilter(e.target.value)}
          value={categoryFilter}
        >
          <option value="All">All Categories</option>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <select
          className="px-4 py-2 rounded-lg border border-purple-300 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          onChange={(e) => setYearFilter(e.target.value)}
          value={yearFilter}
        >
          <option value="All">All Years</option>
          {years.map(y => <option key={y} value={y}>{y}</option>)}
        </select>
        <button
          onClick={() => setShowArchived(prev => !prev)}
          className="text-sm flex gap-2 items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow hover:scale-105 transition"
        >
          <FolderArchive size={16} /> {showArchived ? 'View Active' : 'View Archived'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredAwards.map((award) => (
          <div
            key={award.id}
            className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 border border-[rgb(230,230,255)] overflow-hidden"
          >
            <img
              src={award.image}
              alt={award.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 text-purple-600 text-lg font-medium mb-2">
                <Award size={20} /> {award.title}
              </div>
              <p className="text-gray-700 text-sm mb-3">{award.description}</p>
              <div className="text-sm text-gray-500 space-y-1">
                <div className="flex items-center gap-2">
                  <Users size={16} /> Recipient: {award.recipient}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} /> Date: {award.date}
                </div>
              </div>
              <div className="mt-5 flex gap-3">
                <button className="px-4 py-2 text-xs font-medium rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow hover:scale-105 transition">
                  View Details
                </button>
                <button
                  onClick={() => toggleArchive(award.id)}
                  className="px-4 py-2 text-xs font-medium rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 transition"
                >
                  {archived.includes(award.id) ? 'Unarchive' : 'Archive'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardSection;
