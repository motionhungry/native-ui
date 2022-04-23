import { color } from '../base/color';
import { baseTheme, Theme } from './base';

export const defaultTheme: Theme = {
  ...baseTheme,
  color: {
    ...color,
    primary: color.purpleReign,
    secondary: color.miamiLights,
  },
};
