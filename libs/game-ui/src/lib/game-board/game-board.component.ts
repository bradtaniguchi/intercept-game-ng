import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
// import {} from '@intercept-game/game/';

@Component({
  selector: 'intercept-game-game-board',
  templateUrl: './game-board.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameBoardComponent {
  // public readonly board:
}

@NgModule({
  imports: [CommonModule],
  declarations: [GameBoardComponent],
  exports: [GameBoardComponent],
})
export class GameBoardComponentModule {}
