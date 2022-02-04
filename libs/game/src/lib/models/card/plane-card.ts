import {
  DEFENSIVE_CARDS,
  DEFENSIVE_CARD_COUNTS,
  DEFENSIVE_CARD_DISPLAY_TITLES,
} from './defensive-card';
import {
  OFFENSIVE_CARDS,
  OFFENSIVE_CARD_COUNTS,
  OFFENSIVE_CARD_DISPLAY_TITLES,
} from './offensive-card';

/**
 * All the types of cards available in the game. Includes offensive and defensive cards.
 */
export const PLANE_CARDS = [...OFFENSIVE_CARDS, ...DEFENSIVE_CARDS];

/**
 * The type of all plane cards.
 */
export type PlaneCards = typeof PLANE_CARDS[number];

/**
 * The list of offensive and defensive plane card counts.
 */
export const PLANE_CARD_COUNTS = {
  ...OFFENSIVE_CARD_COUNTS,
  ...DEFENSIVE_CARD_COUNTS,
};

/**
 * The list of all plane-cards, and their corresponding display titles within the deck
 */
export const PLANE_CARD_DISPLAY_TITLES: Record<PlaneCards, string> = {
  ...OFFENSIVE_CARD_DISPLAY_TITLES,
  ...DEFENSIVE_CARD_DISPLAY_TITLES,
};

/**
 * Type-guard that returns if the given value is a plane card.
 */
export const isPlaneCard = (card: unknown): card is PlaneCards =>
  PLANE_CARDS.includes(card as PlaneCards);

// TODO: Add map for svg icons.
