import { BoardGrid, getFromGrid } from './board-grid';
import { BoardLocation } from './board-location';
import { BoardX, isBoardX } from './board-x';
import { BoardY, isBoardY } from './board-y';
import { Direction } from './direction';

/**
 * Near locations is the return value from `getNearLocations` functions,
 * and provides a hash-map where the key is the 4 directions,
 * and the value the BoardCell value(s), or undefined if there isn't one.
 *
 * @see getNearLocations
 * @see Direction
 */
export type NearLocations<BoardCell = unknown> = Record<
  Direction,
  BoardCell | undefined
>;

/**
 * Returns the 4 locations adjacent to the given board-location.
 * This can be used to perform relative lookups for possibly path-finding, or
 * intercept/dogfights.
 */
export const getNearLocations = <BoardCell = unknown>(
  board: BoardGrid<BoardCell>,
  { x, y }: BoardLocation
): NearLocations<BoardCell> => ({
  north: isBoardY(y - 1)
    ? getFromGrid(board, { x, y: BoardY(y - 1) })
    : undefined,
  south: isBoardY(y + 1)
    ? getFromGrid(board, { x, y: BoardY(y + 1) })
    : undefined,
  east: isBoardX(x + 1)
    ? getFromGrid(board, { x: BoardX(x + 1), y })
    : undefined,
  west: isBoardX(x - 1)
    ? getFromGrid(board, { x: BoardX(x - 1), y })
    : undefined,
});

/**
 * Returns the board-locations near the given board-location that
 * are valid.
 */
export const getNearLocationCoords = ({
  x,
  y,
}: BoardLocation): Record<Direction, BoardLocation | undefined> => ({
  north: isBoardY(y - 1) ? { x, y: BoardY(y - 1) } : undefined,
  south: isBoardY(y + 1) ? { x, y: BoardY(y + 1) } : undefined,
  east: isBoardX(x + 1) ? { x: BoardX(x + 1), y } : undefined,
  west: isBoardX(x - 1) ? { x: BoardX(x - 1), y } : undefined,
});
