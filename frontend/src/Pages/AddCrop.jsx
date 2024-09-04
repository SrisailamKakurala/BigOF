import React, { useState } from 'react';

const certificationOptions = [
  "India Organic",
  "NPOP (National Programme for Organic Production)",
  "USDA Organic",
  "EU Organic",
  "JAS (Japanese Agricultural Standard)"
];

const AddCrop = () => {
  const [formData, setFormData] = useState({
    cropName: '',
    variety: '',
    quantity: '',
    price: '',
    harvestDate: '',
    location: '',
    description: '',
    cropImages: [],
    organicCertification: false,
    certificationType: '',
    fertilizerUsed: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      setFormData({
        ...formData,
        cropImages: [...formData.cropImages, ...Array.from(files)],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-24">
      <form
        className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-green-500">Add New Crop</h2>
        
        {/* Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Crop Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="cropName">
              Crop Name
            </label>
            <input
              type="text"
              id="cropName"
              name="cropName"
              value={formData.cropName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none ring-2 ring-green-500 focus:ring-3"
              placeholder="Enter crop name"
              required
            />
          </div>

          {/* Variety */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="variety">
              Variety
            </label>
            <input
              type="text"
              id="variety"
              name="variety"
              value={formData.variety}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none ring-2 ring-green-500 focus:ring-3"
              placeholder="Enter variety"
              required
            />
          </div>

          {/* Quantity */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="quantity">
              Quantity (in kg)
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none ring-2 ring-green-500 focus:ring-3"
              placeholder="Enter quantity"
              required
            />
          </div>

          {/* Price */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
              Price (per kg)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none ring-2 ring-green-500 focus:ring-3"
              placeholder="Enter price in INR"
              required
            />
          </div>

          {/* Harvest Date */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="harvestDate">
              Harvest Date
            </label>
            <input
              type="date"
              id="harvestDate"
              name="harvestDate"
              value={formData.harvestDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none ring-2 ring-green-500 focus:ring-3"
              required
            />
          </div>

          {/* Location */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none ring-2 ring-green-500 focus:ring-3"
              placeholder="Enter farm location"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4 md:col-span-2">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none ring-2 ring-green-500 focus:ring-3"
              placeholder="Enter additional details about the crop"
              required
            />
          </div>

          {/* Organic Certification */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="organicCertification">
              Organic Certification
            </label>
            <input
              type="checkbox"
              id="organicCertification"
              name="organicCertification"
              checked={formData.organicCertification}
              onChange={handleCheckboxChange}
              className="w-4 h-4"
            />
          </div>

          {/* Certification Type */}
          {formData.organicCertification && (
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="certificationType">
                Certification Type
              </label>
              <select
                id="certificationType"
                name="certificationType"
                value={formData.certificationType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none ring-2 ring-green-500 focus:ring-3"
              >
                <option value="" disabled>Select certification</option>
                {certificationOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Fertilizer Used */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="fertilizerUsed">
              Fertilizer Used
            </label>
            <input
              type="text"
              id="fertilizerUsed"
              name="fertilizerUsed"
              value={formData.fertilizerUsed}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none ring-2 ring-green-500 focus:ring-3"
              placeholder="Enter fertilizer used"
              disabled={formData.organicCertification}
            />
          </div>

          {/* Crop Image */}
          <div className="mb-4 md:col-span-2">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="cropImage">
              Crop Image
            </label>
            <input
              type="file"
              id="cropImage"
              name="cropImage"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none ring-2 ring-green-500 focus:ring-3"
            />
            <div className="mt-2">
              {formData.cropImages.map((image, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Crop ${index + 1}`}
                    className="w-16 h-16 object-cover rounded-lg shadow-md"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          cropImages: formData.cropImages.filter((_, i) => i !== index),
                        })
                      }
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => document.getElementById('cropImage').click()}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg font-semibold shadow-md hover:bg-green-600 focus:outline-none ring-2 ring-green-500 focus:ring-3"
              >
                Add Another Image
              </button>
            </div>
          </div>
  
          {/* Submit Button */}
          <div className="text-center mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold shadow-md hover:bg-green-600 focus:outline-none ring-2 ring-green-500 focus:ring-3"
            >
              Add Crop
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AddCrop;
  
