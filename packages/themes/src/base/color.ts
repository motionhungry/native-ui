export type ColorOpacity = { 100: string; 75: string; 50: string; 25: string };

export type Color = Record<string, ColorOpacity> & {
  primary: ColorOpacity;
  secondary: ColorOpacity;
};

const baseColor = {
  white: {
    100: '#ffffff',
    75: 'rgba(255, 255, 255, 0.75)',
    50: 'rgba(255, 255, 255, 0.50)',
    25: 'rgba(255, 255, 255, 0.25)',
  },
  black: {
    100: '#0000000',
    75: 'rgba(0, 0, 0, 0.75)',
    50: 'rgba(0, 0, 0, 0.50)',
    25: 'rgba(0, 0, 0, 0.25)',
  },
  purpleReign: {
    100: '#8400b2',
    75: '#a340c5',
    50: '#c180d9',
    25: '#e0bfec',
  },
  miamiLights: {
    100: '#ff0088',
    75: '#ff40a6',
    50: '#ff80c3',
    25: '#ffbfe1',
  },
};

export const color: Color = {
  ...baseColor,
  primary: baseColor.black,
  secondary: baseColor.black,
};
