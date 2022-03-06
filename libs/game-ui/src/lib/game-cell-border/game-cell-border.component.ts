import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'intercept-game-game-cell-border',
  templateUrl: './game-cell-border.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCellBorderComponent {}

@NgModule({
  imports: [CommonModule],
  declarations: [GameCellBorderComponent],
  exports: [GameCellBorderComponent],
})
export class GameCellBorderComponentModule {}
