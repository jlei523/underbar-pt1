_ = require('../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });

  it('maps every value in an object to their square', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    };

    let mappedObj = _.map(obj, (element) => element * element);
    expect(mappedObj).toEqual([1,4,9,16]);
  })

  it('maps every value in an object', () => {
    const objTwo = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    };
    let mappedObjTwo = _.map(objTwo, (element, key, obj) => obj[key]);
    expect(mappedObjTwo).toEqual([1,2,3,4]);
  })

  it('maps every number in an array to their index', () => {
  	let arr = [1, 2, 3, 4, 5];
  	let mappedArr = _.map(arr, (element,index) => index);
  	expect(mappedArr).toEqual([0,1,2,3,4]);
  });
});