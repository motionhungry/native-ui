import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import { Badge } from '@motionhungry-ui/components';

const BadgeMeta: ComponentMeta<typeof Badge> = {
  title: 'Badge',
  component: Badge,
  args: {
    someProp: Badge,
  },
};

export default BadgeMeta;

type BadgeStory = ComponentStory<typeof Badge>;

export const Default: BadgeStory = (args) => <Badge {...args} />;
