import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BuyerDashBoard from './Pages/BuyerDashBoard';
import AddCrop from './Pages/AddCrop';
import Cart from './Pages/Cart';
import DeliveryTracking from './Pages/DeliveryTracking';
import Profile from './Pages/Profile';
import MyContracts from './Pages/MyContracts';
import MarketPlace from './Pages/MarketPlace';
import Navbar from './Components/DashBoardComponents/Navbar';
import SearchPage from './Pages/SearchPage';

const AuthenticatedRoutes = () => {

  const user = {
    fullName: 'John Doe',
    mobileNumber: '123-456-7890',
    email: 'john.doe@example.com',
    address: '123 Main St, City, Country',
    cropsPurchased: ['Wheat', 'Corn', 'Rice'],
    cropsSold: ['Barley', 'Soybean'],
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<BuyerDashBoard />} />
        <Route path='/addcrop' element={<AddCrop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/deliverytracking' element={<DeliveryTracking />} />
        <Route path='/profile' element={<Profile user={user} isOtherUser={false} />} />
        <Route path='/mycontracts' element={<MyContracts />} />
        <Route path='/marketplace' element={<MarketPlace />} />
        <Route path='/search' element={<SearchPage/>} />
      </Routes>
    </>
  );
};

export default AuthenticatedRoutes;
