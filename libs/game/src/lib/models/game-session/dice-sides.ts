/**
 * The sides of a dice.
 */
export type DiceSides = 1 | 2 | 3 | 4 | 5 | 6;

/**
 * Function that can be used to check if a given value is a DiceSide
 */
export const isDiceSide = (num: unknown): num is DiceSides =>
  typeof num === 'number' && num >= 1 && num <= 6;
