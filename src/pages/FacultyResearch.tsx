import React, { useState } from 'react';
import { CalendarDays, User, Download, X, Search, Archive, BookOpen } from 'lucide-react';

const FacultyResearch = () => {
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [sortOrder, setSortOrder] = useState('Newest');
  const [activeTab, setActiveTab] = useState<'Active' | 'Archived'>('Active');
  const [archivedPapers, setArchivedPapers] = useState<any[]>([]);

  const publications = [
    {
      faculty: "Dr. Ritu Sharma",
      department: "Computer Science",
      papers: [
        {
          title: "AI-Powered Learning Systems",
          journal: "International Journal of AI Research",
          date: "2024-03-12",
          abstract: "This paper explores the use of AI to personalize student learning experiences in real-time.",
          coAuthors: ["Dr. Nikhil Jain", "Prof. Kavita Mehra"],
          downloadLink: "https://example.com/paper1.pdf"
        }
      ]
    },
    {
      faculty: "Dr. Ajay Verma",
      department: "Information Technology",
      papers: [
        {
          title: "Blockchain in Higher Education",
          journal: "Journal of Emerging Tech in Education",
          date: "2024-01-22",
          abstract: "An examination of how blockchain can secure academic credentials and streamline verification.",
          coAuthors: ["Dr. Meena Sharma"],
          downloadLink: "https://example.com/paper2.pdf"
        }
      ]
    },
    {
      faculty: "Dr. Meena Sharma",
      department: "Law, Justice and Governance",
      papers: [
        {
          title: "Law and Technology: A New Paradigm",
          journal: "Journal of Emerging Tech in Law",
          date: "2023-01-22",
          abstract: "Legal implications of blockchain credentialing systems and digital justice platforms.",
          coAuthors: ["Dr. Nikhil Kumar"],
          downloadLink: "https://example.com/paper3.pdf"
        }
      ]
    }
  ];

  const departments = Array.from(new Set(publications.map(p => p.department)));

  const filterAndSort = (data: typeof publications) =>
    data
      .flatMap(faculty => {
        const matchDept = selectedDept === 'All' || faculty.department === selectedDept;
        const filteredPapers = faculty.papers.filter(paper =>
          paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          paper.abstract.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return matchDept && filteredPapers.length > 0
          ? [{ ...faculty, papers: filteredPapers }]
          : [];
      })
      .map(faculty => ({
        ...faculty,
        papers: faculty.papers.sort((a, b) =>
          sortOrder === 'Newest'
            ? new Date(b.date).getTime() - new Date(a.date).getTime()
            : new Date(a.date).getTime() - new Date(b.date).getTime()
        )
      }));

  const handleArchive = (paper: any, faculty: string) => {
    setArchivedPapers(prev => [...prev, { ...paper, faculty }]);
  };

  const handleUnarchive = (index: number) => {
    setArchivedPapers(prev => prev.filter((_, i) => i !== index));
  };

  const activePapers = filterAndSort(publications);
  const archivedFiltered = archivedPapers.filter(paper =>
    paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    paper.abstract.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-sky-50 to-lime-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
        Faculty Publication Announcements
      </h1>

      {/* Tabs */}
      <div className="flex justify-center mb-8 space-x-4">
        <button
          onClick={() => setActiveTab('Active')}
          className={`px-4 py-2 rounded-full text-sm font-semibold shadow transition ${
            activeTab === 'Active'
              ? 'bg-pink-500 text-white'
              : 'bg-white text-pink-500 border border-pink-300'
          }`}
        >
          <BookOpen className="inline mr-2" size={16} /> Active
        </button>
        <button
          onClick={() => setActiveTab('Archived')}
          className={`px-4 py-2 rounded-full text-sm font-semibold shadow transition ${
            activeTab === 'Archived'
              ? 'bg-rose-500 text-white'
              : 'bg-white text-rose-500 border border-rose-300'
          }`}
        >
          <Archive className="inline mr-2" size={16} /> Archived
        </button>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto mb-10 flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search by title or abstract..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 shadow focus:ring-2 focus:ring-pink-200 bg-white text-sm"
          />
        </div>
        <div className="flex gap-3 flex-wrap">
          <select
            value={selectedDept}
            onChange={e => setSelectedDept(e.target.value)}
            className="rounded-xl border border-gray-300 px-3 py-2 text-sm bg-white shadow-sm focus:ring-2 focus:ring-sky-100"
          >
            <option value="All">All Departments</option>
            {departments.map((dept, i) => (
              <option key={i} value={dept}>{dept}</option>
            ))}
          </select>
          <select
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
            className="rounded-xl border border-gray-300 px-3 py-2 text-sm bg-white shadow-sm focus:ring-2 focus:ring-lime-100"
          >
            <option value="Newest">Sort by Newest</option>
            <option value="Oldest">Sort by Oldest</option>
          </select>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {(activeTab === 'Active' ? activePapers : [{ faculty: '', papers: archivedFiltered }]).map((faculty, index) =>
          faculty.papers.map((paper, idx) => (
            <div key={index + '-' + idx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow hover:shadow-lg transition relative">
              <div className="flex items-center gap-3 mb-4">
                <User className="text-rose-500" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">{faculty.faculty || paper.faculty}</h2>
                  <p className="text-sm text-gray-500">{faculty.department}</p>
                </div>
              </div>
              <h3 className="text-md font-medium text-gray-700">{paper.title}</h3>
              <p className="text-sm italic text-gray-500">{paper.journal}</p>
              <div className="flex items-center gap-2 text-sm text-gray-400 mt-1 mb-2">
                <CalendarDays size={14} /> <span>{paper.date}</span>
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setSelectedPaper({ ...paper, faculty: faculty.faculty || paper.faculty })}
                  className="text-sm text-pink-600 hover:text-pink-800 underline"
                >
                  View Details
                </button>
                {activeTab === 'Active' ? (
                  <button onClick={() => handleArchive(paper, faculty.faculty)} className="text-xs text-gray-500 hover:text-rose-500">
                    <Archive size={16} />
                  </button>
                ) : (
                  <button onClick={() => handleUnarchive(idx)} className="text-xs text-gray-500 hover:text-green-600">
                    Unarchive
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {selectedPaper && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-gray-100">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
              onClick={() => setSelectedPaper(null)}
            >
              <X size={20} />
            </button>
            <h2 className="text-2xl font-bold text-pink-600">{selectedPaper.title}</h2>
            <p className="text-sm text-gray-600 mt-1">{selectedPaper.journal}</p>
            <p className="text-sm text-gray-500 mb-4">By {selectedPaper.faculty} · {selectedPaper.coAuthors.join(', ')}</p>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-1">Abstract:</h3>
              <p className="text-sm text-gray-600">{selectedPaper.abstract}</p>
            </div>

            <a
              href={selectedPaper.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl shadow hover:from-pink-600 hover:to-purple-600 transition"
            >
              <Download size={16} /> Download Paper
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacultyResearch;
