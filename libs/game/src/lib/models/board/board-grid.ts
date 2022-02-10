import { MAX_BOARD_Y } from './board-y';
import { BoardRow } from './board-row';
import { BoardLocation } from '.';

/**
 * The board grid is a 2D representation of the board,
 * where the "start" is the "north-west" corner.
 * This has its own type named "board-row", that contains
 * cells, which are the generic value type.
 *
 * @see BoardRow
 * @see BoardY
 */
export type BoardGrid<BoardCell = unknown> = BoardRow<BoardCell>[];

/**
 * Type-guard to know if the given value is a board-grid.
 * Will nest call `isBoardRow`.
 */
export const isBoardGrid = (grid: unknown): grid is BoardGrid =>
  !!grid && Array.isArray(grid) && grid.length === MAX_BOARD_Y;

/**
 * Returns the element at the given board-grid. The only difference between this
 * and direct array checks, is this will force type-checks for the x,y location values.
 */
export const getFromGrid = <BoardCell = unknown>(
  board: BoardGrid<BoardCell>,
  { x, y }: BoardLocation
): BoardCell => board[y][x];
