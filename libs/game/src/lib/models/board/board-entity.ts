import { isBoardEntityId } from '.';
import { BoardEntityId } from './board-entity-id';
import { BoardLocation, isBoardLocation } from './board-location';

/**
 * A board entity is a generic type defining something that can be placed
 * on the board itself, such as a plane, or anti-aircraft gun.
 *
 * Unlike the `BoardLocation` type, this type includes properties can be used to
 * identify this entity.
 */
export interface BoardEntity extends BoardLocation {
  /**
   * The unique id of this BoardEntity. No other entity on the board
   * should ever have the same id.
   */
  id: BoardEntityId;
}

/**
 * Type-guard for the `BoardEntity` type.
 * Internally uses the `IsBoardLocation` type-guard.
 */
export const isBoardEntity = (entity: unknown) =>
  entity instanceof Object &&
  isBoardEntityId((entity as BoardEntity).id) &&
  isBoardLocation(entity);
