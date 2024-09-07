import React from "react";

const Blogs = () => {
  return (
    <div className="bg-white p-8">
      <h2 className="text-3xl font-semibold text-green-500 mb-6">Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(3).fill("").map((_, idx) => (
          <div key={idx} className="border rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-bold text-green-500">Blog Post {idx + 1}</h3>
            <p className="text-gray-600">Short description of the blog post...</p>
            <button className="mt-4 bg-green-500 text-white p-2 rounded-lg w-full hover:bg-green-600">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
