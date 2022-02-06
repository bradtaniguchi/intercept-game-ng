import { isDiceSide } from './dice-sides';

describe('isDiceSide', () => {
  test('returns true if valid dice-side', () => {
    expect(isDiceSide(1)).toEqual(true);
    expect(isDiceSide(6)).toEqual(true);
  });
  test('returns false if invalid dice-side', () => {
    expect(isDiceSide(0)).toEqual(false);
    expect(isDiceSide('5')).toEqual(false);
    expect(isDiceSide(7)).toEqual(false);
  });
});
