import { isBoardRow } from './board-row';

describe('isBoardRow', () => {
  test('returns true', () =>
    expect(isBoardRow(new Array(10).fill(undefined))).toBe(true));
  test('returns false', () =>
    expect(isBoardRow(new Array(12).fill(undefined))).toBe(false));
});
