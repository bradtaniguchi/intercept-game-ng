import { isDefensiveCard } from './defensive-card';

describe('isDefensiveCard', () => {
  test('returns true if card is a valid defensive card', () => {
    expect(isDefensiveCard('loop')).toEqual(true);
    expect(isDefensiveCard('barrel-roll')).toEqual(true);
  });
  test('returns false if card is not a valid defensive card', () => {
    expect(isDefensiveCard('LOOP')).toEqual(false);
    expect(isDefensiveCard('energy-1')).toEqual(false);
    expect(isDefensiveCard('shield')).toEqual(false);
  });
});
