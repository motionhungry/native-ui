import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import { Button } from '@motionhungry-ui/components';

const ButtonMeta: ComponentMeta<typeof Button> = {
  title: 'Button',
  component: Button,
  args: {
    color: 'primary',
    disabled: false,
    label: 'Press Me',
    size: 'large',
    variant: 'primary',
  },
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    onPress: { action: 'pressed' },
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
    },
  },
};

export default ButtonMeta;

type ButtonStory = ComponentStory<typeof Button>;

const Template: ButtonStory = (args) => <Button {...args} />;

export const Primary: ButtonStory = Template.bind({});
Primary.args = {
  ...ButtonMeta.args,
  variant: 'primary',
};

export const Secondary: ButtonStory = Template.bind({});
Secondary.args = {
  ...Primary.args,
  variant: 'secondary',
};

export const Tertiary: ButtonStory = Template.bind({});
Tertiary.args = {
  ...Primary.args,
  variant: 'tertiary',
};

export const Disabled: ButtonStory = Template.bind({});
Disabled.args = {
  ...Primary.args,
  disabled: true,
};

export const SecondaryColor: ButtonStory = Template.bind({});
SecondaryColor.args = {
  ...Primary.args,
  color: 'secondary',
};

export const SmallButton: ButtonStory = Template.bind({});
SmallButton.args = {
  ...Primary.args,
  size: 'small',
};
