import {
  BoardLocation,
  isBoardLocation,
  isBoardLocationEq,
} from './board-location';
import { BoardX } from './board-x';
import { BoardY } from './board-y';

describe('isBoardLocation', () => {
  test('returns true', () =>
    expect(
      isBoardLocation({
        x: 1,
        y: 1,
      })
    ).toEqual(true));
  test('returns false', () => {
    expect(
      isBoardLocation({
        x: '1',
      })
    ).toEqual(false);

    expect(
      isBoardLocation({
        x: '1',
        y: 1,
      })
    ).toEqual(false);
  });
});

describe('isBoardLocationEq', () => {
  test('returns true', () =>
    expect(
      isBoardLocationEq(
        {
          x: BoardX(10),
          y: BoardY(10),
        },
        {
          x: BoardX(10),
          y: BoardY(10),
          extra: true,
        } as BoardLocation
      )
    ).toEqual(true));
  test('returns false', () =>
    expect(
      isBoardLocationEq(
        {
          x: BoardX(10),
          y: BoardY(10),
        },
        {
          x: BoardX(10),
          y: BoardY(9),
          extra: true,
        } as BoardLocation
      )
    ).toEqual(false));
});

// TODO: add tests for board-location-str
