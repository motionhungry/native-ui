import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import { Box, TabBar } from '@motionhungry-ui/components';

const TabBarMeta: ComponentMeta<typeof TabBar> = {
  title: 'TabBar',
  component: TabBar,
  args: {
    icons: ['home', 'search', 'navigate', 'notifications', 'settings-outline'],
    activeIndex: 0,
  },
  argTypes: {
    onTabPress: { action: 'pressed' },
    activeIndex: {
      options: [0, 1, 2, 3, 4],
      control: { type: 'select' },
    },
  },
};

export default TabBarMeta;

type TabBarStory = ComponentStory<typeof TabBar>;

const Template: TabBarStory = (args) => (
  <Box flexGrow={1} justifyContent="flex-end">
    <TabBar {...args} />
  </Box>
);

export const Default: TabBarStory = Template.bind({});
Default.args = {
  ...TabBarMeta.args,
};

export const FabVariant: TabBarStory = Template.bind({});
FabVariant.args = {
  ...Default.args,
  variant: 'fab',
};
