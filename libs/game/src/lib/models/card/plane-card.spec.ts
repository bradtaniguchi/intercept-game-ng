import { createTestPlane } from '../plane/plane';
import { PlaneId } from '../plane/plane-id';
import { getRandomCards, PlaneCard } from './plane-card';

describe('getRandomCards', () => {
  let randomSpy: jest.SpyInstance;
  beforeEach(() => {
    randomSpy = jest
      .spyOn(global.Math, 'random')
      .mockReturnValueOnce(0.5)
      .mockReturnValueOnce(0.2)
      .mockReturnValueOnce(0.9)
      .mockReturnValueOnce(0.6)
      .mockReturnValueOnce(0.7)
      .mockReturnValue(0.3);
  });
  afterEach(() => {
    randomSpy.mockRestore();
  });
  test('Math.random spy works', () => {
    expect(Math.random()).toBe(0.5);
    expect(Math.random()).toBe(0.2);
  });
  test('Math.random overwrite works', () => {
    randomSpy.mockRestore();
    randomSpy = jest.spyOn(global.Math, 'random').mockReturnValue(0.2);
    expect(Math.random()).toBe(0.2);
    expect(Math.random()).toBe(0.2);
    expect(Math.random()).toBe(0.2);
    expect(Math.random()).toBe(0.2);
  });
  test.skip('returns 4 cards if non-ace plane', () =>
    // TODO: add sorting, can't return same card
    expect(getRandomCards(createTestPlane())).toEqual([
      'energy-4',
      'energy-2',
      'barrel-roll',
      'energy-5',
    ] as PlaneCard[]));
  test.skip('can not return the same card too many times', () => {
    randomSpy.mockRestore();
    randomSpy = jest.spyOn(global.Math, 'random').mockReturnValue(0);
    expect(getRandomCards(createTestPlane())).toEqual([]);
  });
  test.skip('returns 6 cards if ace', () =>
    expect(
      getRandomCards(
        createTestPlane({
          downed: [PlaneId('test-plane-2')],
        })
      )
    ).toEqual([
      'energy-4',
      'energy-2',
      'barrel-roll',
      'energy-5',
      'energy-5',
      'energy-3',
    ]));
  test.todo('returns 8 cards if double ace');
  test.todo('returns 8 cards if multi-ace');
});
