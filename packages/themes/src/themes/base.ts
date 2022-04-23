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

import { button, Button, iconButton, IconButton } from '../components';

export type Theme = {
  backgroundColor: string;
  color: Color;
  radius: Radius;
  space: Space;
  typography: Typography;
  components: {
    Button: Button;
    IconButton: IconButton;
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
    IconButton: iconButton,
  },
};
