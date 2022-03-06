import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
} from '@angular/core';
import { BoardLocation } from '@intercept-game/game';
import { GameCellRendererDirective } from './game-cell-renderer.directive';

@Component({
  selector: 'intercept-game-game-cell',
  templateUrl: './game-cell.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCellComponent {
  @Input() location?: BoardLocation;
}

@NgModule({
  imports: [CommonModule],
  declarations: [GameCellComponent, GameCellRendererDirective],
  exports: [GameCellComponent],
})
export class GameCellComponentModule {}
