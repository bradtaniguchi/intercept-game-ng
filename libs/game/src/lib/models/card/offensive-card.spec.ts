import { isOffensiveCard } from './offensive-card';

describe('isOffensiveCard', () => {
  test('returns true if card is a valid offensive card', () => {
    expect(isOffensiveCard('energy-1')).toEqual(true);
    expect(isOffensiveCard('energy-5')).toEqual(true);
  });
  test('returns false if card is not a valid offensive card', () => {
    expect(isOffensiveCard('ENERGY-1')).toEqual(false);
    expect(isOffensiveCard('loop')).toEqual(false);
  });
});
