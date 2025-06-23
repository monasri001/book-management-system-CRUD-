// tests/book.integration.test.js

const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Book = require('../models/Book');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('Integration Test: MongoDB', () => {
  it('should save a book in-memory', async () => {
    const book = await Book.create({
      title: 'Memory Book',
      author: 'Memory Author',
      genre: 'Memoir',
      publishedYear: 2024
    });

    const found = await Book.find({});
    expect(found.length).toBe(1);
    expect(found[0].title).toBe('Memory Book');
  });
});
