import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BuildConfigService } from '@intercept-game/common-ng';

@Component({
  selector: 'intercept-game-main',
  templateUrl: './main.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  constructor(public configService: BuildConfigService) {}
}
