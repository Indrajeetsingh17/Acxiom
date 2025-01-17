const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true }, // Ensure username is unique
  role: { type: String, required: true, default: 'user' },  // Default role is 'user'
});

const User = mongoose.model('User', userSchema);

module.exports = User;
