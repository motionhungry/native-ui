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
  TabBar,
  tabBar,
  textConfig,
  TextConfig,
  TextInput,
  textInput,
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
    TabBar: TabBar;
    Text: TextConfig;
    TextInput: TextInput;
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
    TabBar: tabBar,
    Text: textConfig,
    TextInput: textInput,
  },
};
