export type Color = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

export type Palette = {
  primary: Color;
  secondary: Color;
  danger: Color;
  success: Color;
  warning: Color;
  grayscale: Color;
  black: string;
  white: string;
};

const black = '#000000';
const white = '#ffffff';

const grayscale: Color = {
  50: '#f2f2f2',
  100: '#e6e6e6',
  200: '#cccccc',
  300: '#b3b3b3',
  400: '#999999',
  500: '#808080',
  600: '#666666',
  700: '#4d4d4d',
  800: '#333333',
  900: '#1a1a1a',
};

export const palette: Palette = {
  primary: grayscale,
  secondary: grayscale,
  danger: grayscale,
  success: grayscale,
  warning: grayscale,
  grayscale: grayscale,
  black,
  white,
};
