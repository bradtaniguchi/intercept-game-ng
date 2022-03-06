import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'intercept-game-game-cell-grid',
  templateUrl: './game-cell-grid.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCellGridComponent {}

@NgModule({
  imports: [CommonModule],
  declarations: [GameCellGridComponent],
  exports: [GameCellGridComponent],
})
export class GameCellGridComponentModule {}
