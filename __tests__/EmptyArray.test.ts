import {IsEmptyArray} from '../src/utils/Functions/IsEmptyArray';

describe('Check Array is empty or not', () => {
  it('Check [] is an empty array ', () => {
    expect(IsEmptyArray([])).toBe(true);
  });
  it("Check if ['5', '6'] is not an empty array", () => {
    expect(IsEmptyArray(['5', '6'])).toBe(false);
  });
});
