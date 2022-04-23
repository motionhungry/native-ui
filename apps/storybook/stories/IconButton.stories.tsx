import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import { IconButton } from '@motionhungry-ui/components';

const IconButtonMeta: ComponentMeta<typeof IconButton> = {
  title: 'IconButton',
  component: IconButton,
  args: {
    color: 'primary',
    disabled: false,
    icon: 'star',
    size: 'default',
    variant: 'primary',
  },
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    onPress: { action: 'pressed' },
    size: {
      options: ['default', 'small'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
    },
  },
};

export default IconButtonMeta;

type IconButtonStory = ComponentStory<typeof IconButton>;

const Template: IconButtonStory = (args) => <IconButton {...args} />;

export const Primary: IconButtonStory = Template.bind({});
Primary.args = {
  ...IconButtonMeta.args,
  variant: 'primary',
};

export const Secondary: IconButtonStory = Template.bind({});
Secondary.args = {
  ...Primary.args,
  variant: 'secondary',
};

export const Tertiary: IconButtonStory = Template.bind({});
Tertiary.args = {
  ...Primary.args,
  variant: 'tertiary',
};

export const Disabled: IconButtonStory = Template.bind({});
Disabled.args = {
  ...Primary.args,
  disabled: true,
};

export const SecondaryColor: IconButtonStory = Template.bind({});
SecondaryColor.args = {
  ...Primary.args,
  color: 'secondary',
};

export const SmallButton: IconButtonStory = Template.bind({});
SmallButton.args = {
  ...Primary.args,
  size: 'small',
};

