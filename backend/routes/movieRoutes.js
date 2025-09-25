const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
  const movie = new Movie(req.body);
  await movie.save();
  res.json(movie);
});

// READ
router.get('/', async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

// UPDATE
router.put('/:id', async (req, res) => {
  const updated = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE
router.delete('/:id', async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.json({ message: 'Movie deleted' });
  
});

module.exports = router;
