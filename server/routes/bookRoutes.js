const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Create a new book
router.post('/', async (req, res) => {
  const newBook = new Book(req.body);
  await newBook.save();
  res.status(201).send(newBook);
});

// Get all books
router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Update a book
router.put('/:id', async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(book);
});

// Delete a book
router.delete('/:id', async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: 'Book deleted successfully' });
});

module.exports = router;
