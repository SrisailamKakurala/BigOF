import React from "react";
import Footer from "../Components/landinPageComponents/Footer"
import SearchPage from "./SearchPage"

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-white">
      <SearchPage />
      {/* Main Section */}
      <main className="p-8">
        <h2 className="text-3xl font-semibold text-green-500 mb-6">Marketplace</h2>

        {/* Grid for Crop/Product Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample Product Card */}
          {Array(6).fill("").map((_, idx) => (
            <div key={idx} className="border rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <img
                src={`https://via.placeholder.com/300?text=Crop+${idx + 1}`}
                alt={`Crop ${idx + 1}`}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-green-500">Crop {idx + 1}</h3>
                <p className="text-gray-600">Description of crop/product...</p>
                <p className="mt-2 font-semibold text-lg text-green-700">₹5000</p>
                <button className="mt-4 bg-green-500 text-white p-2 rounded-lg w-full hover:bg-green-600">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Section */}
      <Footer/>
    </div>
  );
};

export default Marketplace;
