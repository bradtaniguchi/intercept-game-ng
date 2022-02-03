import { BoardLocation } from '../board/board-location';
import { Direction } from '../board/direction';
import { PlaneId } from '../plane/plane-id';
import { GameMoveId } from './game-move-id';

/**
 * Represents a move within a game-session. Multiple of these
 * create the overall history of a match.
 *
 * TODO: Update with Plane move info, and provide utilities related
 * to this move.
 */
export interface GameMove {
  /**
   * The id of the move, should be unique to all moves within the game.
   */
  id: GameMoveId;

  /**
   * The id of the planes that moved.
   */
  plane: PlaneId;

  /**
   * The new location the plane moved to.
   */
  newLocation: BoardLocation;

  /**
   * The direction the plane is now facing.
   * This matters in dog-fights.
   */
  direction: Direction;
}
