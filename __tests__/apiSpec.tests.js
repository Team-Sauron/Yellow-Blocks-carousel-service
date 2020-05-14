/* eslint-disable no-undef */
const supertest = require('supertest');
const app = require('../Server/index.js');

const request = supertest(app);

describe('Test back end requests', () => {
  test('response product should be 1', async (next) => {
    const response = await request.get('/api/images/1');
    expect(response.body.product).toBe(1);
    next();
  });

  test('response product to id:12 should be 12', async (next) => {
    const response = await request.get('/api/images/12');
    expect(response.body.product).toBe(12);
    next();
  });

  test('it should return product number 1 id is over 100', async (next) => {
    const response = await request.get('/api/images/101');
    expect(response.body.product).toBe(1);
    next();
  });

  test('it should return product 1 if id is less than 0', async (next) => {
    const response = await request.get('/api/images/-1');
    expect(response.body.product).toBe(1);
    next();
  });
});
