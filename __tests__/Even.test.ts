import {even} from '../src/utils/Functions/even';

describe('Testing for Even number', () => {
  it('check 2 is even', () => {
    expect(even(2)).toBe(true);
  });
});
