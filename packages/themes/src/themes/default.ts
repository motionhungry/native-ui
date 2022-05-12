import { color } from '../base/color';
import { baseTheme, Theme } from './base';

const primaryColor = color.purpleReign;
const secondaryColor = color.miamiLights;

export const defaultTheme: Theme = {
  ...baseTheme,
  color: {
    ...color,
    primary: primaryColor,
    secondary: secondaryColor,
  },
  components: {
    ...baseTheme.components,
    Button: {
      ...baseTheme.components.Button,
      variant: {
        ...baseTheme.components.Button.variant,
        primary: {
          ...baseTheme.components.Button.variant.primary,
          box: {
            backgroundColor: primaryColor[100],
          },
        },
      },
    },
    TextInput: {
      ...baseTheme.components.TextInput,
      label: {
        ...baseTheme.components.TextInput.label,
        color: secondaryColor[100],
      },
    },
  },
};
