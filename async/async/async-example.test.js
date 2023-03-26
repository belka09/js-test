import { it, expect } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

it('should generate a token value', (done) => {
    const testUserEmail = "test@test.com";

    generateToken(testUserEmail, (err, token) => {
        try {
            expect(token).toBeDefined();
            done();
        } catch (error) {
            done(error);
        }
    });
});

it('should generate a token value', () => {
    const testUserEmail = "test@test.com";
    expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});