// tests/book.unit.test.js

const Book = require('../models/Book');

describe('Unit Test: Book Model', () => {
  it('should create a book with correct fields', () => {
    const book = new Book({
      title: 'Unit Book',
      author: 'Unit Author',
      genre: 'Unit Genre',
      publishedYear: 2021
    });

    expect(book.title).toBe('Unit Book');
    expect(book.author).toBe('Unit Author');
    expect(book.genre).toBe('Unit Genre');
    expect(book.publishedYear).toBe(2021);
  });
});
