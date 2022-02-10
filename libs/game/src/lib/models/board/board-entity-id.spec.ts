import { createBoardEntityId, isBoardEntityId } from './board-entity-id';

describe('isBoardEntityId', () => {
  test('returns true if string of length 8', () =>
    expect(isBoardEntityId('12345678')).toEqual(true));
  test('returns false if not a string', () =>
    expect(isBoardEntityId(12345678)).toEqual(false));
  test('returns false if string of length other than 8', () => {
    expect(isBoardEntityId('1234567')).toEqual(false);
    expect(isBoardEntityId('123456789')).toEqual(false);
  });
});

describe('createBoardEntityId', () => {
  test('returns valid id', () =>
    expect(isBoardEntityId(createBoardEntityId())).toEqual(true));
});
