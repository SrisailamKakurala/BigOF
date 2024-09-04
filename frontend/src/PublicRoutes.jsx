import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import RegisterPage1 from './Pages/RegisterPage1';
import LoginPage from './Pages/LoginPage';
import RegisterBuyer from './Pages/RegisterBuyer';
import RegisterFarmer from './Pages/RegisterFarmer';
import OTPVerification from './Pages/OtpVerification';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/register' element={<RegisterPage1 />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register_farmer' element={<RegisterFarmer />} />
      <Route path='/register_buyer' element={<RegisterBuyer />} />
      <Route path='/verifyotp' element={<OTPVerification />} />
    </Routes>
  );
};

export default PublicRoutes;
