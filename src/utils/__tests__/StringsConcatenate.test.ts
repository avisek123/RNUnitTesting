import {concatenateStrings} from '../Functions/StringsConcatenate';

describe('Strings Concatenate', () => {
  it('add two strings', () => {
    expect(concatenateStrings('he', 'llo')).toBe('hello');
  });
});
