import {checkPositiveNumber} from '../Functions/PositiveNumber';

describe('Check number is postive or not', () => {
  it('check 5 is positive number or not', () => {
    expect(checkPositiveNumber(5)).toBe(true);
  });
});
