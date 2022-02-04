/**
 * The list of offensive card types.
 * Within the original game, the cards have "burst" values from 1-5.
 */
export const OFFENSIVE_CARDS = [
  'energy-1',
  'energy-2',
  'energy-3',
  'energy-4',
  'energy-5',
] as const;

/**
 * The type of an offensive card.
 */
export type OffensiveCard = typeof OFFENSIVE_CARDS[number];

/**
 * The list of offensive cards, and their corresponding count within the deck.
 * In total there are 11 offensive cards
 */
export const OFFENSIVE_CARD_COUNTS: Record<OffensiveCard, number> = {
  'energy-1': 3,
  'energy-2': 2,
  'energy-3': 2,
  'energy-4': 2,
  'energy-5': 2,
};

/**
 * List of offensive cards, and their corresponding display title within the deck.
 */
export const OFFENSIVE_CARD_DISPLAY_TITLES: Record<OffensiveCard, string> = {
  'energy-1': '1 Energy',
  'energy-2': '2 Energy',
  'energy-3': '3 Energy',
  'energy-4': '4 Energy',
  'energy-5': '5 Energy',
};

/**
 * Type-guard that returns if the given value is an offensive card.
 */
export const isOffensiveCard = (card: unknown): card is OffensiveCard =>
  OFFENSIVE_CARDS.includes(card as OffensiveCard);
