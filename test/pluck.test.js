const _ = require('../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });

 it('returns an array of pets, given an array of people objects', () => {
 	const peopleTwo = [
 		{name: 'Joe', pets: ['Fishy', 'Dog']},
 		{name: 'Jane', pets: ['Turtle']},
 		{name: 'John', pets: ['Cat']}
 	];
 	const resultTwo = _.pluck(peopleTwo, 'pets');
 	expect(resultTwo).toEqual([['Fishy', 'Dog'],['Turtle'],['Cat']]);
 });

});