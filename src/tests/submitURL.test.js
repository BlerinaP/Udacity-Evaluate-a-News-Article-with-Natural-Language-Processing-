import '@babel/polyfill';
import { handleSubmitArticle } from '../client/js/submitURL'

describe('Test, the function "handleSubmit()" should exist' , () => {
    test('It should return true', async () => {
        expect(handleSubmitArticle).toBeDefined();
    });
});

describe('Test, the function "handleSubmit()" should be a function' , () => {
    test('It should return true', async () => {
        expect(typeof handleSubmitArticle).toBe("function");
    });
});