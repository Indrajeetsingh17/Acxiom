const mongoose = require('mongoose');

// MongoDB connection string (for MongoDB Atlas)
const dbURI = 'mongodb+srv://iamhere:iamhere@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority';

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the process if database connection fails
  }
};

// Export the function so it can be used elsewhere
module.exports = connectDB;
