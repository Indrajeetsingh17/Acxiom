// src/components/UserLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'user123') {
      // Navigate to User Dashboard or some other page
      navigate('/user-dashboard');
    } else {
      alert('Invalid User Credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Login</h2>
      <label>Username:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      
      <button type="submit">Login</button>
    </form>
  );
}

export default UserLogin;
