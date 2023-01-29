import { describe, it, expect } from 'vitest';

import { generateResultText } from './output';

describe('generateResultText', () => {
    it('should return a string, no matter which value is passed in', () => {
        const val1 = 1;
        const val2 = 'invalid';
        const val3 = false;

        const res1 = generateResultText(val1);
        const res2 = generateResultText(val2);
        const res3 = generateResultText(val3);

        expect(res1).toBeTypeOf('string');
        expect(res2).toBeTypeOf('string');
        expect(res3).toBeTypeOf('string');
    });

    it('should return a string that contains the calculation result if a number is provided as a result', () => {
        const result = 5;

        const resultText = generateResultText(result);

        expect(resultText).toContain(result.toString());
    });

    it('shluld return an empty string if "no-calc" is provided as a result', () => {
        const result = "no-calc";

        const resultText = generateResultText(result);

        expect(resultText).toBe('');
    });
});