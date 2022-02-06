/**
 * The list of defensive card types. The names and types carry over from the original game.
 */
export const DEFENSIVE_CARDS = ['loop', 'barrel-roll'] as const;

/**
 * The type of a defensive card.
 */
export type DefensiveCard = typeof DEFENSIVE_CARDS[number];

/**
 * The list of defensive cards, and their corresponding count within the deck.
 * There are more barrel-roll cards, making side attacks easier to dodge.
 */
export const DEFENSIVE_CARD_COUNTS: Record<DefensiveCard, number> = {
  loop: 2,
  'barrel-roll': 3,
};

/**
 * The list of defensive cards, and their corresponding display titles within the deck.
 */
export const DEFENSIVE_CARD_DISPLAY_TITLES: Record<DefensiveCard, string> = {
  loop: 'Loop',
  'barrel-roll': 'Barrel Roll',
};

/**
 * Type-guard that returns if the given value is a defensive card.
 */
export const isDefensiveCard = (card: unknown): card is DefensiveCard =>
  typeof card === 'string' && DEFENSIVE_CARDS.includes(card as DefensiveCard);

/**
 * Returns an array of defensive cards multiplied by their card-count.
 * This should be included with the offensive cards to create a "deck"
 * of all the cards the player could possibly be given.
 *
 * Returns in order of definition within `DEFENSIVE_CARDS`
 * @see DEFENSIVE_CARDS
 * @see DEFENSIVE_CARD_COUNTS
 */
export const DEFENSIVE_CARD_DECK = Object.freeze(
  DEFENSIVE_CARDS.reduce((acc, defensiveCard) => {
    const count = DEFENSIVE_CARD_COUNTS[defensiveCard];
    if (!count) return acc;
    for (let i = 0; i < count; i++) acc.push(defensiveCard);

    return acc;
  }, [] as DefensiveCard[])
);
