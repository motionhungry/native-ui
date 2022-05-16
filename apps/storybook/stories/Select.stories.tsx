import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import { Select } from '@motionhungry-ui/components';

const SelectMeta: ComponentMeta<typeof Select> = {
  title: 'Select',
  component: Select,
  args: {
    someProp: Select,
  },
};

export default SelectMeta;

type SelectStory = ComponentStory<typeof Select>;

export const Default: SelectStory = (args) => <Select {...args} />;
