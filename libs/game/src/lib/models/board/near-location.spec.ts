import { createGrid } from './board-grid';
import { BoardX } from './board-x';
import { BoardY } from './board-y';
import { getNearLocations } from './near-location';

describe('getNearLocations', () => {
  const createTestGrid = () =>
    createGrid((location) => ({ ...location, value: 'test' }));
  test('returns near locations (5,5)', () =>
    expect(
      getNearLocations(createTestGrid(), { x: BoardX(5), y: BoardY(5) })
    ).toStrictEqual({
      east: {
        value: 'test',
        x: 6,
        y: 5,
      },
      north: {
        value: 'test',
        x: 5,
        y: 4,
      },
      south: {
        value: 'test',
        x: 5,
        y: 6,
      },
      west: {
        value: 'test',
        x: 4,
        y: 5,
      },
    }));
  test('returns partial near locations (0,0)', () =>
    expect(
      getNearLocations(createTestGrid(), { x: BoardX(0), y: BoardY(0) })
    ).toStrictEqual({
      east: {
        value: 'test',
        x: 1,
        y: 0,
      },
      north: undefined,
      south: {
        value: 'test',
        x: 0,
        y: 1,
      },
      west: undefined,
    }));
  test('returns empty locations if beyond grid (15, 15)', () =>
    // **note** this might throw an error in the future
    expect(
      getNearLocations(createTestGrid(), {
        x: BoardX(15),
        y: BoardY(15),
      })
    ).toStrictEqual({
      north: undefined,
      south: undefined,
      east: undefined,
      west: undefined,
    }));
});
