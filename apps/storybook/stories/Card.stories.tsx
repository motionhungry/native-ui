import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import { Card } from '@motionhungry-ui/components';

const CardMeta: ComponentMeta<typeof Card> = {
  title: 'Card',
  component: Card,
  args: {
    someProp: Card,
  },
};

export default CardMeta;

type CardStory = ComponentStory<typeof Card>;

export const Default: CardStory = (args) => <Card {...args} />;
