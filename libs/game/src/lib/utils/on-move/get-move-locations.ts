import {
  BoardLocation,
  BoardLocationStr,
  getBoardLocationString,
  isBoardLocationEq,
} from '../../models/board/board-location';
import { getNearLocationCoords } from '../../models/board/near-location';
import { DiceSides } from '../../models/game-session/dice-sides';
import { Plane } from '../../models/plane/plane';

/**
 * Returns the available board-locations that the plane can move to.
 *
 * 1. A plane must move the entire dice roll.
 * 2. A plane cannot move over the same location 2 times, except stopping
 * at the starting location.
 * 3. A plane cannot move through another plane.
 */
export const getMoveLocations = (params: {
  /**
   * The plane we are returning moves for.
   */
  plane: Plane;
  /**
   * The roll we are calculating moves for.
   */
  dice: DiceSides;
  /**
   * The list of planes currently in flight
   */
  inFlightPlanes: Plane[];
}): {
  /**
   * The locations the plane can move.
   */
  boardLocations: BoardLocation[];
  /**
   * The location strings that the plane can move, this is provided more
   * as a helper for situations where you need to perform lookups against
   * what was returned, as the board-lookup-str
   */
  boardLocationStrs: BoardLocationStr[];
} => {
  /**
   *  Internal function used to recursively call with only
   * the boardLocations return, rather than both boardLocationsStr
   * and boardLocations.
   */
  const getMoveLocations = ({
    plane,
    dice,
    inFlightPlanes,
  }: {
    plane: Plane;
    dice: DiceSides;
    inFlightPlanes: Plane[];
  }): BoardLocation[] => {
    const landingSpots: BoardLocation[] = [];
    const nextDice = (dice - 1) as DiceSides;
    const { north, south, east, west } = getNearLocationCoords(plane);
    if (
      north &&
      !inFlightPlanes.find((inFlightPlane) =>
        isBoardLocationEq(north, inFlightPlane)
      )
    )
      landingSpots.push(north);
    if (
      south &&
      !inFlightPlanes.find((inFlightPlane) =>
        isBoardLocationEq(south, inFlightPlane)
      )
    )
      landingSpots.push(south);
    if (
      east &&
      !inFlightPlanes.find((inFlightPlane) =>
        isBoardLocationEq(east, inFlightPlane)
      )
    )
      landingSpots.push(east);
    if (
      west &&
      !inFlightPlanes.find((inFlightPlane) =>
        isBoardLocationEq(west, inFlightPlane)
      )
    )
      landingSpots.push(west);
    if (nextDice <= 0) return landingSpots;

    return landingSpots.reduce(
      (acc, { x, y }) => [
        ...acc,
        ...getMoveLocations({
          plane: { ...plane, x, y },
          dice: nextDice,
          inFlightPlanes,
        }),
      ],
      [] as BoardLocation[]
    );
  };

  const boardLocations = getMoveLocations(params);

  return {
    boardLocations,
    boardLocationStrs: boardLocations.map(getBoardLocationString),
  };
};
