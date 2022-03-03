import {
  BoardGrid,
  BoardLocation,
  BoardLocationStr,
  BoardX,
  BoardY,
  createGrid,
  getBoardLocationString,
  isBoardLocationEq,
  updateGrid,
} from '../../models/board';
import { DiceSides } from '../../models/game-session/dice-sides';
import { Plane } from '../../models/plane/plane';
import { boardToStr } from '../board-to-str/board-to-str';
import { getMoveLocations } from './get-move-locations';

describe('getMoveLocations', () => {
  /**
   * Runs a "visual-check" to verify the given locations
   * create the corresponding expected board-locations.
   *
   * Should be used for the more complex checks
   */
  const visualCheck = ({
    expected,
    dice,
    inFlightPlanes,
    startLocation,
  }: {
    /**
     * The location the plane starts at,
     * represented by an `S`
     */
    startLocation: BoardLocation;
    /**
     * The dice sides
     */
    dice: DiceSides;
    /**
     * Possibly inflight planes, defaults to empty array
     */
    inFlightPlanes?: Array<Pick<Plane, 'x' | 'y'>>;
    /**
     * The board string we are to expect from the location.
     * All locations start as `O`
     */
    expected: string;
  }) =>
    expect(
      boardToStr({
        board: getMoveLocations({
          plane: startLocation,
          dice,
          inFlightPlanes: inFlightPlanes || [],
        }).boardLocations.reduce(
          (board, boardLocation) =>
            updateGrid({
              board,
              location: boardLocation,
              cell: isBoardLocationEq(boardLocation, startLocation) ? 'S' : 'X',
            }),
          updateGrid({
            board: createGrid(() => 'O'),
            location: startLocation,
            cell: 'S',
          })
        ),
        startWithNewLine: true,
        cellToStr: (cell) => cell,
      })
    ).toEqual(expected);

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
          plane: { x: BoardX(5), y: BoardY(5) },
          dice: 1,
          inFlightPlanes: [],
        })
      ).toEqual({
        boardLocations,
        boardLocationStrs: boardLocations.map(getBoardLocationString),
      });
    });
    test('returns 3 moves, when plane is adjacent', () => {
      const boardLocations: BoardLocation[] = [
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
          plane: { x: BoardX(5), y: BoardY(5) },
          dice: 1,
          inFlightPlanes: [
            // This plane is "north" of the starting plane,
            // thus preventing our plane from trying to move there
            { x: BoardX(5), y: BoardY(4) },
          ],
        })
      ).toEqual({
        boardLocations,
        boardLocationStrs: boardLocations.map(getBoardLocationString),
      });
    });
    test('returns 3 moves when at the edge of the map', () => {
      const boardLocations: BoardLocation[] = [
        {
          x: BoardX(3),
          y: BoardY(1),
        },
        {
          x: BoardX(4),
          y: BoardY(0),
        },
        {
          x: BoardX(2),
          y: BoardY(0),
        },
      ];
      expect(
        getMoveLocations({
          // Plane cannot move north as its already north enough.
          plane: { x: BoardX(3), y: BoardY(0) },
          dice: 1,
          inFlightPlanes: [
            // This plane is elsewhere and not important.
            { x: BoardX(5), y: BoardY(5) },
          ],
        })
      ).toEqual({
        boardLocations,
        boardLocationStrs: boardLocations.map(getBoardLocationString),
      });
    });
  });

  describe('roll of 2', () => {
    test('returns 9 moves (can go back to start square)', () => {
      const boardLocations: BoardLocation[] = [
        {
          x: 5,
          y: 3,
        },
        {
          x: 5,
          y: 5,
        },
        {
          x: 6,
          y: 4,
        },
        {
          x: 4,
          y: 4,
        },
        {
          x: 5,
          y: 7,
        },
        {
          x: 6,
          y: 6,
        },
        {
          x: 4,
          y: 6,
        },
        {
          x: 7,
          y: 5,
        },
        {
          x: 3,
          y: 5,
        },
      ] as BoardLocation[];
      const boardLocationStrs = boardLocations.map(getBoardLocationString);
      const startLocation = { x: BoardX(5), y: BoardY(5) };
      expect(
        getMoveLocations({
          // Plane cannot move north as its already north enough.
          plane: startLocation,
          dice: 2,
          inFlightPlanes: [],
        })
      ).toEqual({
        boardLocations,
        boardLocationStrs,
      });

      visualCheck({
        dice: 2,
        startLocation,
        expected: `
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOXOOOO
OOOOXOXOOO
OOOXOSOXOO
OOOOXOXOOO
OOOOOXOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO`,
      });

      // Has 9 possible moves
      expect(boardLocationStrs.length).toBe(9);

      // No duplicates
      const noDupesSet = Array.from(new Set(boardLocationStrs).values());
      expect(noDupesSet.length).toEqual(boardLocationStrs.length);
    });
    test('returns 8 moves, when plane is adjacent', () => {
      const boardLocations: BoardLocation[] = [
        {
          x: 5,
          y: 3,
        },
        {
          x: 5,
          y: 5,
        },
        {
          x: 6,
          y: 4,
        },
        {
          x: 4,
          y: 4,
        },
        {
          x: 6,
          y: 6,
        },
        {
          x: 7,
          y: 5,
        },
        {
          x: 4,
          y: 6,
        },
        {
          x: 3,
          y: 5,
        },
      ] as BoardLocation[];
      const boardLocationStrs = boardLocations.map(getBoardLocationString);
      const startLocation = { x: BoardX(5), y: BoardY(5) };
      // const
      expect(
        getMoveLocations({
          // Plane cannot move north as its already north enough.
          plane: startLocation,
          dice: 2,
          inFlightPlanes: [
            // Below the plane
            { x: BoardX(5), y: BoardY(6) },
          ],
        })
      ).toEqual({
        boardLocations,
        boardLocationStrs,
      });

      visualCheck({
        dice: 2,
        startLocation,
        inFlightPlanes: [
          // Below the plane
          { x: BoardX(5), y: BoardY(6) },
        ],
        expected: `
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOXOOOO
OOOOXOXOOO
OOOXOSOXOO
OOOOXOXOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO`,
      });
      // Has 8 possible moves
      expect(boardLocationStrs.length).toBe(8);

      // No duplicates
      const noDupesSet = Array.from(new Set(boardLocationStrs).values());
      expect(noDupesSet.length).toEqual(boardLocationStrs.length);

      // Includes starting position
      expect(boardLocationStrs.includes(BoardLocationStr('5-5'))).toEqual(true);
    });

    test('returns moves no including the side', () =>
      visualCheck({
        dice: 2,
        // Starts at the middle bottom
        startLocation: { x: BoardX(5), y: BoardY(11) },
        expected: `
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOXOOOO
OOOOXOXOOO
OOOXOSOXOO`,
      }));
  });

  describe('roll of 3', () => {
    test('returns 16 moves', () =>
      visualCheck({
        dice: 3,
        startLocation: { x: BoardX(5), y: BoardY(5) },
        expected: `
OOOOOOOOOO
OOOOOOOOOO
OOOOOXOOOO
OOOOXOXOOO
OOOXOXOXOO
OOXOXSXOXO
OOOXOXOXOO
OOOOXOXOOO
OOOOOXOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO`,
      }));
    test('returns moves, when plane is adjacent', () =>
      visualCheck({
        dice: 3,
        // Start closer to the corner
        startLocation: { x: BoardX(2), y: BoardY(2) },
        inFlightPlanes: [
          {
            // Directly west
            x: BoardX(1),
            y: BoardY(2),
          },
          {
            // South to the east
            x: BoardX(3),
            y: BoardY(3),
          },
          {
            // South 2
            x: BoardX(2),
            y: BoardY(4),
          },
        ],
        expected: `
OXOXOOOOOO
XOXOXOOOOO
OOSXOXOOOO
XOXOXOOOOO
OXOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO
OOOOOOOOOO`,
      }));
  });

  describe('roll of 6', () => {
    test('returns 49 moves (can go back to the start square)', () =>
      visualCheck({
        dice: 6,
        // Start closer to the corner
        startLocation: { x: BoardX(3), y: BoardY(4) },
        inFlightPlanes: [
          {
            // West and North
            x: BoardX(1),
            y: BoardY(2),
          },
          {
            // Directly North
            x: BoardX(3),
            y: BoardY(3),
          },
          {
            // Far
            x: BoardX(8),
            y: BoardY(8),
          },
        ],
        expected: `
OXOXOXOOOO
XOXOXOXOOO
OOOXOXOXOO
XOXOXOXOXO
OXOSOXOXOX
XOXOXOXOXO
OXOXOXOXOO
XOXOXOXOOO
OXOXOXOOOO
OOXOXOOOOO
OOOXOOOOOO
OOOOOOOOOO`,
      }));
  });
});
