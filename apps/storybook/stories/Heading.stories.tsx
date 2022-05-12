import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import { Heading } from '@motionhungry-ui/components';

const HeadingMeta: ComponentMeta<typeof Heading> = {
  title: 'Heading',
  component: Heading,
  args: {
    size: 1,
    children: 'Heading',
  },
};

export default HeadingMeta;

type HeadingStory = ComponentStory<typeof Heading>;

const Template: HeadingStory = (args) => <Heading {...args} />;

export const Heading1: HeadingStory = Template.bind({});
Heading1.args = {
  ...HeadingMeta.args,
  size: 1,
};

export const Heading2: HeadingStory = Template.bind({});
Heading2.args = {
  ...HeadingMeta.args,
  size: 2,
};

export const Heading3: HeadingStory = Template.bind({});
Heading3.args = {
  ...HeadingMeta.args,
  size: 3,
};

export const Heading4: HeadingStory = Template.bind({});
Heading4.args = {
  ...HeadingMeta.args,
  size: 4,
};
