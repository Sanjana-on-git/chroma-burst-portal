import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  ExternalLink,
  Eye,
  Award,
  Newspaper,
} from "lucide-react";

const mediaData = [
  {
    title: "Institution Wins National Excellence Award",
    publication: "Education Today Magazine",
    description:
      "Recognized for academic innovation and student-centric development programs.",
    date: "Jan 10, 2024",
    image: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    featured: true,
    views: "2.5K",
  },
  {
    title: "Breakthrough in Renewable Energy",
    publication: "Science Daily",
    description:
      "Faculty's solar technology increases efficiency by 40% using advanced materials.",
    date: "Jan 5, 2024",
    image: "https://images.unsplash.com/photo-1653728842107-f7d205e00ee0?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    featured: true,
    views: "4.1K",
  },
  {
    title: "Startup by Students Featured in Tech Weekly",
    publication: "Tech Weekly",
    description:
      "Alumni-founded ed-tech firm secures $2M Series A funding for global expansion.",
    date: "Dec 28, 2023",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=500",
    featured: false,
    views: "1.8K",
  },
  {
    title: "Green Campus Initiative",
    publication: "Environmental Journal",
    description:
      "Carbon-neutral initiative cuts emissions by 60% through student-led programs.",
    date: "Dec 20, 2023",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500",
    featured: false,
    views: "3.2K",
  },
];

const MediaCoverage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [monthFilter, setMonthFilter] = useState("");

  const filterMediaData = mediaData.filter((item) => {
    const [month, , year] = item.date.split(" ");
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = yearFilter ? year === yearFilter : true;
    const matchesMonth = monthFilter ? month === monthFilter : true;
    return matchesSearch && matchesYear && matchesMonth;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfbfb] via-[#ebedff] to-[#ffe8e8] px-4 py-10 sm:px-8">
      {/* Header */}
      <div className="mb-10 max-w-7xl mx-auto">
        <Link
          to="/"
          className="text-sm flex items-center text-gray-600 hover:text-pink-600"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        <div className="flex items-center gap-4 mt-6">
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#FFDEE9] to-[#B5FFFC] shadow-md">
            <Newspaper className="text-black" size={28} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Media Coverage</h1>
            <p className="text-sm text-gray-500">
              News features and recognition of our institution
            </p>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <section className="max-w-7xl mx-auto mb-12">
        <h2 className="text-xl font-semibold text-gray-700 mb-6">
          🌟 Featured Highlights
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {mediaData
            .filter((item) => item.featured)
            .map((item, index) => (
              <div
                key={index}
                className="bg-white/40 backdrop-blur-xl border border-white/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-pink-600 font-semibold">
                      {item.publication}
                    </span>
                    <Award size={18} className="text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye size={12} />
                      {item.views} views
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* All Coverage with Filters */}
      <section className="max-w-7xl mx-auto">
        {/* 🔍 Filters and Search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
  <h2 className="text-xl font-bold text-gray-800">📰 All Coverage</h2>

  <div className="flex flex-wrap gap-3">
    <input
      type="text"
      placeholder="🔍 Search by title or description..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="px-4 py-2 w-64 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm placeholder-gray-400"
    />

    <select
      value={monthFilter}
      onChange={(e) => setMonthFilter(e.target.value)}
      className="px-3 py-2 rounded-lg border border-gray-300 bg-white shadow-sm text-sm focus:ring-2 focus:ring-orange-300"
    >
      <option value="">📅 Month</option>
      <option value="Jan">Jan</option>
      <option value="Feb">Feb</option>
      <option value="Mar">Mar</option>
      <option value="Apr">Apr</option>
      <option value="May">May</option>
      <option value="Jun">Jun</option>
      <option value="Jul">Jul</option>
      <option value="Aug">Aug</option>
      <option value="Sep">Sep</option>
      <option value="Oct">Oct</option>
      <option value="Nov">Nov</option>
      <option value="Dec">Dec</option>
    </select>

    <select
      value={yearFilter}
      onChange={(e) => setYearFilter(e.target.value)}
      className="px-3 py-2 rounded-lg border border-gray-300 bg-white shadow-sm text-sm focus:ring-2 focus:ring-green-300"
    >
      <option value="">📆 Year</option>
      <option value="2023">2023</option>
      <option value="2024">2024</option>
    </select>
  </div>
</div>


        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterMediaData.length > 0 ? (
            filterMediaData.map((item, index) => (
              <div
                key={index}
                className="group bg-white/30 backdrop-blur-md border border-white/20 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.01] transition-all"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-5">
                  <p className="text-sm text-pink-600 mb-1">{item.publication}</p>
                  <h4 className="text-md font-semibold text-gray-800 group-hover:text-pink-600">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-3">{item.description}</p>
                  <div className="flex justify-between text-xs text-gray-500 mt-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye size={12} />
                      {item.views}
                    </span>
                  </div>
                  <button className="mt-4 w-full py-2 rounded-lg bg-gradient-to-r from-pink-400 to-orange-300 text-white font-medium hover:from-pink-500 hover:to-orange-400 transition-all flex items-center justify-center gap-2">
                    Read More <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No media found matching your criteria.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default MediaCoverage;
