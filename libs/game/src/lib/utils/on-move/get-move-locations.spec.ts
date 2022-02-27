import {
  BoardLocation,
  BoardX,
  BoardY,
  getBoardLocationString,
} from '../../models/board';
import { createTestPlane } from '../../models/plane/plane';
import { getMoveLocations } from './get-move-locations';

describe('getMoveLocations', () => {
  describe('roll of 1', () => {
    test('returns 4 moves', () => {
      const boardLocations: BoardLocation[] = [
        {
          // North
          x: BoardX(5),
          y: BoardY(4),
        },
        {
          // South
          x: BoardX(5),
          y: BoardY(6),
        },
        {
          // East
          x: BoardX(6),
          y: BoardY(5),
        },
        {
          // West
          x: BoardX(4),
          y: BoardY(5),
        },
      ];
      expect(
        getMoveLocations({
          plane: { ...createTestPlane(), x: BoardX(5), y: BoardY(5) },
          dice: 1,
          inFlightPlanes: [],
        })
      ).toEqual({
        boardLocations,
        boardLocationStrs: boardLocations.map(getBoardLocationString),
      });
    });
    test.todo('returns 3 moves, when plane is adjacent');
  });

  describe('roll of 2', () => {
    test.todo('returns 9 moves (can go back to start square)');
    test.todo('returns 8 moves, when plane is adjacent');
  });

  describe('roll of 3', () => {
    test.todo('returns 16 moves');
    test.todo('returns ?? moves, when plane is adjacent');
  });

  describe('roll of 4', () => {
    test.todo('returns 25 moves (can go back to the start square)');
    test.todo('returns ?? moves, when plane is adjacent');
  });

  describe('roll of 5', () => {
    test.todo('returns 36 moves');
    test.todo('returns ?? moves, when plane is adjacent');
  });

  describe('roll of 6', () => {
    test.todo('returns 49 moves (can go back to the start square)');
    test.todo('returns ?? moves, when plane is adjacent');
  });
});
