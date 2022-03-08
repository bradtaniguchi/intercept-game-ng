import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DIRECTIONS } from '@intercept-game/game';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { GameCellComponent } from './game-cell.component';

export default {
  title: 'GameCellComponent',
  component: GameCellComponent,
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule],
      declarations: [],
    }),
  ],
  argTypes: {
    direction: {
      options: DIRECTIONS,
      type: 'string',
      defaultValue: 'north',
      description:
        'The direction the icon should be facing, only applies to jet-fighter',
    },
    icon: {
      options: ['jet-fighter', 'bomb'],
      type: 'string',
      defaultValue: 'jet-fighter',
      description: 'The type of icon to display',
    },
  },
} as Meta<GameCellComponent>;

const Template: Story<GameCellComponent> = (args: GameCellComponent) => ({
  component: GameCellComponent,
  props: args,
});

export const Plane = Template.bind({});
Plane.args = {
  icon: 'jet-fighter',
  backgroundColor: 'grey',
  direction: 'north',
};
