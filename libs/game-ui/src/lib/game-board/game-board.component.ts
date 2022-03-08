import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { createGrid } from '@intercept-game/game';
import { GameCellComponentModule } from '../game-cell/game-cell.component';

@Component({
  selector: 'intercept-game-game-board',
  templateUrl: './game-board.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameBoardComponent {
  /**
   * The grid used to render all the nested components. This
   * is primarily to provide the coordinates for display and
   * each of the nested components renders stuff individually.
   */
  public readonly grid = createGrid();
}

@NgModule({
  imports: [CommonModule, GameCellComponentModule],
  declarations: [GameBoardComponent],
  exports: [GameBoardComponent],
})
export class GameBoardComponentModule {}
