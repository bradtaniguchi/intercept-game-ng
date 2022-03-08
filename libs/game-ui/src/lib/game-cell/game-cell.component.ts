import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

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
export class GameCellComponent {}

@NgModule({
  imports: [CommonModule],
  declarations: [GameCellComponent],
  exports: [GameCellComponent],
})
export class GameCellComponentModule {}
