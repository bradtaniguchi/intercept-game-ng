import { isDirection } from './direction';

describe('isDirection', () => {
  test('returns true if direction is valid', () => {
    expect(isDirection('north')).toEqual(true);
    expect(isDirection('south')).toEqual(true);
    expect(isDirection('east')).toEqual(true);
    expect(isDirection('west')).toEqual(true);
  });
  test('returns false if direction is not valid', () => {
    expect(isDirection('NORTH')).toEqual(false);
    expect(isDirection('up')).toEqual(false);
    expect(isDirection('down')).toEqual(false);
    expect(isDirection('left')).toEqual(false);
    expect(isDirection('right')).toEqual(false);
  });
});
