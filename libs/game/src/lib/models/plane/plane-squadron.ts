/**
 * The squadrons on the "north" part of the board, in the traditional board game,
 * this was the German air-force.
 *
 * From left to right they where both named "jagdstaffel" 10 and 11.
 *
 * However, for this game we will give them the more generic/non-ww1 themed names of
 * "foo" and "bar" squadron.
 */
export const NORTH_SQUADRONS = ['foo', 'bar'];

/**
 * The north squadron types.
 * @see NORTH_SQUADRONS
 */
export type NorthSquadron = typeof NORTH_SQUADRONS[number];

/**
 * Type-guard if the given squadron is a "north" squadron.
 * Can be used to determine the faction
 */
export const isNorthSquadron = (squadron: unknown): squadron is NorthSquadron =>
  typeof squadron === 'string' &&
  NORTH_SQUADRONS.includes(squadron as NorthSquadron);

/**
 * The squadrons on the "south" part of the board, in the traditional board game,
 * these were allied air-forces.
 *
 * From left to right, they were named: "94th Squadron" and "95th Squadron".
 *
 * However, for this game we will give them the more generic/non-ww1 themed names of
 * "alpha" and "beta" squadron.
 */
export const SOUTH_SQUADRONS = ['alpha', 'beta'];

/**
 * The South Squadron types.
 * @see SOUTH_SQUADRONS
 */
export type SouthSquadron = typeof SOUTH_SQUADRONS[number];

/**
 * Type-guard if the given squadron is a "south" squadron.
 * Can be used to determine the faction
 */
export const isSouthSquadron = (squadron: unknown): squadron is SouthSquadron =>
  typeof squadron === 'string' &&
  SOUTH_SQUADRONS.includes(squadron as SouthSquadron);

/**
 * The list of all squadrons in the game, regardless of faction.
 * @see NORTH_SQUADRONS
 * @see SOUTH_SQUADRONS
 */
export const PLANE_SQUADRONS = [...NORTH_SQUADRONS, ...SOUTH_SQUADRONS];

/**
 * The plane squadron type, includes both factions.
 */
export type PlaneSquadron = typeof NORTH_SQUADRONS[number];

/**
 * If the given squadron is a plane squadron.
 */
export const isPlaneSquadron = (squadron: unknown): squadron is PlaneSquadron =>
  typeof squadron === 'string' &&
  PLANE_SQUADRONS.includes(squadron as PlaneSquadron);
