import {
  color,
  Color,
  radius,
  Radius,
  space,
  Space,
} from '../base';

import {
  buttonConfig,
  ButtonConfig,
  cardConfig,
  CardConfig,
  containerConfig,
  ContainerConfig,
  fab,
  Fab,
  heading,
  Heading,
  iconButtonConfig,
  IconButtonConfig,
  listItemConfig,
  ListItemConfig,
  TabBarConfig,
  tabBarConfig,
  textConfig,
  TextConfig,
  titleConfig,
  TitleConfig,
  InputConfig,
  inputConfig,
} from '../components';

export type Theme = {
  backgroundColor: string;
  color: Color;
  radius: Radius;
  space: Space;
  components: {
    Button: ButtonConfig;
    Card: CardConfig;
    Container: ContainerConfig;
    Fab: Fab;
    Heading: Heading;
    IconButton: IconButtonConfig;
    ListItem: ListItemConfig;
    TabBar: TabBarConfig;
    Text: TextConfig;
    Title: TitleConfig;
    Input: InputConfig;
  };
};

export const baseTheme: Theme = {
  backgroundColor: color.white[100],
  color,
  radius,
  space,
  components: {
    Button: buttonConfig,
    Card: cardConfig,
    Container: containerConfig,
    Fab: fab,
    Heading: heading,
    IconButton: iconButtonConfig,
    ListItem: listItemConfig,
    TabBar: tabBarConfig,
    Text: textConfig,
    Title: titleConfig,
    Input: inputConfig,
  },
};
