import { createGrid, getFromGrid, isBoardGrid } from './board-grid';
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
