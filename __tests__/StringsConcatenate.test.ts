import {concatenateStrings} from '../src/utils/Functions/StringsConcatenate';

describe('Strings Concatenate', () => {
  it('add two strings', () => {
    expect(concatenateStrings('he', 'llo')).toBe('hello');
  });
});
