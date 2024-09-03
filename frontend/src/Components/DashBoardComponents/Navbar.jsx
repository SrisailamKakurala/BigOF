import React, { useState } from 'react';
import logo from '/src/assets/images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = ({ dashboard }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="xl:px-20 lg:px-20 md:px-8 px-[1px] bg-white border-b border-gray-200 shadow-md rounded-b-md">
      <div className="mx-auto px-4 py-[2px] flex justify-between items-center">
        {/* Left Section: Logo */}
        <div className="text-xl font-bold text-gray-800">
          <a href="/" className="flex items-center md:text-4xl pt-1 text-xl">
            <img src={logo} alt="Logo" className="h-16 mr-2" />
            BigOF
          </a>
        </div>

        {/* Right Section: Search Icon and Links */}
        <div className="flex items-center space-x-4 md:text-xl text-md">
          {/* Search Icon */}
          <Link to="/search"><button className="text-gray-600 hover:text-gray-800 focus:outline-none md:hidden">
            <i className="fas fa-search text-2xl"></i>
          </button>
          </Link>

          {/* Breadcrumb Menu Toggle Button (Mobile/Tablet) */}
          <button
            className="text-gray-600 hover:text-gray-800 focus:outline-none md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fas fa-bars text-2xl mx-2"></i>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center md:text-xl text-md font-semibold">
            <Link to="/search"><button className="text-gray-600 hover:text-gray-800 focus:outline-none">
              <i className="fas fa-search"></i>
            </button>
            </Link>
            <Link to="/" className="block text-green-500 hover:text-gray-800">
              Home
            </Link>
            <Link to="/marketplace" className="text-green-500 hover:text-gray-600 duration-200">
              Marketplace
            </Link>
            {/* Conditionally render Cart or Crop based on the dashboard prop */}
            {dashboard === 'farmer' ? (
              <Link to="/addcrop" className="text-green-500 hover:text-gray-600 duration-200">
                Sell Crop
              </Link>
            ) : (
              <Link to="/cart" className="text-green-500 hover:text-gray-600 duration-200">
                Cart
              </Link>
            )}
            <Link to="/mycontracts" className="text-green-500 hover:text-gray-600 duration-200">
              My Contracts
            </Link>
            <Link to="/deliverytracking" className="text-green-500 hover:text-gray-600 duration-200">
              Delivery Tracking
            </Link>
            <Link to="/profile" className="text-green-500 hover:text-gray-600 duration-200">
              <i className="fas fa-user"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 absolute z-9">
          <div className="px-4 py-3 space-y-2">
            <Link to="/" className="block text-green-500 hover:text-gray-800">
              <div className='w-[100vw]'>
                Home
              </div>
            </Link>
            <Link to="/marketplace" className="block text-green-500 hover:text-gray-800">
              <div className='w-[100vw]'>
                Marketplace
              </div>
            </Link>
            {/* Conditionally render Cart or Crop based on the dashboard prop */}
            {dashboard === 'farmer' ? (
              <Link to="/addcrop" className="block text-green-500 hover:text-gray-800">
                <div className='w-[100vw]'>
                  Sell Crop
                </div>
              </Link>
            ) : (
              <Link to="/cart" className="block text-green-500 hover:text-gray-800">
                <div className='w-[100vw]'>
                  Cart
                </div>
              </Link>
            )}
            <Link to="/mycontracts" className="block text-green-500 hover:text-gray-800">
              <div className='w-[100vw]'>
                My Contracts
              </div>
            </Link>
            <Link to="/deliverytracking" className="block text-green-500 hover:text-gray-800">
              <div className='w-[100vw]'>
                Delivery Tracking
              </div>
            </Link>
            <Link to="/profile" className="block text-green-500 hover:text-gray-800 flex gap-2 items-center">
              <i className="fas fa-user"></i> Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
