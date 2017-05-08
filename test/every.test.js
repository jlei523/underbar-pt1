const _ = require('../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums)).toBe(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 6, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(false);
    });

    it('returns true if all elements in an array are strings', () => {
      const strings = ['one', 'two', 'three'];
      expect(_.every(strings, string => typeof string === 'string')).toBe(true);
    });

    it('returns true if every element in an array does not equal to the number 1', () => {
      const arr = ['one', undefined, null, true];
      expect(_.every(arr, element => element !== 1)).toBe(true);
    });

  });
});