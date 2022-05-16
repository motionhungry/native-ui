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
    100: '#000000',
    75: 'rgba(0, 0, 0, 0.75)',
    50: 'rgba(0, 0, 0, 0.50)',
    25: 'rgba(0, 0, 0, 0.25)',
  },
  indigoBlack: {
    100: 'rgb(37, 21, 43)',
    75: 'rgba(37, 21, 43, 0.75)',
    50: 'rgba(37, 21, 43, 0.50)',
    25: 'rgba(37, 21, 43, 0.25)',
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
  concrete: {
    100: '#f6f5f6',
    75: '#f6f5f6',
    50: '#f6f5f6',
    25: '#f6f5f6',
  },
  shale: {
    100: 'rgb(111, 101, 114)',
    75: 'rgba(111, 101, 114, 0.75)',
    50: 'rgba(111, 101, 114, 0.50)',
    25: 'rgba(111, 101, 114, 0.25)',
  },
  sangre: {
    100: '#da004d',
    75: '#da004d75',
    50: '#da004d50',
    25: '#da004d25',
  },
  highlander: {
    100: '#00934e',
    75: '#00934e75',
    50: '#00934e50',
    25: '#00934e25',
  },
};

export const color: Color = {
  ...baseColor,
  primary: baseColor.black,
  secondary: baseColor.black,
};
