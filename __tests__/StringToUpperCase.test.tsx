import {stringUpperCase} from '../src/utils/Functions/StringToUpperCase';

describe('Check the string is retirn upper case or not', () => {
  it('hello should return HELLO', () => {
    expect(stringUpperCase('hello')).toBe('HELLO');
  });
});
