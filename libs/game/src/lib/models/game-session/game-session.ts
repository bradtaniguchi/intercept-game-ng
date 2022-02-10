import { GameSessionId } from './game-session-id';

/**
 * A game session is the single object that represents a game. The type can
 * can be combined with other types to help describe a full game.
 */
export interface GameSession {
  /**
   * The unique id of this game session. This will primarily be used for
   * historical and referential purposes.
   */
  id: GameSessionId;
}

// TODO: add other "mixed" types.
