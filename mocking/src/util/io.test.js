import { it, expect, vi } from 'vitest';
import { promises as fs } from 'fs';

import writeData from './io';

it('should execute the writeFile method', () => {
  const testData = 'test';
  const testFilename = 'test.txt';
  return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
});
