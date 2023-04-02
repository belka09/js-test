import { beforeEach, describe, expect, it } from 'vitest';
import { extractPostData } from './posts';

let testTitle = 'Test title';
let testContent = 'Test content';
let testFormData;

describe('extractPostData()', () => {
    beforeEach(() => {
        testFormData = {
            title: testTitle,
            content: testContent,
            get(key) {
                return this[key];
            }
        };
    });

    it('should extract title and content from the provided form data', () => {
        const data = extractPostData(testFormData);
        expect(data.title).toBe(testTitle);
        expect(data.content).toBe(testContent);
    });

    it('should return an error if title does not provided', () => {
        testTitle = '';

        expect(() => extractPostData(testFormData).toThrow('A title must be provided.'));
    });

    it('should return an error if content does not provided', () => {
        testContent = '';

        expect(() => extractPostData(testFormData).toThrow('Content must not be empty!'));
    });
});