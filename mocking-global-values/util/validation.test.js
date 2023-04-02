import { describe, expect, it } from 'vitest';
import { validateNotEmpty } from './validation';

describe('validateNotEmpty()', () => {
    it('should throw an error if an empty string is provided as a value', () => {
        const testInput = '';
        const validationFn = () => validateNotEmpty(testInput);
        expect(validationFn).toThrow();
    });

    it('should throw with provided error message if it is provided', () => {
        const testInput = '';
        const testErrorMessage = 'Text cannot be empty'
        const validationFn = () => validateNotEmpty(testInput, testErrorMessage);
        expect(validationFn).toThrow(testErrorMessage);
    });
});