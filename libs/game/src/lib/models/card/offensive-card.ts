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
  typeof card === 'string' && OFFENSIVE_CARDS.includes(card as OffensiveCard);

/**
 * Returns an array of offensive cards multiplied by their card-count.
 * This should be included with the defensive cards to create a "deck"
 * of all the cards the player could possibly be given.
 *
 * Returns in order of definition within `OFFENSIVE_CARDS`
 * @see OFFENSIVE_CARDS
 * @see OFFENSIVE_CARD_COUNTS
 */
export const OFFENSIVE_CARD_DECK = Object.freeze(
  OFFENSIVE_CARDS.reduce((acc, offensiveCard) => {
    const count = OFFENSIVE_CARD_COUNTS[offensiveCard];
    if (!count) return acc;
    for (let i = 0; i < count; i++) acc.push(offensiveCard);

    return acc;
  }, [] as OffensiveCard[])
);
