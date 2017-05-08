const _ = require('../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (acc, num) => acc + num, 0);
    expect(result).toEqual(15);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (a, b) => a + b);
    expect(result).toEqual(15);
  });

  it('reduces an array of numbers to a sum, *with* an initial value of 10', () => {
    const nums = [1, 2, 3, 4, 5];
    const results = _.reduce(nums, (acc, num) => acc + num, 10);
    expect(results).toEqual(25);
  });

  it('reduces an array of numbers to a product, *with* an initital value of 1', () => {
    const nums = [1,2,3,4,5];
    const results = _.reduce(nums, (acc, num) => acc * num); 
    expect(results).toEqual(120);
  });

  it('reduces an array of strings into a phrase', () => {
    const strings = ['Hi', ',', ' I\'m', ' Joe'];
    const results = _.reduce(strings, (acc, string) => acc + string);
    expect(results).toEqual('Hi, I\'m Joe');
  });
});


 //  it('maps every numer in an array', () => {
 //  let arr = [2,5,'wef',,undefined, null,23];
 //  let mappedArr = _.reduce(arr, (element)  => typeof element === "number");
 //  expect(mappedArr).toEqual([2,5,23]);
 // });