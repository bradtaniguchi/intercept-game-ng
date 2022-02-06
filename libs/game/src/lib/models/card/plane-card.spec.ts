import { createTestPlane } from '../plane/plane';
import { PlaneId } from '../plane/plane-id';
import { getRandomCards, PlaneCard, PLANE_CARD_DECK } from './plane-card';

describe('PLANE_CARD_DECK', () => {
  test('returns cards', () =>
    expect(PLANE_CARD_DECK).toEqual([
      'energy-1',
      'energy-1',
      'energy-1',
      'energy-2',
      'energy-2',
      'energy-3',
      'energy-3',
      'energy-4',
      'energy-4',
      'energy-5',
      'energy-5',
      'loop',
      'loop',
      'barrel-roll',
      'barrel-roll',
      'barrel-roll',
    ]));
  test('is frozen', () =>
    expect(() => (PLANE_CARD_DECK as string[]).pop()).toThrow());
});

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
  test('returns 4 cards if non-ace plane', () =>
    // TODO: add sorting
    expect(getRandomCards(createTestPlane())).toEqual([
      'energy-4',
      'energy-2',
      'barrel-roll',
      'energy-5',
    ] as PlaneCard[]));
  test('can not return the same card too many times', () => {
    randomSpy.mockRestore();
    randomSpy = jest.spyOn(global.Math, 'random').mockReturnValue(0);
    expect(getRandomCards(createTestPlane())).toEqual([
      'energy-1',
      'energy-1',
      'energy-1',
      'energy-2',
    ]);
  });
  test('returns 6 cards if ace', () =>
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
      'loop',
      'energy-2',
    ]));
  test('returns 8 cards if double ace', () =>
    expect(
      getRandomCards(
        createTestPlane({
          downed: [PlaneId('test-plane-2'), PlaneId('test-plane-3')],
        })
      )
    ).toEqual([
      'energy-4',
      'energy-2',
      'barrel-roll',
      'energy-5',
      'loop',
      'energy-2',
      'energy-3',
      'energy-1',
    ]));
  test('still returns 8 cards if multi-ace', () =>
    expect(
      getRandomCards(
        createTestPlane({
          downed: [
            PlaneId('test-plane-2'),
            PlaneId('test-plane-3'),
            PlaneId('test-plane-4'),
            PlaneId('test-plane-5'),
          ],
        })
      )
    ).toEqual([
      'energy-4',
      'energy-2',
      'barrel-roll',
      'energy-5',
      'loop',
      'energy-2',
      'energy-3',
      'energy-1',
    ]));
});
