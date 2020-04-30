import '@babel/polyfill';
import { hashtagSubmit } from '../client/js/hashtag'

describe('Test, the function "handleSubmit()" should exist' , () => {
    test('It should return true', async () => {
        expect(hashtagSubmit).toBeDefined();
    });
});

describe('Test, the function "handleSubmit()" should be a function' , () => {
    test('It should return true', async () => {
        expect(typeof hashtagSubmit).toBe("function");
    });
});