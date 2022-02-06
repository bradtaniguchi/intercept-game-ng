/**
 * The original game has 2 factions, the German air force and the allied air-force.
 *
 * However, for this game we will use cardinal directions to represent the factions.
 * with the "north" and "south".
 *
 * Within the game files, we will use player information for each "faction",
 * but as this can be dynamic, we will use the cardinal directions to represent
 * the factions within the code.
 */
export const FACTIONS = ['north', 'south'] as const;

/**
 * The type of faction
 */
export type Faction = typeof FACTIONS[number];

/**
 * Type-guard to verify if a faction
 */
export const isFaction = (faction: unknown): faction is Faction =>
  FACTIONS.includes(faction as Faction);
