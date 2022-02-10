import { isFaction } from './faction';

describe('isFaction', () => {
  test('returns true for valid faction', () => {
    expect(isFaction('north')).toEqual(true);
    expect(isFaction('south')).toEqual(true);
  });
  test('returns false for invalid faction', () => {
    expect(isFaction('east')).toEqual(false);
    expect(isFaction('left')).toEqual(false);
    expect(isFaction('right')).toEqual(false);
    expect(isFaction('NORTH')).toEqual(false);
    // Supreme commander faction
    expect(isFaction('aeon')).toEqual(false);
  });
});
