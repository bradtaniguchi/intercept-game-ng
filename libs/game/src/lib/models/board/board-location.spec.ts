import { isBoardLocationStr } from '.';
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

describe('isBoardLocationStr', () => {
  test('returns true for 0-0', () =>
    expect(isBoardLocationStr('0-0')).toEqual(true));
  test('returns true for 5-5', () =>
    expect(isBoardLocationStr('5-5')).toEqual(true));
  test('returns true for 9-11 (bottom-left-most)', () =>
    expect(isBoardLocationStr('9-11')).toEqual(true));
  test('returns false if 10-12 (off by one error)', () =>
    expect(isBoardLocationStr('10-12')).toEqual(false));
  test('returns false if given invalid format 01-01', () =>
    expect(isBoardLocationStr('01-01')).toEqual(false));
  test('returns false if given partial -1', () =>
    expect(isBoardLocationStr('-1')).toEqual(false));
});
