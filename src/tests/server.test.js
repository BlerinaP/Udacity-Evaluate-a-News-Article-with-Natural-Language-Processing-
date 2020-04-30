const request = require('supertest');
import '@babel/polyfill';
const app = require('../server/server.js');

describe('Test root path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});

describe('Text path "/text"', () => {
    test('It should response the POST method', async () => {
        const response = await request(app).post('/text');
        expect(response.statusCode).toBe(200);
    });
});

describe('Url path "/url"', () => {
    test('It should response the POST method', async () => {
        const response = await request(app).post('/url');
        expect(response.statusCode).toBe(200);
    });
});

describe('Hashtag path "/hashtag"', () => {
    test('It should response the POST method', async () => {
        const response = await request(app).post('/hashtag');
        expect(response.statusCode).toBe(200);
    });
});