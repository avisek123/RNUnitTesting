import {add} from '../src/utils/math';

test('addition should return 4', () => {
  const a = 2;
  const b = 2;

  expect(add(a, b)).toBe(4);
});
