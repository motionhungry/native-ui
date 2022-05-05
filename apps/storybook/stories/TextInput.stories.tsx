import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import { TextInput } from '@motionhungry-ui/components';

const TextInputMeta: ComponentMeta<typeof TextInput> = {
  title: 'TextInput',
  component: TextInput,
  args: {
    label: 'Some Label',
  },
};

export default TextInputMeta;

type TextInputStory = ComponentStory<typeof TextInput>;

export const Default: TextInputStory = (args) => <TextInput {...args} />;
