import { nanoid } from 'nanoid';

/**
 * The length of a board-entity id. This should be unique enough, and
 * easy enough to work with.
 */
export const BOARD_ENTITY_ID_LENGTH = 8;

/**
 * Type that represents a BoardEntityId.
 */
export type BoardEntityId = string & { readonly brand: unique symbol };

/**
 * Function that can be used to create a BoardEntityId.
 */
export const BoardEntityId = (id: string): BoardEntityId => id as BoardEntityId;

export const isBoardEntityId = (id: unknown): id is BoardEntityId =>
  typeof id === 'string' && id.length === BOARD_ENTITY_ID_LENGTH;

/**
 * Creates a valid board-entity id.
 */
export const createBoardEntityId = (): BoardEntityId =>
  BoardEntityId(nanoid(BOARD_ENTITY_ID_LENGTH));
