const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  movieTitle: String,
  description: String,
  releaseYear: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Movie', movieSchema);
