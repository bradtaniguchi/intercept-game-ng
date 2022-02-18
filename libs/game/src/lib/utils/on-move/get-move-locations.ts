import {
  BoardLocation,
  BoardLocationStr,
} from '../../models/board/board-location';
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
   *
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
  // TODO:

  return {
    boardLocations: [],
    boardLocationStrs: [],
  };
};