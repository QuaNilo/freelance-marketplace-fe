import React from "react";

const jobs = [
  {
    id: 1,
    title: "I will design a professional logo",
    freelancer: "Ana Silva",
    rating: 4.9,
    price: 50,
    image: "https://via.placeholder.com/300x200?text=Logo+Design",
  },
  {
    id: 2,
    title: "I will build a modern website",
    freelancer: "Carlos Mendes",
    rating: 4.8,
    price: 200,
    image: "https://via.placeholder.com/300x200?text=Web+Design",
  },
  {
    id: 3,
    title: "I will write SEO blog posts",
    freelancer: "Mariana Rocha",
    rating: 5.0,
    price: 30,
    image: "https://via.placeholder.com/300x200?text=Blog+Writing",
  },
  {
    id: 4,
    title: "I will write SEO blog posts",
    freelancer: "Mariana Rocha",
    rating: 5.0,
    price: 30,
    image: "https://via.placeholder.com/300x200?text=Blog+Writing",
  },
  {
    id: 5,
    title: "I will write SEO blog posts",
    freelancer: "Mariana Rocha",
    rating: 5.0,
    price: 30,
    image: "https://via.placeholder.com/300x200?text=Blog+Writing",
  },
  {
    id: 6,
    title: "I will write SEO blog posts",
    freelancer: "Mariana Rocha",
    rating: 5.0,
    price: 30,
    image: "https://via.placeholder.com/300x200?text=Blog+Writing",
  },
  {
    id: 7,
    title: "I will write SEO blog posts",
    freelancer: "Mariana Rocha",
    rating: 5.0,
    price: 30,
    image: "https://via.placeholder.com/300x200?text=Blog+Writing",
  },
  {
    id: 8,
    title: "I will write SEO blog posts",
    freelancer: "Mariana Rocha",
    rating: 5.0,
    price: 30,
    image: "https://via.placeholder.com/300x200?text=Blog+Writing",
  },
  {
    id: 9,
    title: "I will write SEO blog posts",
    freelancer: "Mariana Rocha",
    rating: 5.0,
    price: 30,
    image: "https://via.placeholder.com/300x200?text=Blog+Writing",
  },
  {
    id: 10,
    title: "I will write SEO blog posts",
    freelancer: "Mariana Rocha",
    rating: 5.0,
    price: 30,
    image: "https://via.placeholder.com/300x200?text=Blog+Writing",
  },
  {
    id: 11,
    title: "I will write SEO blog posts",
    freelancer: "Mariana Rocha",
    rating: 5.0,
    price: 30,
    image: "https://via.placeholder.com/300x200?text=Blog+Writing",
  },
  {
    id: 12,
    title: "I will write SEO blog posts",
    freelancer: "Mariana Rocha",
    rating: 5.0,
    price: 30,
    image: "https://via.placeholder.com/300x200?text=Blog+Writing",
  },
];

const JobsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl text-primary font-bold mb-6">Available Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img src={job.image} alt={job.title} className="w-full h-20 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
              <p className="text-gray-600 mb-1">By <strong>{job.freelancer}</strong></p>
              <p className="text-yellow-500 mb-1">⭐ {job.rating}</p>
              <p className="text-green-600 font-bold">Starting at €{job.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsPage;