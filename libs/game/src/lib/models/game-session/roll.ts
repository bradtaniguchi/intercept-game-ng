import { DiceSides } from './dice-sides';
import { RollId } from './roll-id';
/**
 * Entity representing a single roll of the 2 dice within the game.
 *
 * A player can roll both dice, but possibly only use 1 of the dice, if
 * they only have 1 plane in the air.
 */
export interface Roll {
  /**
   * The id of the roll, unique within the game.
   */
  id: RollId;

  /**
   * The 2 rolls of the dice, the player can pick to use either or
   * if they only have 1 plane in the air.
   */
  dice: [DiceSides, DiceSides];
}
