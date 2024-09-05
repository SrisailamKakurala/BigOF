import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const accessToken = Cookies.get('accessToken');
    const farmerDets = localStorage.getItem('farmerDets');
    if (farmerDets || accessToken) {
      setIsAuthenticated(true); // Set to true if user details exist
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
