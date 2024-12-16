import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();  // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username) {
      alert('Username is required');
    } else {
      // Simulate a successful login and generate a token
      const token = generateToken(username);  // This function generates a JWT-like token

      // Store the JWT token in localStorage
      localStorage.setItem('token', token);
      console.log('Login successful, token:', token);

      // Redirect the user to the dashboard or another page
      navigate('/user-dashboard');  // Replace with your dashboard path
    }
  };

  // Dummy function to simulate token generation
  const generateToken = (username) => {
    // Here, you can generate a JWT token (or just simulate it)
    // In real scenarios, you'd call your backend to generate a token
    return `${username}-dummy-token`;
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
