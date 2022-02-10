import { nanoid } from 'nanoid';

/**
 * The length of a roll-id
 */
export const ROLL_ID_LENGTH = 8;

/**
 * Type that represents a RollId.
 */
export type RollId = string & { readonly brand: unique symbol };

/**
 * Function that can be used to create a RollId
 */
export const RollId = (id: string): RollId => id as RollId;

/**
 * Function that can be used to check if a value is a RollId.
 */
export const isRollId = (id: unknown): id is RollId =>
  typeof id === 'string' && id.length === ROLL_ID_LENGTH;

/**
 * Creates a new roll-id
 */
export const createRollId = (): RollId => RollId(nanoid(ROLL_ID_LENGTH));
