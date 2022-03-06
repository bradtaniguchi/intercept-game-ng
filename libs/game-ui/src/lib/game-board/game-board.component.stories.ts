import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { GameBoardComponent } from './game-board.component';

export default {
  title: 'GameBoardComponent',
  component: GameBoardComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<GameBoardComponent>;

const Template: Story<GameBoardComponent> = (args: GameBoardComponent) => ({
  component: GameBoardComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}