const request = require('supertest');
const app = require('../server/server');

describe('POST /api/books', () => {
  it('should create a book', async () => {
    const res = await request(app)
      .post('/api/books')
      .send({ title: 'Test', author: 'Author', genre: 'Drama', publishedYear: 2024 });
    expect(res.statusCode).toEqual(201);
    expect(res.body.title).toBe('Test');
  });
});
