/**
 * The length of a plane-id
 */
export const PLANE_ID_LENGTH = 8;

/**
 * Type that represents a PlaneId.
 */
export type PlaneId = string & { readonly brand: unique symbol };

/**
 * Function that can be used to create a PlaneId
 */
export const PlaneId = (id: string): PlaneId => id as PlaneId;

/**
 * If the given id is a plane-id
 */
export const isPlaneId = (id: unknown): id is PlaneId =>
  typeof id === 'string' && id.length === PLANE_ID_LENGTH;
