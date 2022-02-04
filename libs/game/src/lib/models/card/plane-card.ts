import { getRefitCardCount, Plane } from '../plane/plane';
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
export const PLANE_CARDS = [...OFFENSIVE_CARDS, ...DEFENSIVE_CARDS] as const;

/**
 * The type of all plane cards.
 */
export type PlaneCard = typeof PLANE_CARDS[number];

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
export const PLANE_CARD_DISPLAY_TITLES: Record<PlaneCard, string> = {
  ...OFFENSIVE_CARD_DISPLAY_TITLES,
  ...DEFENSIVE_CARD_DISPLAY_TITLES,
};

/**
 * Type-guard that returns if the given value is a plane card.
 */
export const isPlaneCard = (card: unknown): card is PlaneCard =>
  typeof card === 'string' && PLANE_CARDS.includes(card as PlaneCard);

/**
 * Returns an array of random plane-cards based upon the plane's refit card count.
 * This is based upon if the plane is an ace or double ace, or not an ace.
 *
 * TODO: Add sorting
 */
export const getRandomCards = (plane: Plane) => {
  const cards: PlaneCard[] = [];

  for (let i = 0; i < getRefitCardCount(plane); i++)
    cards.push(PLANE_CARDS[Math.floor(Math.random() * PLANE_CARDS.length)]);

  return cards;
};

// TODO: Add map for svg icons.
