import React from "react";

function DemoSection() {
  return (
    <div id="demo" className="flex flex-col items-center bg-gray-200 p-4 sm:p-8 rounded-md">
      <h2 className="text-black text-3xl sm:text-2xl mb-4 font-semibold">DEMO</h2>
      
      <div className="w-full sm:w-auto mb-8  md:flex md:gap-5 flex-col items-center mt-12">
        
        <div className="relative mt-2 w-full sm:w-auto mb-2">
          <select
            className="block appearance-none w-full sm:w-auto bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option>Select Demo Language</option>
            <option>English</option>
            <option>Hindi</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
          </select>
        </div>
        <button className="bg-blue-700 text-white py-2 px-4 rounded-md w-full sm:w-auto">
          Get Demo
        </button>
      </div>
      
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-48 sm:h-64 md:h-80 lg:h-96 mb-16">
        <iframe
          className="w-full h-full rounded-md shadow-md"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Demo Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default DemoSection;
