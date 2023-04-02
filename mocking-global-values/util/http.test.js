import { describe, expect, it, vi } from 'vitest';
import { HttpError } from './errors';
import { sendDataRequest } from './http';

const testResponseData = { testKey: 'testData' };
const testFetch = vi.fn((url, options) => {
    return new Promise((res, rej) => {
        if (typeof options.body !== 'string') {
            return rej('not a string');
        }
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
        const testData = { key: 'test' };
        return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
    });

    it('should convert the provided data to JSON before sending request', async () => {
        const testData = { key: 'test' };
        let errorMessage;
        try {
            await sendDataRequest(testData);
        } catch (error) {
            errorMessage = error;
        }
        return expect(errorMessage).not.toBe('not a string');
    });

    it('should throw an HttpError in case of non-ok response', () => {
        testFetch.mockImplementationOnce((url, options) => {
            return new Promise((res, rej) => {
                const testResponse = {
                    ok: false,
                    json() {
                        return new Promise((res, rej) => {
                            res(testResponseData);
                        })
                    },
                }
                res(testResponse);
            });
        });

        const testData = { key: 'test' };

        return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
    });
});