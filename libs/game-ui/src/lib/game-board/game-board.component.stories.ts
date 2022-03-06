import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { GameCellComponentModule } from '../game-cell/game-cell.component';
import { GameBoardLocationPipe } from './game-board-location.pipe';
import { GameBoardComponent } from './game-board.component';

export default {
  title: 'GameBoardComponent',
  component: GameBoardComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, GameCellComponentModule],
      declarations: [GameBoardLocationPipe],
    }),
  ],
} as Meta<GameBoardComponent>;

const Template: Story<GameBoardComponent> = (args: GameBoardComponent) => ({
  component: GameBoardComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
