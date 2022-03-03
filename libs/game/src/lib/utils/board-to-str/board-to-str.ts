import { BoardGrid } from '../../models/board/board-grid';

/**
 * Returns the board as a text representation of single characters.
 *
 * Useful to help visually debug board states.
 */
export const boardToStr = <BoardCell = unknown>({
  board,
  cellToStr,
  startWithNewLine,
}: {
  /**
   * The board we are to print
   */
  board: BoardGrid<BoardCell>;
  /**
   * Function that can be provided to convert a given board cell to
   * a single character string.
   *
   * If the return value isn't a single character string, this
   * function will throw an error.
   */
  cellToStr: (cell: BoardCell) => string;
  /**
   * Flag that can be passed to automatically add a newline at the start
   * of the string. This can help align the board string during testing.
   */
  startWithNewLine?: boolean;
}): string =>
  (startWithNewLine ? '\n' : '') +
  board
    .map((boardRow) =>
      boardRow.map((boardCell) => cellToStr(boardCell)).join('')
    )
    .join('\n');

/**
 * Essentially a placeholder function that can be passed to the `cellToStr`
 * function and will return the character of `O`. Useful for testing.
 */
export const cellToOChar = (): string => 'O';
