import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BuyerDashBoard from './Pages/BuyerDashBoard';
import FarmerDashBoard from './Pages/FarmerDashBoard';
import AddCrop from './Pages/AddCrop';
import Cart from './Pages/Cart';
import DeliveryTracking from './Pages/DeliveryTracking';
import Profile from './Pages/Profile';
import MyContracts from './Pages/MyContracts';
import Navbar from './Components/DashBoardComponents/Navbar';
import SearchPage from './Pages/SearchPage';
import Marketplace from './Pages/MarketPlace';

const AuthenticatedRoutes = () => {

  const user = JSON.stringify(localStorage.getItem('userData')).user

  return (
    <>
      <Navbar dashboard={user}/>
      <Routes>
        {
          user == 'farmer'?
          <Route path='/' element={<FarmerDashBoard  />} /> :
          <Route path='/' element={<BuyerDashBoard  />} />
        } 
        {/* <Route path='/' element={<FarmerDashBoard  />} />
        <Route path='/buyerDashboard' element={<BuyerDashBoard  />} /> */}
        <Route path='/addcrop' element={<AddCrop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/deliverytracking' element={<DeliveryTracking />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/mycontracts' element={<MyContracts />} />
        <Route path='/marketplace' element={<Marketplace />} />
        <Route path='/search' element={<SearchPage/>} />
      </Routes>
    </>
  );
};

export default AuthenticatedRoutes;
