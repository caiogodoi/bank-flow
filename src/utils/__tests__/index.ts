import { valueColor } from '../value-color';

describe('value color', () => {
  test('when number is greater than 0', () => {
    expect(valueColor(5)).toBe('lightgreen');
  });

  test('when number is smaller than 0', () => {
    expect(valueColor(-5)).toBe('red');
  });
});