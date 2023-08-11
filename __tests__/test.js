const request = require('supertest');
<<<<<<< HEAD
const app = require('../index'); // Replace with the actual path to your index.js file
const connection = require('../database/connection'); // Replace with actual path to your connection.js file

describe('Testing the application', () => {
=======
const app = require('../index'); // Substitua pelo caminho real para o seu arquivo index.js
const connection = require('../database/connection'); // Substitua pelo caminho real para o seu arquivo connection.js

describe('Testando a aplicação', () => {
>>>>>>> 7f5aaed25d9930aa1fb00648e68644cfa05a66c3
  beforeAll(async () => {
    await connection.authenticate();
  });

  afterAll(async () => {
    await connection.close();
  });

<<<<<<< HEAD
  it('should render the main page', async () => {
=======
  it('deve renderizar a página principal', async () => {
>>>>>>> 7f5aaed25d9930aa1fb00648e68644cfa05a66c3
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Search for products');
  });

<<<<<<< HEAD
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
=======
  it('deve retornar resultados válidos após a busca', async () => {
    const response = await request(app)
      .post('/search')
      .send({ product: 'produto-simulado', quantity: 10 });
    expect(response.status).toBe(200);
    // Adicione mais expect conforme necessário
  });

  it('deve lidar com busca de produto inexistente', async () => {
    const response = await request(app)
      .post('/search')
      .send({ product: 'produto-inexistente', quantity: 10 });
    expect(response.status).toBe(200);
    // Adicione mais expect conforme necessário
>>>>>>> 7f5aaed25d9930aa1fb00648e68644cfa05a66c3
  });
});

