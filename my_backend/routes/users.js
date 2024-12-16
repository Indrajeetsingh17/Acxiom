const express = require('express');
const router = express.Router();
const User = require('../models/User');

// @route   POST /api/users/manage
// @desc    Add or manage user details
router.post('/manage', async (req, res) => {
  const { userType, name } = req.body;

  // Validate required fields
  if (!name) {
    return res.status(400).json({ message: 'Name is mandatory!' });
  }

  try {
    const newUser = new User({
      userType,
      name
    });

    await newUser.save();

    res.status(201).json({
      message: 'User saved successfully!',
      data: newUser
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

module.exports = router;
