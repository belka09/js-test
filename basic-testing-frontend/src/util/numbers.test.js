import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

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
