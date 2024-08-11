import {mul} from '../src/utils/Functions/mul';

describe('Multipication function', () => {
  it('Should correctly multiply 2 numbers', () => {
    expect(mul(2, 2)).toBe(4);
  });
});
