import { BoardEntityId, isBoardEntityId } from './board-entity-id';
import { BoardHeight } from './board-height';
import { BoardLocation, isBoardLocation } from './board-location';

/**
 * A board entity is a generic type defining something that can be placed
 * on the board itself, such as a plane, or anti-aircraft gun.
 *
 * Unlike the `BoardLocation` type, this type includes properties can be used to
 * identify this entity.
 */
export interface BoardEntity<Id = BoardEntityId> extends BoardLocation {
  /**
   * The unique id of this BoardEntity. No other entity on the board
   * should ever have the same id.
   */
  id: Id;

  /**
   * The height of the entity on the board. Unlike locations on the board,
   * entities can be placed on the board at different heights, and thus "overlap".
   */
  height: BoardHeight;
}

/**
 * Type-guard for the `BoardEntity` type.
 * Internally uses the `IsBoardLocation` type-guard.
 */
export const isBoardEntity = (entity: unknown) =>
  entity instanceof Object &&
  isBoardEntityId((entity as BoardEntity).id) &&
  isBoardLocation(entity);
