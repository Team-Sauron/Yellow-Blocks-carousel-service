/* eslint-disable no-undef */
const supertest = require('supertest');
const app = require('../Server/index.js');

const request = supertest(app);

describe('Test to specified routes', () => {
  test('response product should be 1', async (done) => {
    const response = await request.get('/api/images/1');
    expect(response.body.product).toBe(1);
    done();
  });
});

describe('Test to specified routes', () => {
  test('response product to id:12 should be 12', async (done) => {
    const response = await request.get('/api/images/12');
    expect(response.body.product).toBe(12);
    done();
  });
});

describe('Test if id is not in range', () => {
  test('it should return product number 1 id is over 100', async (done) => {
    const response = await request.get('/api/images/101');
    expect(response.body.product).toBe(1);
    done();
  });

  test('it should return product 1 if id is less than 0', async (done) => {
    const response = await request.get('/api/images/-1');
    expect(response.body.product).toBe(1);
    done();
  });
});
