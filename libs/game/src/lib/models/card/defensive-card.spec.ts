import { DEFENSIVE_CARD_DECK, isDefensiveCard } from './defensive-card';

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

describe('DEFENSIVE_CARD_DECK', () => {
  test('returns card amounts', () => {
    expect(DEFENSIVE_CARD_DECK).toEqual([
      'loop',
      'loop',
      'barrel-roll',
      'barrel-roll',
      'barrel-roll',
    ]);
  });
  test('are frozen', () => {
    expect(() => (DEFENSIVE_CARD_DECK as unknown[]).pop()).toThrow();
  });
});
