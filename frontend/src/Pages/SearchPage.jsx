import React, { useState } from 'react';
import '../index.css'

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
    const [searchTerm, setSearchTerm] = useState('');
    const [profiles] = useState(generateProfiles(100));
    const [filteredProfiles, setFilteredProfiles] = useState([]);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value === '') {
            setFilteredProfiles([]);
        } else {
            const results = profiles.filter(profile =>
                profile.name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredProfiles(results);
        }
    };

    return (
        <div className="py-4 lg:px-20 md:px-8 px-3 w-[100vw]  h-[90vh] bg-[url('https://www.pngall.com/wp-content/uploads/6/Grass-Ground-PNG-Free-Image.png')] bg-cover">
            <div className="mb-4 md:w-3/4 w-[90%] mx-auto">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full py-2 px-4 font-semibold ring-2 rounded-md ring-green-500 bg-green-50 focus:outline-none focus:ring-3 focus:ring-green-500"
                    placeholder="Search by place or crop..."
                />
            </div>
            <div className="h-[80vh] scrollbar-hide overflow-y-auto space-y-2 mx-auto md:w-3/4 w-[90%]">
                {filteredProfiles.map(profile => (
                    <div key={profile.id} className="p-2 bg-green-200 border border-green-500 rounded">
                        {profile.name}
                    </div>
                ))}
                {filteredProfiles.length === 0 && searchTerm && (
                    <div className="text-gray-500 text-center font-bold">No profiles found.</div>
                )}
            </div>
        </div>
    );
}

export default SearchPage;
