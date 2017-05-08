const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('de-dupes a list of numbers in an object', () => {
  	const order = {
     entree: 'burger',
     side: null,
     condiment: 'ketchup',
     drink: null,
     dessert: 'burger'
    };
  	const deDupedValues = _.uniq(order);
  	expect(deDupedValues).toEqual(['burger', null, 'ketchup']);
  });
});