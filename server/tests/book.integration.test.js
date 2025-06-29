const request = require('supertest');
const app = require('../server/server');
const mongoose = require('mongoose');
const Book = require('../server/models/book');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});
afterAll(async () => {
  await mongoose.connection.close();
});

describe('GET /api/books', () => {
  it('should return all books', async () => {
    const res = await request(app).get('/api/books');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
