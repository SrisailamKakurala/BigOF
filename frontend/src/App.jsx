import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import RegisterPage1 from './Pages/RegisterPage1';
import LoginPage from './Pages/LoginPage';
import RegisterBuyer from './Pages/RegisterBuyer';
import RegisterFarmer from './Pages/RegisterFarmer';
import OTPVerification from './Pages/OtpVerification';
import BuyerDashBoard from './Pages/BuyerDashBoard';
import FarmerDashBoard from './Pages/FarmerDashBoard';
import AddCrop from './Pages/AddCrop';
import Cart from './Pages/Cart';
import DeliveryTracking from './Pages/DeliveryTracking';
import Profile from './Pages/Profile';
import MyContracts from './Pages/MyContracts';
import MarketPlace from './Pages/MarketPlace';
import Navbar from './Components/DashBoardComponents/Navbar.jsx';
import SearchPage from './Pages/SearchPage';

const App = () => {
  // Retrieve authentication status from localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {isAuthenticated && <Navbar />}
      <Router>
        <Routes>
          {
            isAuthenticated === true ?
            <>
                <Route path='/' element={<LandingPage />} />
                <Route path='/register' element={<RegisterPage1 />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register_farmer' element={<RegisterFarmer />} />
                <Route path='/register_buyer' element={<RegisterBuyer />} />
                <Route path='/verifyotp' element={<OTPVerification />} />
            </>

              :

            <>
                <Route path='/' element={<FarmerDashBoard />} />
                <Route path='/buyerDashboard' element={<BuyerDashBoard />} />
                <Route path='/addcrop' element={<AddCrop />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/deliverytracking' element={<DeliveryTracking />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/mycontracts' element={<MyContracts />} />
                <Route path='/marketplace' element={<MarketPlace />} />
                <Route path='/search' element={<SearchPage />} />
            </>
          }
        </Routes>
      </Router>
    </>
  );
};

export default App;
