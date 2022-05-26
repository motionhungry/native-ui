import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import { ProgressBar } from '@motionhungry-ui/components';

const ProgressBarMeta: ComponentMeta<typeof ProgressBar> = {
  title: 'ProgressBar',
  component: ProgressBar,
  args: {
    someProp: ProgressBar,
  },
};

export default ProgressBarMeta;

type ProgressBarStory = ComponentStory<typeof ProgressBar>;

export const Default: ProgressBarStory = (args) => <ProgressBar {...args} />;
