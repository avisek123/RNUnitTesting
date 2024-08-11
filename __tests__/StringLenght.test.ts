import {FindStringLenght} from '../src/utils/Functions/stringLenght';

describe('Find the lenght of string', () => {
  it('it should return the length of the string', () => {
    expect(FindStringLenght('hello')).toBe(5);
  });
});
