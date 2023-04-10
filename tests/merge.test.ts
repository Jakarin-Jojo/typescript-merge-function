import { merge } from '../src/merge';

describe('merge', () => {
    it('should return empty array when given empty arrays', () => {
        const result = merge([], []);
        expect(result).toEqual([]);
    });

    it('should return the same array when given one array and an empty array', () => {
        const result1 = merge([1, 2, 3], []);
        const result2 = merge([], [1, 2, 3]);
        expect(result1).toEqual([1, 2, 3]);
        expect(result2).toEqual([1, 2, 3]);
    });

    it('should merge two sorted arrays of different sizes', () => {
        const result = merge([1, 3, 5], [2, 4, 6, 8, 10]);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 8, 10]);
    });

    it('should merge two sorted arrays of the same size', () => {
        const result = merge([1, 3, 5], [2, 4, 6]);
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should merge two sorted arrays with duplicate numbers', () => {
        const result = merge([1, 2, 2, 5], [2, 4, 4, 6]);
        expect(result).toEqual([1, 2, 2, 2, 4, 4, 5, 6]);
    });

    it('should merge two sorted arrays with negative numbers', () => {
        const result = merge([-5, -3, -1], [-4, -2, 0, 2, 4]);
        expect(result).toEqual([-5, -4, -3, -2, -1, 0, 2, 4]);
    });
});
