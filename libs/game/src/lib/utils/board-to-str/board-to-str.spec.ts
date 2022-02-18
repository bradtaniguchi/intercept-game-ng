import { createGrid } from '../../models/board/board-grid';
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
  // TODO: needs the "addToGrid" function
  test.todo('plane is rendered at X in O grid');
});
