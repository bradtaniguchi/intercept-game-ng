import { MAX_BOARD_X } from './board-x';

/**
 * A single board-row, supports a generic for the cell value.
 * @see BoardX
 */
export type BoardRow<BoardCell = unknown> = BoardCell[];

/**
 * Type-guard to know if the given value is a board-row, with
 * unknown contents. Can validate if each cell is a given type.
 */
export const isBoardRow = (row: unknown): row is BoardRow =>
  !!row && Array.isArray(row) && row.length === MAX_BOARD_X;
