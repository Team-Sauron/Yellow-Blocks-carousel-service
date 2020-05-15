/* eslint-disable no-undef */
const supertest = require('supertest');
const mongoose = require('mongoose');
const app = require('../Server/index.js');

const request = supertest(app);

afterAll(() => {
  mongoose.connection.close();
});

describe('Test back end requests', () => {
  test('response product should be 1', async (done) => {
    request.get('/api/images/1')
      .then(((response) => {
        expect(response.body.product).toBe(1);
        done();
      }));
  });

  test('response product to id:12 should be 12', async (done) => request.get('/api/images/12')
    .then((response) => {
      expect(response.body.product).toBe(12);
      done();
    }));

  test('it should return product number 1 id is over 100', async (done) => request.get('/api/images/101')
    .then((response) => {
      expect(response.body.product).toBe(1);
      done();
    }));

  test('it should return product 1 if id is less than 0', async (done) => request.get('/api/images/-1')
    .then((response) => {
      expect(response.body.product).toBe(1);
      done();
    }));
});
