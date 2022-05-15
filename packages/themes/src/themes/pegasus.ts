import { color } from '../base/color';
import { baseTheme, Theme } from './base';

const primaryColor = {
  100: '#610bef',
  75: '#a996ff',
  50: '#bfbefc',
  25: '#ebecfe',
};

const grayscale = {
  offwhite: '#fcfcfc',
  bg: '#f7f7fc',
  input: '#eff0f6',
  inputDisabled: '#f6f7fb',
  line: '#d9dbe9',
  placeholder: '#a0a3bd',
  label: '#6e7191',
  labelDisabled: '#b6b7c8',
  body: '#4e4b66',
  ash: '#262338',
  offblack: '#14142b',
};

const error = {
  dark: '#9e0038',
  default: '#ca024f',
  darkMode: '#ff75cb',
  bg: '#ffabe8',
  light: '#ffecfc',
};

const success = {
  dark: '#067306',
  default: '#008a00',
  darkMode: '#a6f787',
  bg: '#cbffae',
  light: '#eaf9de',
};

const secondaryColor = color.miamiLights;

export const pegasusTheme: Theme = {
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
      state: {
        inactive: {
          box: {
            backgroundColor: grayscale.input,
            borderColor: grayscale.input,
            borderWidth: '2px',
          },
          labelColor: grayscale.label,
          textInputColor: grayscale.offblack,
        },
        active: {
          box: {
            backgroundColor: grayscale.offwhite,
            borderColor: grayscale.offblack,
            borderWidth: '2px',
          },
          labelColor: grayscale.label,
          textInputColor: grayscale.offblack,
        },
        disabled: {
          box: {
            backgroundColor: grayscale.inputDisabled,
            borderColor: grayscale.inputDisabled,
            borderWidth: '2px',
          },
          labelColor: grayscale.inputDisabled,
          textInputColor: grayscale.inputDisabled,
        },
        error: {
          box: {
            backgroundColor: error.light,
            borderColor: error.default,
            borderWidth: '2px',
          },
          labelColor: error.dark,
          textInputColor: grayscale.offblack,
        },
        success: {
          box: {
            backgroundColor: success.light,
            borderColor: success.default,
            borderWidth: '2px',
          },
          labelColor: success.dark,
          textInputColor: grayscale.offblack,
        },
      },
    },
  },
};
