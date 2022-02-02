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
