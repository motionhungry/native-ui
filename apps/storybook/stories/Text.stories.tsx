import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import { Text } from '@motionhungry-ui/components';

const TextMeta: ComponentMeta<typeof Text> = {
  title: 'Text',
  component: Text,
  args: {
    size: 1,
    children: 'Text',
    fontWeight: 'regular',
  },
};

export default TextMeta;

type TextStory = ComponentStory<typeof Text>;

const Template: TextStory = (args) => <Text {...args} />;

export const Text1: TextStory = Template.bind({});
Text1.args = {
  ...TextMeta.args,
  size: 1,
};

export const Text2: TextStory = Template.bind({});
Text2.args = {
  ...TextMeta.args,
  size: 2,
};

export const Text3: TextStory = Template.bind({});
Text3.args = {
  ...TextMeta.args,
  size: 3,
};

export const Text4: TextStory = Template.bind({});
Text4.args = {
  ...TextMeta.args,
  size: 4,
};
