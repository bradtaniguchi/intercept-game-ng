import { isBoardEntity } from './board-entity';

describe('isBoardEntity', () => {
  test('returns true', () =>
    expect(
      isBoardEntity({
        id: '12345678',
        x: 1,
        y: 1,
      })
    ).toEqual(true));
});
