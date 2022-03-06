import { Pipe, PipeTransform } from '@angular/core';
import { BoardLocation, BoardX, BoardY } from '@intercept-game/game';

@Pipe({ name: 'location', pure: true })
export class ExponentialStrengthPipe implements PipeTransform {
  transform({ x, y }: { x: number; y: number }): BoardLocation {
    return {
      x: BoardX(x),
      y: BoardY(y),
    };
  }
}
