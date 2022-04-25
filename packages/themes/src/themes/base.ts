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
  },
};
