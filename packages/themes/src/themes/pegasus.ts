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

const primary = {
  dark: '#4700ab',
  default: '#610bef',
  darkMode: '#a996ff',
  bg: '#ebecfe',
  light: '#bfbefc',
};

const info = {
  dark: '#0041ac',
  default: '#005bd4',
  darkMode: '#50c8fc',
  bg: '#8de9ff',
  light: '#e3feff',
};

const warning = {
  dark: '#946300',
  default: '#eaac30',
  darkMode: '#ffdf9a',
  bg: '#ffe6b0',
  light: '#fff8e9',
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

export const pegasusColors = {
  grayscale,
  error,
  success,
};

export const pegasusTheme: Theme = {
  ...baseTheme,
  backgroundColor: color.white[100],
  color: {
    ...color,
    primary: primaryColor,
    secondary: primaryColor,
  },
  components: {
    ...baseTheme.components,
    Badge: {
      ...baseTheme.components.Badge,
      variant: {
        default: {
          filledBackgroundColor: grayscale.input,
          hollowBorderColor: grayscale.input,
          textColor: grayscale.body,
        },
        primary: {
          filledBackgroundColor: primary.light,
          hollowBorderColor: primary.light,
          textColor: primary.dark,
        },
        info: {
          filledBackgroundColor: info.bg,
          hollowBorderColor: info.bg,
          textColor: info.dark,
        },
        warning: {
          filledBackgroundColor: warning.bg,
          hollowBorderColor: warning.bg,
          textColor: warning.dark,
        },
        success: {
          filledBackgroundColor: success.bg,
          hollowBorderColor: success.bg,
          textColor: success.dark,
        },
        error: {
          filledBackgroundColor: error.light,
          hollowBorderColor: error.light,
          textColor: error.dark,
        },
      },
    },
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
        secondary: {
          ...baseTheme.components.Button.variant.secondary,
          box: {
            ...baseTheme.components.Button.variant.secondary.box,
            borderColor: primaryColor[100],
          },
          label: {
            ...baseTheme.components.Button.variant.secondary.label,
            color: primaryColor[100],
          },
        },
        tertiary: {
          ...baseTheme.components.Button.variant.tertiary,
          label: {
            ...baseTheme.components.Button.variant.tertiary.label,
            color: primaryColor[100],
          },
        },
      },
    },
    Card: {
      ...baseTheme.components.Card,
      borderColor: grayscale.line,
    },
    Fab: {
      ...baseTheme.components.Fab,
      backgroundColor: primaryColor[100],
      iconColor: color.white[100],
      shadowColor: `${grayscale.offblack}25`,
    },
    Input: {
      ...baseTheme.components.Input,
      state: {
        inactive: {
          box: {
            backgroundColor: grayscale.input,
            borderColor: grayscale.input,
            borderWidth: '2px',
          },
          labelColor: grayscale.label,
          inputColor: grayscale.offblack,
        },
        active: {
          box: {
            backgroundColor: color.white[100],
            borderColor: grayscale.offblack,
            borderWidth: '2px',
          },
          labelColor: grayscale.label,
          inputColor: grayscale.offblack,
        },
        disabled: {
          box: {
            backgroundColor: grayscale.inputDisabled,
            borderColor: grayscale.inputDisabled,
            borderWidth: '2px',
          },
          labelColor: grayscale.inputDisabled,
          inputColor: grayscale.inputDisabled,
        },
        error: {
          box: {
            backgroundColor: error.light,
            borderColor: error.default,
            borderWidth: '2px',
          },
          labelColor: error.dark,
          inputColor: grayscale.offblack,
        },
        success: {
          box: {
            backgroundColor: success.light,
            borderColor: success.default,
            borderWidth: '2px',
          },
          labelColor: success.dark,
          inputColor: grayscale.offblack,
        },
      },
    },
    ListItem: {
      ...baseTheme.components.ListItem,
      state: {
        ...baseTheme.components.ListItem.state,
        selected: {
          box: {
            backgroundColor: primaryColor[25],
          },
          icon: {
            color: primaryColor[100],
          },
        },
        default: {
          box: {},
          icon: {
            color: grayscale.label,
          },
        },
      },
    },
    TabBar: {
      ...baseTheme.components.TabBar,
      box: {
        ...baseTheme.components.TabBar.box,
        backgroundColor: grayscale.bg,
      },
      tabState: {
        active: {
          iconColor: primaryColor[100],
        },
        inactive: {
          iconColor: grayscale.label,
        },
      },
    },
    Text: {
      ...baseTheme.components.Text,
      defaultColor: grayscale.offblack,
    },
    Title: {
      ...baseTheme.components.Title,
      large: {
        ...baseTheme.components.Title.large,
        box: {
          ...baseTheme.components.Title.large.box,
          backgroundColor: grayscale.bg,
        },
        label: {
          ...baseTheme.components.Title.large.label,
          color: primaryColor[100],
        },
        icon: {
          ...baseTheme.components.Title.large.icon,
          color: grayscale.offblack,
        },
      },
      medium: {
        ...baseTheme.components.Title.medium,
        box: {
          ...baseTheme.components.Title.medium.box,
          backgroundColor: grayscale.bg,
        },
        label: {
          ...baseTheme.components.Title.large.label,
          color: primaryColor[100],
        },
        icon: {
          ...baseTheme.components.Title.large.icon,
          color: grayscale.offblack,
        },
      },
      small: {
        ...baseTheme.components.Title.small,
        label: {
          ...baseTheme.components.Title.large.label,
          color: primaryColor[100],
        },
        icon: {
          ...baseTheme.components.Title.large.icon,
          color: grayscale.offblack,
        },
      },
    },
  },
};
