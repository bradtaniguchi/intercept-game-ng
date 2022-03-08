import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBomb, faFighterJet } from '@fortawesome/free-solid-svg-icons';
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
        display: flex;
        justify-content: center;
        align-items: center;
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

  /**
   * The rotation of the icon.
   * Only supports the `jet-fighter` icon, as the bomb
   * has the same orient
   */
  public get faRotation() {
    if (this.icon === 'jet-fighter') {
      switch (this.direction) {
        case 'north':
          return 270;
        case 'south':
          return 90;
        case 'east':
          return 0;
        case 'west':
          return 180;
        default:
          return undefined;
      }
    }

    return undefined;
  }
}

@NgModule({
  imports: [FontAwesomeModule],
  declarations: [GameCellComponent],
  exports: [GameCellComponent],
})
export class GameCellComponentModule {}
