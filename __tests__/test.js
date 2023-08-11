const request = require('supertest');
const app = require('../index'); // Replace with the actual path to your index.js file
const connection = require('../database/connection'); // Replace with actual path to your connection.js file

describe('Testing the application', () => {
  beforeAll(async () => {
    await connection.authenticate();
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should render the main page', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Search for products');
  });

  it('should render the main page', async () => {
    const response = await request(app)
      .post('/search')
      .send({ product: 'simulated-product', quantity: 10 });
    expect(response.status).toBe(200);
    // Add more expect as needed
  });

  it('must deal with non-existent product search', async () => {
    const response = await request(app)
      .post('/search')
      .send({ product: 'product-non-existent', quantity: 10 });
    expect(response.status).toBe(200);
    // Add more expect as needed
  });
});

