import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'intercept-game-game-cell-plane',
  templateUrl: './game-cell-plane.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCellPlaneComponent {}

@NgModule({
  imports: [CommonModule],
  declarations: [GameCellPlaneComponent],
  exports: [GameCellPlaneComponent],
})
export class GameCellPlaneComponentModule {}
