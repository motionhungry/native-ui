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
  fab,
  Fab,
  heading,
  Heading,
  iconButtonConfig,
  IconButtonConfig,
  listItemConfig,
  ListItemConfig,
  TabBar,
  tabBar,
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
    Fab: Fab;
    Heading: Heading;
    IconButton: IconButtonConfig;
    ListItem: ListItemConfig;
    TabBar: TabBar;
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
    Fab: fab,
    Heading: heading,
    IconButton: iconButtonConfig,
    ListItem: listItemConfig,
    TabBar: tabBar,
    Text: textConfig,
    Title: titleConfig,
    Input: inputConfig,
  },
};
