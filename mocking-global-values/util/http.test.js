import { describe, expect, it, vi } from 'vitest';
import { sendDataRequest } from './http';

const testResponseData = { testKey: 'testData' };
const testFetch = vi.fn((url, options) => {
    return new Promise((res, rej) => {
        const testResponse = {
            ok: true,
            json() {
                return new Promise((res, rej) => {
                    res(testResponseData);
                })
            },
        }
        res(testResponse);
    });
});

vi.stubGlobal('fetch', testFetch);

describe('sendDataRequest()', () => {
    it('should return any available response data', () => {
        const testData = { key: 'test' }
        expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
    });
});