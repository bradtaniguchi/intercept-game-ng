import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
} from '@angular/core';
import { Direction } from '@intercept-game/game';

@Component({
  selector: 'intercept-game-game-cell',
  templateUrl: './game-cell.component.html',
  styles: [
    `
      .cell {
        min-width: 64px;
        min-height: 64px;
        height: 64px;
        width: 64px;
        border: 1px solid grey;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCellComponent {
  /**
   * The icon to display,
   * currently only a bomb, or jet-fighter
   * TODO: change to type
   */
  @Input() icon?: string;
  /**
   * The background-color of this cell.
   * TODO: change to type
   */
  @Input() backgroundColor?: string;
  /**
   * The direction the icon should be facing
   */
  @Input() direction?: Direction;
}

@NgModule({
  imports: [CommonModule],
  declarations: [GameCellComponent],
  exports: [GameCellComponent],
})
export class GameCellComponentModule {}
