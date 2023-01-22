import { it, expect } from 'vitest';
import { validateStringNotEmpty, validateNumber } from './validation';

it('should throw an error if empty string is provided', () => {
    const input = '';
    const resultFn = () => validateStringNotEmpty(input);
    expect(resultFn).toThrow();
});

it('should throw an error message that contains a reason (must not be empty)', () => {
    const input = '';
    const resultFn = () => validateStringNotEmpty(input);
    expect(resultFn).toThrow(/must not be empty/);
});

it('should throw an error if other type except of string is provided', () => {
    const inputNumber = 1;
    const inputObject = {}
    const inputBool = {}

    const resultFnNumber = () => validateStringNotEmpty(inputNumber);
    const resultFnObject = () => validateStringNotEmpty(inputObject);
    const resultFnBool = () => validateStringNotEmpty(inputBool);

    expect(resultFnNumber).toThrow();
    expect(resultFnObject).toThrow();
    expect(resultFnBool).toThrow();
});


it('should throw an error if NaN is provided', () => {
    const input = NaN;
    const resultFn = () => validateNumber(input);
    expect(resultFn).toThrow();
});

it('should throw an error if non-numerical value is provided', () => {
    const input = 'string';
    const resultFn = () => validateNumber(input);
    expect(resultFn).toThrow();
});

it('should throw an error message that contains a reason (Invalid number)', () => {
    const input = NaN;
    const resultFn = () => validateNumber(input);
    expect(resultFn).toThrow(/Invalid number/);
});

it('should not throw an error if number is provided', () => {
    const input = 1;
    const resultFn = () => validateNumber(input);
    expect(resultFn).not.toThrow();
});