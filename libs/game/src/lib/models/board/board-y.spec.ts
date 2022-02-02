import { isBoardY } from './board-y';

describe('isBoardY', () => {
  test('returns true if y is 0', () => expect(isBoardY(0)).toEqual(true));
  test('returns true if y is less than the height of the board', () =>
    expect(isBoardY(11)).toEqual(true));
  test('returns false if y is greater than the height of the board', () =>
    expect(isBoardY(12)).toEqual(false));
  test('returns false if y is negative', () =>
    expect(isBoardY(-1)).toEqual(false));
});
