const Book = require('../server/models/book');

describe('Book Model Test', () => {
  it('should create a book object correctly', () => {
    const book = new Book({ title: 'A', author: 'B', genre: 'C', publishedYear: 2024 });
    expect(book.title).toBe('A');
    expect(book.author).toBe('B');
  });
});
