import React, { useState } from "react";

// Simulação com datas e tipos
const jobs = [
  {
    id: 1,
    type: "service",
    title: "I will design a professional logo",
    freelancer: "Ana Silva",
    rating: 4.9,
    price: 50,
    date: "2024-10-01",
    image: "/imgs/jobs_img_test.jpg",
  },
  {
    id: 2,
    type: "service",
    title: "I will build a modern website",
    freelancer: "Carlos Mendes",
    rating: 4.8,
    price: 200,
    date: "2024-11-15",
    image: "/imgs/jobs_img_test.jpg",
  },
  {
    id: 3,
    type: "request",
    title: "I will write SEO blog posts",
    freelancer: "Mariana Rocha",
    rating: 5.0,
    price: 30,
    date: "2025-01-20",
    image: "/imgs/jobs_img_test.jpg",
  },
  {
    id: 4,
    type: "service",
    title: "I will design a professional logo",
    freelancer: "Ana Silva",
    rating: 4.9,
    price: 50,
    date: "2024-10-01",
    image: "/imgs/jobs_img_test.jpg",
  },
  {
    id: 5,
    type: "service",
    title: "I will build a modern website",
    freelancer: "Carlos Mendes",
    rating: 4.8,
    price: 200,
    date: "2024-11-15",
    image: "/imgs/jobs_img_test.jpg",
  },
  {
    id: 6,
    type: "request",
    title: "I will write SEO blog posts",
    freelancer: "Mariana Rocha",
    rating: 5.0,
    price: 30,
    date: "2025-01-20",
    image: "/imgs/jobs_img_test.jpg",
  },
  {
    id: 7,
    type: "service",
    title: "I will design a professional logo",
    freelancer: "Ana Silva",
    rating: 4.9,
    price: 50,
    date: "2024-10-01",
    image: "/imgs/jobs_img_test.jpg",
  },
  {
    id: 8,
    type: "service",
    title: "I will build a modern website",
    freelancer: "Carlos Mendes",
    rating: 4.8,
    price: 200,
    date: "2024-11-15",
    image: "/imgs/jobs_img_test.jpg",
  },
  {
    id: 9,
    type: "request",
    title: "I will write SEO blog posts",
    freelancer: "Mariana Rocha",
    rating: 5.0,
    price: 30,
    date: "2025-01-20",
    image: "/imgs/jobs_img_test.jpg",
  },
  {
    id: 10,
    type: "service",
    title: "I will design a professional logo",
    freelancer: "Ana Silva",
    rating: 4.9,
    price: 50,
    date: "2024-10-01",
    image: "/imgs/jobs_img_test.jpg",
  },
  {
    id: 11,
    type: "service",
    title: "I will build a modern website",
    freelancer: "Carlos Mendes",
    rating: 4.8,
    price: 200,
    date: "2024-11-15",
    image: "/imgs/jobs_img_test.jpg",
  },
  {
    id: 12,
    type: "request",
    title: "I will write SEO blog posts",
    freelancer: "Mariana Rocha",
    rating: 5.0,
    price: 30,
    date: "2025-01-20",
    image: "/imgs/jobs_img_test.jpg",
  },
];

const JobsPage = () => {
  const [selectedTypes, setSelectedTypes] = useState(["service", "request"]);
  const [maxPrice, setMaxPrice] = useState(300);
  const [dateRange, setDateRange] = useState(["2024-01-01", "2025-12-31"]);
  const [sortOption, setSortOption] = useState("relevance");

  const handleTypeChange = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  const filteredJobs = jobs.filter((job) => {
    const isTypeSelected = selectedTypes.includes(job.type);
    const isPriceInRange = job.price <= maxPrice;
    const isDateInRange =
      job.date >= dateRange[0] && job.date <= dateRange[1];

    return isTypeSelected && isPriceInRange && isDateInRange;
  });

  const sortedJobs = [...filteredJobs].sort((a, b) => {
    switch (sortOption) {
      case "lowPrice":
        return a.price - b.price;
      case "highPrice":
        return b.price - a.price;
      case "recent":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "relevance":
      default:
        return b.rating - a.rating;
    }
  });  

  return (
    <div className="p-6">
      <h1 className="text-3xl text-primary font-bold mb-6">Available Services</h1>

      {/* Filters */}
      <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Type */}
        <div>
          <label className="block text-primary font-medium mb-2">Type</label>
          <div className="flex text-white flex-col gap-2">
            <label>
              <input
                type="checkbox"
                checked={selectedTypes.includes("service")}
                onChange={() => handleTypeChange("service")}
              />{" "}
              Service
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedTypes.includes("request")}
                onChange={() => handleTypeChange("request")}
              />{" "}
              Request
            </label>
          </div>
        </div>

        {/* Price */}
        <div>
          <label className="block text-primary font-medium mb-2">
            Range Price: 0 - €{maxPrice}
          </label>
          <input
            type="range"
            min={0}
            max={300}
            step={10}
            value={maxPrice}
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-primary font-medium mb-2">Date Range</label>
          <div className="flex flex-col gap-2">
            <input
              type="date"
              value={dateRange[0]}
              onChange={(e) =>
                setDateRange([e.target.value, dateRange[1]])
              }
              className="border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="date"
              value={dateRange[1]}
              onChange={(e) =>
                setDateRange([dateRange[0], e.target.value])
              }
              className="border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>
      </div>

      {/* Sorter */}
      <div className="mb-6">
        <label className="block text-primary font-medium mb-2">Sort By</label>
        <div className="relative">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="appearance-none border border-gray-300 rounded-xl px-4 py-2 w-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="relevance">Relevance (Rating)</option>
            <option value="lowPrice">Lowest Price</option>
            <option value="highPrice">Highest Price</option>
            <option value="recent">Most Recent</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredJobs.map((job) => (
          <div key={job.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img src={job.image} alt={job.title} className="w-full h-20 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
              <p className="text-gray-600 mb-1">By <strong>{job.freelancer}</strong></p>
              <p className="text-yellow-500 mb-1">⭐ {job.rating}</p>
              <p className="text-green-600 font-bold">Starting at €{job.price}</p>
              <p className="text-sm text-gray-400">📅 {job.date}</p>
            </div>
          </div>
        ))}
        {filteredJobs.length === 0 && (
          <p className="col-span-full text-center text-gray-500">No jobs found with the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default JobsPage;
