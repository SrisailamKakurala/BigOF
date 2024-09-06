import React, { useState, useEffect } from "react";
import "../index.css";

const generateProfiles = (num) => {
  const profiles = [];
  for (let i = 1; i <= num; i++) {
    profiles.push({
      id: i,
      name: `Profile ${i}`,
    });
  }
  return profiles;
};

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [profiles] = useState(generateProfiles(100));
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  // This useEffect will add and remove the 'overflow-hidden' style when results are visible.
  useEffect(() => {
    if (filteredProfiles.length > 0) {
      // Disable scrolling when results appear
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when no results are visible
      document.body.style.overflow = "auto";
    }

    // Clean up effect on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [filteredProfiles]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value === "") {
      setFilteredProfiles([]);
    } else {
      const results = profiles.filter((profile) =>
        profile.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProfiles(results);
    }
  };

  return (
    <div className="py-4 mt-[75px] lg:px-20 md:px-8 px-3 w-full">
      <div className="mb-4 md:w-3/4 w-[90%] mx-auto">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full py-2 px-4 font-semibold ring-2 rounded-md ring-green-500 bg-green-50 focus:outline-none focus:ring-3 focus:ring-green-500"
          placeholder="Search by place or crop..."
        />
      </div>

      <div className="absolute left-1/2 rounded-lg -translate-x-1/2 bg-green-50 px-4 max-h-[75vh] scrollbar-hide overflow-y-auto md:w-[68%] w-[90%]">
        {filteredProfiles.length > 0 && (
          <div className="py-3 space-y-2">
            {filteredProfiles.map((profile) => (
              <div
                key={profile.id}
                className="p-2 bg-green-200 border border-green-500 rounded"
              >
                {profile.name}
              </div>
            ))}
          </div>
        )}
        {filteredProfiles.length === 0 && searchTerm && (
          <div className="text-gray-500 p-3 text-center font-bold">
            No profiles found.
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
