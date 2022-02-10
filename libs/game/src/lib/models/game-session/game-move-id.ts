import { nanoid } from 'nanoid';

/**
 * The length of a game-session id.
 */
export const GAME_MOVE_ID_LENGTH = 8;

/**
 * Type that represents a GameMoveId.
 */
export type GameMoveId = string & { readonly brand: unique symbol };

/**
 * Function that can be used to create a GameMoveId
 */
export const GameMoveId = (id: string): GameMoveId => id as GameMoveId;

/**
 * Function that can be used to check if a value is a GameMoveId.
 */
export const isGameMoveId = (id: unknown): id is GameMoveId =>
  typeof id === 'string' && id.length === GAME_MOVE_ID_LENGTH;

/**
 * Creates a valid game-move-id.
 */
export const createGameMoveId = (): GameMoveId =>
  GameMoveId(nanoid(GAME_MOVE_ID_LENGTH));
