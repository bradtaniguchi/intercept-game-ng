/**
 * The width of the board, which is 10 in the classic game.
 */
export const MAX_BOARD_X = 10;
/**
 * Type that represents a BoardX position.
 */
export type BoardX = number & { readonly brand: unique symbol };

/**
 * Function that can be used to create a BoardX.
 */
export const BoardX = (x: number): BoardX => x as BoardX;

/**
 * Type that represents a BoardX position, will also verify that the
 * x value is within the bounds of the board.
 */
export const isBoardX = (x: unknown): x is BoardX =>
  typeof x === 'number' && x >= 0 && x < MAX_BOARD_X;
