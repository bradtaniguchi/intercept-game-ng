import { isBoardLocation } from './board-location';

describe('isBoardLocation', () => {
  test('returns true', () =>
    expect(
      isBoardLocation({
        x: 1,
        y: 1,
      })
    ).toEqual(true));
});
