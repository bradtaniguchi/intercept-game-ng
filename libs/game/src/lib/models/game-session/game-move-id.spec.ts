import { createGameMoveId, isGameMoveId } from './game-move-id';

describe('isGameMoveId', () => {
  test('returns true for valid game-move-id', () => {
    expect(isGameMoveId('12345678')).toEqual(true);
  });
  test('returns false for invalid game-move-id', () => {
    expect(isGameMoveId(12345678)).toEqual(false);
    expect(isGameMoveId('some-string')).toEqual(false);
  });
});

describe('createGameMoveId', () => {
  test('returns valid id', () =>
    expect(isGameMoveId(createGameMoveId())).toEqual(true));
});
