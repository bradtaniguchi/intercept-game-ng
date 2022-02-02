/**
 * The height of the board, which is 12 in the classic game.
 */
export const MAX_BOARD_Y = 12;

/**
 * Type that represents a BoardY position.
 */
export type BoardY = number & { readonly brand: unique symbol };

/**
 * Function that can be used to create a BoardY.
 */
export const BoardY = (y: number): BoardY => y as BoardY;

export const isBoardY = (y: unknown): y is BoardY =>
  typeof y === 'number' && y >= 0 && y < MAX_BOARD_Y;
