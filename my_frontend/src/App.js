// App.js
import React, { useEffect, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

// Import components
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import AdminDashboard from './components/AdminDashboard'; 
import UserDashboard from './components/UserDashboard'; 

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState('');

  useEffect(() => {
    // Check if there's a token stored and decode the user role
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      setIsAuthenticated(true);
      setRole(decodedToken.role);
    }
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav style={{ padding: '1rem', backgroundColor: '#333', color: 'white' }}>
        <ul style={{ display: 'flex', listStyleType: 'none' }}>
          <li style={{ margin: '0 10px' }}>
            <Link to="/admin-login" style={{ color: 'white', textDecoration: 'none' }}>Admin Login</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/user-login" style={{ color: 'white', textDecoration: 'none' }}>User Login</Link>
          </li>
        </ul>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/admin-dashboard" element={isAuthenticated && role === 'admin' ? <AdminDashboard /> : <UserLogin />} />
        <Route path="/user-dashboard" element={isAuthenticated && role === 'user' ? <UserDashboard /> : <AdminLogin />} />
      </Routes>
    </div>
  );
}

export default App;
