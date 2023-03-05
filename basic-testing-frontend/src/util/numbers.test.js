import { it, expect, describe } from 'vitest';
import { add } from '../math';
import { cleanNumbers, transformToNumber } from './numbers';

describe('transformToNumber()', () => {
    it('should transform string number to number', () => {
        const input = '1';
        const result = transformToNumber(input);
        expect(result).toBeTypeOf('number');
    });

    it('should transform string number to number without NaN option', () => {
        // transformToNumber() can return NaN object which is also type Number. We should need to test proper value without NaNN
        const input = '1';
        const result = transformToNumber(input);
        expect(result).toBe(+input);
    });

    it('should yeild NaN for non-transformable values', () => {
        const input = 'invalid';
        const input2 = {};
        const result = transformToNumber(input);
        const result2 = transformToNumber(input2);
        expect(result).toBeNaN();
        expect(result2).toBeNaN();
    });
});

describe('cleanNumbers()', () => {
    it('should return an array of number value if an array of string number values is provided', () => {
        const numberValues = ['1', '2'];
        const cleanedNumbers = cleanNumbers(numberValues);
        expect(cleanedNumbers[0]).toBeTypeOf('number');
    });

    it('should throw an error if an array with at least one empty sting is provided', () => {
        const numberValues = ['', 1];
        const cleanedFn = () => cleanNumbers(numberValues);
        expect(cleanedFn).toThrow();
    });

    it('should throw an error if provided with multiple arguments instead of an array', () => {
        const num1 = 1;
        const num2 = 2;
        const cleanedFn = () => cleanNumbers(num1, num2);
        expect(cleanedFn).toThrow(/is not iterable/);
    });

    it('should yeild empty array as False if an empy array is provided', () => {
        const numberValues = [];
        const cleanedFn = cleanNumbers(numberValues);
        expect(cleanedFn).toBeFalsy;
    });
});

