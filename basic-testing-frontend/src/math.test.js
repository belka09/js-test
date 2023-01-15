import { it, expect } from 'vitest';
import { add } from './math';


it('should summarize all number values in array', () => {
    // Arrange
    const numbers = [1, 2, 3];
    // Act
    const result = add(numbers);
    // Assert
    const expectedResult = numbers.reduce((prevValue, nextValue) => prevValue + nextValue, 0);
    expect(result).toBe(expectedResult);
});

it('should yeild NaN if a least one invalid number is provided', () => {
    const inputs = ['invalid', 2, 3];
    const result = add(inputs);
    expect(result).toBeNaN();
});

it('should yeild a correct sum if an array of numeric string values is provided', () => {
    const numbers = ['1', '2', '3'];
    const result = add(numbers);
    const expectedResult = numbers.reduce((prevValue, nextValue) => +prevValue + +nextValue, 0);
    expect(result).toBe(expectedResult);
});