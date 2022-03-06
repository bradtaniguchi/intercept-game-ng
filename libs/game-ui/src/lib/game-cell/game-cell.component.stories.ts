import { BoardX, BoardY } from '@intercept-game/game';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { GameCellComponent } from './game-cell.component';

export default {
  title: 'GameCellComponent',
  component: GameCellComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<GameCellComponent>;

const Template: Story<GameCellComponent> = (args: GameCellComponent) => ({
  component: GameCellComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  location: {
    x: BoardX(5),
    y: BoardY(5),
  },
};
