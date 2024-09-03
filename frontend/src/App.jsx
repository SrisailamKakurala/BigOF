import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import AuthenticatedRoutes from './AuthenticatedRoutes';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // This would be dynamic based on authentication state

  return (
    <Router>
      {isAuthenticated ? <AuthenticatedRoutes /> : <PublicRoutes />}
    </Router>
  );
};

export default App;
