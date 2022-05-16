import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import { ListItem } from '@motionhungry-ui/components';

const ListItemMeta: ComponentMeta<typeof ListItem> = {
  title: 'ListItem',
  component: ListItem,
  args: {
    someProp: ListItem,
  },
};

export default ListItemMeta;

type ListItemStory = ComponentStory<typeof ListItem>;

export const Default: ListItemStory = (args) => <ListItem {...args} />;
