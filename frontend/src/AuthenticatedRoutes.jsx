import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BuyerDashBoard from './Pages/BuyerDashBoard';

const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<BuyerDashBoard />} />
      {/* Add more routes for authenticated users here */}
    </Routes>
  );
};

export default AuthenticatedRoutes;
