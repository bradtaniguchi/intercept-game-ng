import { BoardX, isBoardX } from './board-x';
import { BoardY, isBoardY } from './board-y';

/**
 * A board location is a generic type that specifies a single location on the board,
 * including the "height" coordinates
 */
export interface BoardLocation {
  /**
   * The X location on the board. Where 0 is the "upper-left" corner.
   */
  x: BoardX;

  /**
   * The Y location on the board. Where 0 is the "upper-left" corner.
   */
  y: BoardY;
}

/**
 * Type-guard for the `BoardLocation` type.
 */
export const isBoardLocation = (location: unknown): location is BoardLocation =>
  isBoardX((location as BoardLocation).x) &&
  isBoardY((location as BoardLocation).y);

/**
 * Returns if the 2 board locations are equal.
 */
export const isBoardLocationEq = (
  { x: aX, y: aY }: BoardLocation,
  { x: bX, y: bY }: BoardLocation
) => aX === bX && aY === bY;

/**
 * A board location string is a combined calculated string of a board-location,
 * in the format: `x-y`. This should be used internally to quickly perform
 * lookups in a 1D array.
 */
export type BoardLocationStr = string & { readonly brand: unique symbol };

/**
 * Casts the given string to a board location string
 */
export const BoardLocationStr = (str: string): BoardLocationStr =>
  str as BoardLocationStr;

/**
 * Returns if the given string is a board-location str
 */
export const isBoardLocationStr = (str: unknown): str is BoardLocationStr => {
  if (typeof str !== 'string') return false;
  const matches = str.match(/^(\d+)-(\d+)$/);
  if (!matches || matches.length !== 3) return false;
  const [, x, y] = matches;
  if (isNaN(+x) || isNaN(+y)) return false;
  const isPrefixedWithZeroes = (numStr: string): boolean =>
    numStr !== '0' && numStr.replace(/\b0+/g, '') !== numStr;
  if (isPrefixedWithZeroes(x) || isPrefixedWithZeroes(y)) return false;

  return isBoardX(+x) && isBoardY(+y);
};

/**
 * Returns a board location string from a given board-location object.
 *
 * Useful to perform 1D lookups
 */
export const getBoardLocationString = ({
  x,
  y,
}: BoardLocation): BoardLocationStr => BoardLocationStr(`${x}-${y}`);

/**
 * Returns a board location from the board location string.
 *
 * Will throw an error if the given str is not actually a BoardLocationStr
 */
export const getBoardLocationFromString = (
  str: BoardLocationStr
): BoardLocation => {
  if (!isBoardLocationStr(str))
    throw new Error('Invalid BoardLocationStr given');
  const matches = str.match(/^(\d+)-(\d+)$/);
  if (!matches || matches.length !== 3)
    throw new Error('Invalid BoardLocationStr given');
  const [, x, y] = matches;
  return {
    x: BoardX(+x),
    y: BoardY(+y),
  };
};
