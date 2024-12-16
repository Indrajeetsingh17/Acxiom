const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// @route   POST /api/books/update
// @desc    Update a book/movie record
router.post('/update', async (req, res) => {
  const { option, name, author, serialNo } = req.body;

  // Validate required fields
  if (!name || !author || !serialNo) {
    return res.status(400).json({ message: 'All fields are mandatory!' });
  }

  try {
    const updatedBook = await Book.findOneAndUpdate(
      { serialNo },
      { option, name, author, updatedAt: Date.now() },
      { new: true, upsert: true }
    );

    res.status(200).json({
      message: 'Book updated successfully!',
      data: updatedBook
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

module.exports = router;
