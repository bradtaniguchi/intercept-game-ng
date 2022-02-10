import { isOffensiveCard, OFFENSIVE_CARD_DECK } from './offensive-card';

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

describe('OFFENSIVE_CARD_DECK', () => {
  test('returns card amounts', () => {
    expect(OFFENSIVE_CARD_DECK).toEqual([
      'energy-1',
      'energy-1',
      'energy-1',
      'energy-2',
      'energy-2',
      'energy-3',
      'energy-3',
      'energy-4',
      'energy-4',
      'energy-5',
      'energy-5',
    ]);
  });
  test('are frozen', () => {
    expect(() => (OFFENSIVE_CARD_DECK as unknown[]).pop()).toThrow();
  });
});
