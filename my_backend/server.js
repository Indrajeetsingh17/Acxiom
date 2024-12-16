const express = require('express');
const app = express();
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json()); // To parse incoming JSON requests

// Simulated login route
app.post('/api/login', (req, res) => {
  const { username } = req.body;

  // Simulate direct login without authentication
  const token = `${username}-dummy-token`;  // Generate a dummy token

  // Send the dummy token to the frontend
  res.json({ token });
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
