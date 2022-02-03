/**
 * The 4 cardinal directions.
 */
export const DIRECTIONS = ['north', 'south', 'east', 'west'];

/**
 * The type of direction.
 */
export type Direction = typeof DIRECTIONS[number];

/**
 * Type guard for directions.
 */
export const isDirection = (direction: unknown): direction is Direction => {
  return (
    typeof direction === 'string' && DIRECTIONS.includes(direction as Direction)
  );
};
