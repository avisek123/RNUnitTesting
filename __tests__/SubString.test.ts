import {containSubStrings} from '../src/utils/Functions/Substring';

describe('Check if the main string contains the specified substring.', () => {
  it('check hello world contain world or not', () => {
    expect(containSubStrings('hello world', 'world')).toBe(true);
  });
});
