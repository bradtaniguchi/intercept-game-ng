import { Directive, Input, ViewContainerRef } from '@angular/core';
import { BoardLocation } from '@intercept-game/game';
import { UntilDestroy } from '@ngneat/until-destroy';
import { GameCellGridComponent } from '../game-cell-grid/game-cell-grid.component';

@UntilDestroy()
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[gameCell]',
})
export class GameCellRendererDirective {
  /**
   * The location we will render components for this cell within
   * the game. This shouldn't change for this directive
   */
  @Input() gameCell?: BoardLocation;

  constructor(public viewContainerRef: ViewContainerRef) {
    // TODO: as a test
    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(GameCellGridComponent);
  }
}
