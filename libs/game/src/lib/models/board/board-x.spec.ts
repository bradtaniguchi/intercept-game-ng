import { isBoardX } from './board-x';

describe('isBoardX', () => {
  test('returns true if x is 0', () => expect(isBoardX(0)).toEqual(true));
  test('returns true if x is less than the width of the board', () =>
    expect(isBoardX(9)).toEqual(true));
  test('returns false if x is greater than the width of the board (off by one error)', () =>
    expect(isBoardX(10)).toEqual(false));
  test('returns false if x is negative', () =>
    expect(isBoardX(-1)).toEqual(false));
});
