import React, { useEffect, useState, useContext } from 'react';
import Cookies from 'js-cookie';
import { AuthContext } from '../Contexts/AuthContext';

const Profile = ({ isOwner }) => {

  const { setIsAuthenticated, setLoading } = useContext(AuthContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const accessToken = Cookies.get('accessToken');
    console.log('accessToken: ' + accessToken)
    const userData = localStorage.getItem('userData');
    if (userData || accessToken) {
      setUser(userData);
      setIsAuthenticated(true); // Set to true if user details exist
    }
  }, []);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setUser(userData);
    }
  }, []);

  if (!user) {
    return <div className='mt-10'>Loading...</div>;
  }

  // console.log(user);

  // Mock data for contracts with farmer details
  const contracts = [
    {
      id: 1,
      crop: 'Wheat',
      quantity: '1000 kg',
      date: '2024-08-15',
      farmer: { name: 'Raj Kumar', username: 'raj_kumar123' },
    },
    {
      id: 2,
      crop: 'Rice',
      quantity: '500 kg',
      date: '2024-07-22',
      farmer: { name: 'Amit Singh', username: 'amit_farmer' },
    },
    {
      id: 3,
      crop: 'Sugarcane',
      quantity: '750 kg',
      date: '2024-06-30',
      farmer: { name: 'Sunita Devi', username: 'sunita_devi' },
    },
  ];

  const totalCropsPurchased = contracts.length;
  const totalValue = 350000;

  return (
    <div className="min-h-[85vh] bg-white flex flex-col items-center px-4 py-24">
      <div className="w-full max-w-3xl bg-green-500 text-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
          <div className="w-24 h-24 rounded-full bg-white overflow-hidden">
            {/* Placeholder for profile picture */}
            <img
              src={user.profilePicture ?"https://th.bing.com/th/id/OIP.Cl56H6WgxJ8npVqyhefTdQAAAA?rs=1&pid=ImgDetMain" : "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl font-bold">{user.fullName}</h1>
            <a href={`tel:+91${user.mobileNumber}`} className="text-lg"><i className="fa-solid fa-phone"></i> +91-{user.mobileNumber}</a>
            <p className="text-lg">{user.aadharNumber}</p>
          </div>
          <div className="flex justify-center md:justify-end space-x-2">
            {isOwner && (
              <button className="px-4 py-2 bg-white text-green-500 rounded-lg font-semibold">
                Edit
              </button>
            )}
            <button className="px-4 py-2 bg-white text-green-500 rounded-lg font-semibold">
              Message
            </button>
          </div>
        </div>

        <div className="mt-6 bg-green-600 text-white p-4 rounded-lg">
          <p className="font-semibold">Address</p>
          <p className="mt-2">{user.address}</p>
        </div>

        {/* About Section */}
        <div className="mt-6 bg-green-600 text-white p-4 rounded-lg">
          <h2 className="text-xl font-semibold">About</h2>
          <p className="mt-2">
            Experienced buyer with a focus on high-quality crops. Interested in sustainable and organic farming methods. Available for consultations and collaborations.
          </p>
        </div>

        {/* Buyer Stats Section */}
        {totalCropsPurchased > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Buyer Stats</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-white text-green-700 p-4 rounded-lg shadow-md">
                <p className="font-medium">Total Crops Purchased</p>
                <p className="text-2xl font-bold">{totalCropsPurchased}</p>
              </div>
              <div className="bg-white text-green-700 p-4 rounded-lg shadow-md">
                <p className="font-medium">Total Value</p>
                <p className="text-2xl font-bold">₹{totalValue.toLocaleString()}</p>
              </div>
            </div>
          </div>
        )}

        {/* Crops Purchased or Sold Section */}
        {contracts.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Crops Purchased</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {contracts.map((contract) => (
                <div key={contract.id} className="bg-white text-green-700 p-4 rounded-lg shadow-md">
                  <p className="font-medium">Crop: {contract.crop}</p>
                  <p>Quantity: {contract.quantity}</p>
                  <p>Date: {contract.date}</p>
                  <div className="mt-2 border-t pt-2">
                    <p className="font-semibold">Farmer: {contract.farmer.name}</p>
                    <p className="text-sm">@{contract.farmer.username}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Transaction History Section */}
        {contracts.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Transaction History</h2>
            <div className="bg-white text-green-700 p-4 rounded-lg shadow-md mt-4">
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Wheat Purchase</span>
                  <span>₹1,00,000</span>
                </li>
                <li className="flex justify-between">
                  <span>Rice Purchase</span>
                  <span>₹75,000</span>
                </li>
                <li className="flex justify-between">
                  <span>Sugarcane Purchase</span>
                  <span>₹50,000</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;