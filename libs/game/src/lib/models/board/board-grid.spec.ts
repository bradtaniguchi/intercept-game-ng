import { createGrid, getFromGrid, updateGrid, isBoardGrid } from './board-grid';
import { BoardX } from './board-x';
import { BoardY } from './board-y';

describe('isBoardGrid', () => {
  test('returns true', () =>
    // this isn't a perfect representation due to to the nested array always
    // being the same reference.
    expect(isBoardGrid(new Array(12).fill(new Array(10)))).toEqual(true));
  test('returns false', () =>
    expect(isBoardGrid(new Array(12).fill(new Array(9)))).toEqual(false));
});

describe('getFromGrid', () => {
  test('returns element in grid', () =>
    expect(
      getFromGrid(
        createGrid((location) => ({
          ...location,
          value: 'test',
        })),
        {
          x: BoardX(5),
          y: BoardY(5),
        }
      )
    ).toEqual({
      x: 5,
      y: 5,
      // provided to verify we are getting the actual value.
      value: 'test',
    }));
});

describe('updateGrid', () => {
  test('returns new grid reference', () => {
    const originalBoardGrid = createGrid();

    const updatedBoardGrid = updateGrid({
      board: originalBoardGrid,
      location: {
        x: BoardX(5),
        y: BoardY(5),
      },
      cell: 'whatever',
    });

    expect(originalBoardGrid === updatedBoardGrid).toEqual(false);
  });
  test('updates grid with new cell', () => {
    const originalBoardGrid = createGrid();

    const updatedBoardGrid = updateGrid({
      board: originalBoardGrid,
      location: {
        x: BoardX(5),
        y: BoardY(5),
      },
      cell: 'whatever',
    });

    expect(updatedBoardGrid[5][5]).toEqual('whatever');
  });
  test('keeps unaffected row reference', () => {
    const originalBoardGrid = createGrid();

    const originalBoardRow2 = originalBoardGrid[2];

    const updatedBoardGrid = updateGrid({
      board: originalBoardGrid,
      location: {
        x: BoardX(5),
        y: BoardY(5),
      },
      cell: 'whatever',
    });

    const updatedBoardRow2 = updatedBoardGrid[2];

    expect(originalBoardRow2 === updatedBoardRow2).toEqual(true);
  });
});
