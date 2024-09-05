import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import RegisterPage1 from './Pages/RegisterPage1';
import LoginPage from './Pages/LoginPage';
import RegisterBuyer from './Pages/RegisterBuyer';
import RegisterFarmer from './Pages/RegisterFarmer';
import OTPVerification from './Pages/OtpVerification';
import AuthenticatedRoutes from './AuthenticatedRoutes'
import { AuthContext } from './Contexts/AuthContext';
import Loader from './utils/Loader';

const App = () => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <Router>
        {isAuthenticated ? (
          <AuthenticatedRoutes />
        ) : (
          <>
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/register' element={<RegisterPage1 />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register_farmer' element={<RegisterFarmer />} />
              <Route path='/register_buyer' element={<RegisterBuyer />} />
              <Route path='/verifyotp' element={<OTPVerification />} />

            </Routes>
          </>
        )}
      </Router>
    </ >
  );
};

export default App;
