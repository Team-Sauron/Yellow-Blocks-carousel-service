const request = require('supertest');
const app = require('../Server/index.js');

describe("Test to specified routes", () => {
  test('response body length should be 1', async (done) => {
    const response = await request(app).get('/api/images/1');
    expect(response.body.product).toBe(1);
    done();
  });
});
