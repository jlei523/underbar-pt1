const _ = require('../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

  it('returns true if an array contains undefined', () => {
  	const arr = [3,4,5,,];
  	expect(_.some(arr, element => typeof element === 'undefined')).toBe(true);
  });

  it('returns true if an array contains an object', () => {
  	const arr = [23,23,23,{},];
  	expect(_.some(arr, element => typeof element === 'object')).toBe(true);
  });
});