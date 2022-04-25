import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import { Fab } from '@motionhungry-ui/components';

const FabMeta: ComponentMeta<typeof Fab> = {
  title: 'Fab',
  component: Fab,
  args: {
    icon: 'navigate',
  },
  argTypes: {
    onPress: { action: 'pressed' },
  },
};

export default FabMeta;

type FabStory = ComponentStory<typeof Fab>;

export const Default: FabStory = (args) => <Fab {...args} />;
