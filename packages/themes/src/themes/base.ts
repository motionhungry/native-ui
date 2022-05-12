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
  heading,
  Heading,
  iconButton,
  IconButton,
  TabBar,
  tabBar,
  text,
  Text,
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
    Heading: Heading;
    IconButton: IconButton;
    TabBar: TabBar;
    Text: Text;
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
    Heading: heading,
    IconButton: iconButton,
    TabBar: tabBar,
    TextInput: textInput,
    Text: text,
  },
};
