import { MAX_BOARD_Y } from './board-y';
import { BoardRow, isBoardRow } from './board-row';
import { BoardLocation } from './board-location';
import { BoardX, BoardY, MAX_BOARD_X } from '.';

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
  !!grid &&
  Array.isArray(grid) &&
  grid.length === MAX_BOARD_Y &&
  grid.every(isBoardRow);

/**
 * Returns the element at the given board-grid. The only difference between this
 * and direct array checks, is this will force type-checks for the x,y location values.
 */
export const getFromGrid = <BoardCell = unknown>(
  board: BoardGrid<BoardCell>,
  { x, y }: BoardLocation
): BoardCell => board[y][x];

type CreateGrid = {
  (): BoardGrid<undefined>;
  <BoardCell>(
    cellFactory: (location: BoardLocation) => BoardCell
  ): BoardGrid<BoardCell>;
};

/**
 * Updates the grid with the given board-location and cell. Will
 * return the updated grid, with the new cell.
 */
export const updateGrid = <BoardCell = unknown>({
  board,
  location: { x, y },
  cell,
}: {
  board: BoardGrid<BoardCell>;
  location: BoardLocation;
  cell: BoardCell;
}): BoardGrid<BoardCell> =>
  board.map((boardRow, rowIndex) =>
    rowIndex === y
      ? boardRow.map((boardCell, cellIndex) =>
          cellIndex === x ? cell : boardCell
        )
      : boardRow
  );

/**
 * Factory function that creates a basic grid.
 * Will be populated by `undefined` if no `cellFactory` is given.
 */
export const createGrid: CreateGrid = <BoardCell = undefined>(
  cellFactory?: (location: BoardLocation) => BoardCell
) =>
  new Array(MAX_BOARD_Y)
    .fill(null)
    .map((_, y) =>
      new Array(MAX_BOARD_X)
        .fill(null)
        .map((__, x) => cellFactory?.({ x: BoardX(x), y: BoardY(y) }))
    );
