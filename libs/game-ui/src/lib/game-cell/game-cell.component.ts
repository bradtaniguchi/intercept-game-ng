import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
} from '@angular/core';
import { Direction } from '@intercept-game/game';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFighterJet, faBomb } from '@fortawesome/free-solid-svg-icons';

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
   * currently only a bomb, or jet-fighter.
   */
  @Input() icon?: 'jet-fighter' | 'bomb';
  /**
   * The background-color of this cell.
   */
  @Input() backgroundColor?: string;
  /**
   * The direction the icon should be facing
   */
  @Input() direction?: Direction;

  /**
   * Returns the FA icon relative to the `icon` attribute
   */
  public get faIcon() {
    if (this.icon === 'jet-fighter') return faFighterJet;
    if (this.icon === 'bomb') return faBomb;

    return undefined;
  }
}

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [GameCellComponent],
  exports: [GameCellComponent],
})
export class GameCellComponentModule {}
