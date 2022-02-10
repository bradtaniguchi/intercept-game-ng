import { nanoid } from 'nanoid';

/**
 * The length of a game-session id.
 */
export const GAME_SESSION_ID_LENGTH = 16;

/**
 * Type that represents a GameSessionId.
 */
export type GameSessionId = string & { readonly brand: unique symbol };

/**
 * Function that can be used to create a GameSessionId.
 */
export const GameSessionId = (id: string): GameSessionId => id as GameSessionId;

/**
 * Function that can be used to check if a value is a GameSessionId.
 */
export const isGameSessionId = (id: unknown): id is GameSessionId =>
  typeof id === 'string' && id.length === GAME_SESSION_ID_LENGTH;

/**
 * Creates game-session-id
 */
export const createGameSessionId = (): GameSessionId =>
  GameSessionId(nanoid(GAME_SESSION_ID_LENGTH));
