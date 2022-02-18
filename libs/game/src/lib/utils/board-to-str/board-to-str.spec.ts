import { BoardX, BoardY } from '../../models/board';
import { createGrid, updateGrid } from '../../models/board/board-grid';
import { boardToStr, cellToOChar } from './board-to-str';

describe('boardToStr', () => {
  test('returns O/empty board of the correct size', () =>
    expect(
      boardToStr({
        board: createGrid(),
        cellToStr: cellToOChar,
      })
    ).toEqual(`OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO`));
  test('returns O/empty board of the correct size, with new line', () =>
    expect(
      boardToStr({
        board: createGrid(),
        cellToStr: cellToOChar,
        startWithNewLine: true,
      })
    ).toEqual(`
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO`));
  test('cell is rendered at X in O grid', () =>
    expect(
      boardToStr({
        board: updateGrid({
          board: createGrid(),
          location: {
            x: BoardX(5),
            y: BoardY(5),
          },
          cell: 'X',
        }),
        // keep value, or return O if nothing is given
        cellToStr: (cell) => cell || 'O',
        startWithNewLine: true,
      })
    ).toEqual(`
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOXOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO`));
});
