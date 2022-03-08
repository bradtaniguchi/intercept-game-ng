import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { GameCellComponent } from './game-cell.component';

export default {
  title: 'GameCellComponent',
  component: GameCellComponent,
  decorators: [
    moduleMetadata({
      imports: [],
      declarations: [],
    }),
  ],
} as Meta<GameCellComponent>;

const Template: Story<GameCellComponent> = (args: GameCellComponent) => ({
  component: GameCellComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
