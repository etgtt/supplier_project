const request = require('supertest');
const app = require('../index'); // Substitua pelo caminho real para o seu arquivo index.js
const connection = require('../database/connection'); // Substitua pelo caminho real para o seu arquivo connection.js

describe('Testando a aplicação', () => {
  beforeAll(async () => {
    await connection.authenticate();
  });

  afterAll(async () => {
    await connection.close();
  });

  it('deve renderizar a página principal', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Search for products');
  });

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
  });
});

