import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy, Component, NgModule
} from '@angular/core';

@Component({
  selector: 'intercept-game-game-board',
  templateUrl: './game-board.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameBoardComponent {
}

@NgModule({
  imports: [CommonModule],
  declarations: [GameBoardComponent],
  exports: [GameBoardComponent],
})
export class GameBoardComponentModule {}
