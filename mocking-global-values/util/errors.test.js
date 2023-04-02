import { describe, expect, it } from 'vitest';

import { HttpError, ValidationError } from './errors';

describe('class HttpError', () => {
  it('should containd provided status code, message and data', () => {
    const testStatus = 1;
    const testMessage = 'test';
    const testData = { key: 'test' };

    const testError = new HttpError(testStatus, testMessage, testData);

    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBe(testData);
  });

  it('should contain undefined as data if no data is provided', () => {
    const testStatus = 1;
    const testMessage = 'test';

    const testError = new HttpError(testStatus, testMessage);

    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBeUndefined();
  });
});

describe('class ValidationError', () => {
  it('should contain the provided message', () => {
    const testMessage = 'test';
    const testValidationError = new ValidationError(testMessage);
    expect(testValidationError.message).toBe(testMessage);
  });


  it('should contain undefined as data if no data is provided', () => {
    const testValidationError = new ValidationError();
    expect(testValidationError.message).toBeUndefined();
  })
});