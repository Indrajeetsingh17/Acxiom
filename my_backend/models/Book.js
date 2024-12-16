const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  option: { type: String, enum: ['book', 'movie'], default: 'book' },
  name: { type: String, required: true },
  author: { type: String, required: true },
  serialNo: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Book', BookSchema);
