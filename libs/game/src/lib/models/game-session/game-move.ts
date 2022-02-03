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
}
