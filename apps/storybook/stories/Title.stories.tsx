import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import { Title } from '@motionhungry-ui/components';

const TitleMeta: ComponentMeta<typeof Title> = {
  title: 'Title',
  component: Title,
  args: {
    someProp: Title,
  },
};

export default TitleMeta;

type TitleStory = ComponentStory<typeof Title>;

export const Default: TitleStory = (args) => <Title {...args} />;
