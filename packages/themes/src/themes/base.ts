import {
  color,
  Color,
  radius,
  Radius,
  space,
  Space,
  typography,
  Typography,
} from '../base';

import {
  button,
  Button,
  fab,
  Fab,
  iconButton,
  IconButton,
  TabBar,
  tabBar,
  TextInput,
  textInput,
} from '../components';

export type Theme = {
  backgroundColor: string;
  color: Color;
  radius: Radius;
  space: Space;
  typography: Typography;
  components: {
    Button: Button;
    Fab: Fab;
    IconButton: IconButton;
    TabBar: TabBar;
    TextInput: TextInput;
  };
};

export const baseTheme: Theme = {
  backgroundColor: color.white[100],
  color,
  radius,
  space,
  typography,
  components: {
    Button: button,
    Fab: fab,
    IconButton: iconButton,
    TabBar: tabBar,
    TextInput: textInput,
  },
};
