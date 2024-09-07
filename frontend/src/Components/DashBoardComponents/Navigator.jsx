import React from "react";

const Navigator = ({ activeSection, setActiveSection }) => {
  const getButtonClass = (section) =>
    section === activeSection
      ? "bg-white text-green-500 text-sm md:text-md font-semibold shadow-lg rounded-lg p-3 transition-all duration-300"
      : "text-white hover:bg-green-600 text-sm md:text-md hover:text-white p-3 rounded-lg transition-all duration-300";

  return (
    <nav className="bg-green-500 rounded-lg w-[90vw] max-w-2xl mx-auto mt-4 shadow-md">
      <ul className="flex justify-around items-center p-2">
        <li>
          <button
            onClick={() => setActiveSection("marketplace")}
            className={getButtonClass("marketplace")}
          >
            Marketplace
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveSection("blogs")}
            className={getButtonClass("blogs")}
          >
            Blogs
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveSection("news")}
            className={getButtonClass("news")}
          >
            News
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveSection("biddings")}
            className={getButtonClass("biddings")}
          >
            Active Biddings
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
