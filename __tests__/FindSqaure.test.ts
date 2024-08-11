import {findSqaure} from '../src/utils/Functions/Sqaure';

describe('Find the sqaure of two number', () => {
  it('the sqaure of 5 is 25', () => {
    expect(findSqaure(5, 5)).toBe(25);
  });
});
