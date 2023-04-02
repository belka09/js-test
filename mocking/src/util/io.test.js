import { it, expect, vi } from 'vitest';
import { promises as fs } from 'fs';

import writeData from './io';

vi.mock('fs');
vi.mock('path', () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1];
      }
    }
  };
});

it('should execute the writeFile method', () => {
  const testData = 'test';
  const testFilename = 'test.txt';
  writeData(testData, testFilename);
  expect(fs.writeFile).toBeCalledWith(testFilename, testData);
});
