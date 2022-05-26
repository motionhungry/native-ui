import { Color, Palette } from '../base/color';
import { baseTheme, Theme } from './base';

/**
 * Figma Map
 *
 * grayscale
 *   off-white: 50
 *   bg: 200
 *   input: 300
 *   line: 400
 *   placeholder: 500
 *   label: 600
 *   body: 700
 *   ash: 800
 *   off-black: 900
 *
 * accent colors
 *   bg: 100
 *   light: 200
 *   darkmode: 300
 *   primary: 500
 *   dark: 900
 */

const grayscale: Color = {
  50: '#fcfcfc',
  100: '#fcfcfc',
  200: '#f7f7fc',
  300: '#eff0f6',
  400: '#d9dbe9',
  500: '#a0a3bd',
  600: '#6e7191',
  700: '#4e4b66',
  800: '#262338',
  900: '#14142a',
};

const white = grayscale[50];
const black = grayscale[900];

const primary: Color = {
  50: '#ebecfe',
  100: '#ebecfe',
  200: '#bfbefc',
  300: '#a996ff',
  400: '#610bef',
  500: '#610bef',
  600: '#610bef',
  700: '#4700ab',
  800: '#4700ab',
  900: '#4700ab',
};

const secondary: Color = {
  50: '#e3feff',
  100: '#e3feff',
  200: '#8de9ff',
  300: '#50c8fc',
  400: '#005bd4',
  500: '#005bd4',
  600: '#005bd4',
  700: '#0041ac',
  800: '#0041ac',
  900: '#0041ac',
};

const danger: Color = {
  50: '#ffecfc',
  100: '#ffecfc',
  200: '#ffabe8',
  300: '#ff75cb',
  400: '#ca024f',
  500: '#ca024f',
  600: '#ca024f',
  700: '#9e0038',
  800: '#9e0038',
  900: '#9e0038',
};

const warning: Color = {
  50: '#fff8e9',
  100: '#fff8e9',
  200: '#ffe6b0',
  300: '#ffdf9a',
  400: '#eaac30',
  500: '#eaac30',
  600: '#eaac30',
  700: '#946300',
  800: '#946300',
  900: '#946300',
};

const success: Color = {
  50: '#eaf9de',
  100: '#eaf9de',
  200: '#cbffae',
  300: '#a6f787',
  400: '#008a00',
  500: '#008a00',
  600: '#008a00',
  700: '#067306',
  800: '#067306',
  900: '#067306',
};

const palette: Palette = {
  black,
  white,
  grayscale,
  primary,
  secondary,
  danger,
  warning,
  success,
};

export const pegasusTheme: Theme = {
  ...baseTheme,
  backgroundColor: white,
  palette,
  components: {
    ...baseTheme.components,
    Badge: {
      ...baseTheme.components.Badge,
      variant: {
        default: {
          filledBackgroundColor: grayscale[200],
          hollowBorderColor: grayscale[200],
          textColor: grayscale[900],
        },
        primary: {
          filledBackgroundColor: primary[200],
          hollowBorderColor: primary[200],
          textColor: primary[900],
        },
        info: {
          filledBackgroundColor: secondary[100],
          hollowBorderColor: secondary[100],
          textColor: secondary[900],
        },
        warning: {
          filledBackgroundColor: warning[200],
          hollowBorderColor: warning[200],
          textColor: warning[900],
        },
        success: {
          filledBackgroundColor: success[200],
          hollowBorderColor: success[200],
          textColor: success[900],
        },
        error: {
          filledBackgroundColor: danger[200],
          hollowBorderColor: danger[200],
          textColor: danger[900],
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
            backgroundColor: primary[500],
          },
        },
        secondary: {
          ...baseTheme.components.Button.variant.secondary,
          box: {
            ...baseTheme.components.Button.variant.secondary.box,
            borderColor: primary[500],
          },
          label: {
            ...baseTheme.components.Button.variant.secondary.label,
            color: primary[500],
          },
        },
        tertiary: {
          ...baseTheme.components.Button.variant.tertiary,
          label: {
            ...baseTheme.components.Button.variant.tertiary.label,
            color: primary[500],
          },
        },
      },
    },
    Card: {
      ...baseTheme.components.Card,
      borderColor: grayscale[400],
    },
    Fab: {
      ...baseTheme.components.Fab,
      backgroundColor: primary[500],
      iconColor: white,
      shadowColor: `${grayscale[900]}25`,
    },
    Input: {
      ...baseTheme.components.Input,
      state: {
        inactive: {
          box: {
            backgroundColor: grayscale[300],
            borderColor: grayscale[300],
            borderWidth: '2px',
          },
          labelColor: grayscale[600],
          inputColor: grayscale[900],
        },
        active: {
          box: {
            backgroundColor: white,
            borderColor: grayscale[900],
            borderWidth: '2px',
          },
          labelColor: grayscale[400],
          inputColor: grayscale[900],
        },
        disabled: {
          box: {
            backgroundColor: grayscale[200],
            borderColor: grayscale[200],
            borderWidth: '2px',
          },
          labelColor: grayscale[200],
          inputColor: grayscale[200],
        },
        error: {
          box: {
            backgroundColor: danger[100],
            borderColor: danger[500],
            borderWidth: '2px',
          },
          labelColor: danger[100],
          inputColor: grayscale[900],
        },
        success: {
          box: {
            backgroundColor: success[100],
            borderColor: success[500],
            borderWidth: '2px',
          },
          labelColor: success[900],
          inputColor: grayscale[900],
        },
      },
    },
    ListItem: {
      ...baseTheme.components.ListItem,
      state: {
        ...baseTheme.components.ListItem.state,
        selected: {
          box: {
            backgroundColor: primary[100],
          },
          icon: {
            color: primary[500],
          },
        },
        default: {
          box: {},
          icon: {
            color: grayscale[600],
          },
        },
      },
    },
    ProgressBar: {
      ...baseTheme.components.ProgressBar,
      backgroundColor: grayscale[300],
      progressColor: primary[500],
    },
    TabBar: {
      ...baseTheme.components.TabBar,
      box: {
        ...baseTheme.components.TabBar.box,
        backgroundColor: grayscale[300],
      },
      tabState: {
        active: {
          iconColor: primary[500],
        },
        inactive: {
          iconColor: grayscale[600],
        },
      },
    },
    Text: {
      ...baseTheme.components.Text,
      defaultColor: grayscale[900],
    },
    Title: {
      ...baseTheme.components.Title,
      large: {
        ...baseTheme.components.Title.large,
        box: {
          ...baseTheme.components.Title.large.box,
          backgroundColor: grayscale[300],
        },
        label: {
          ...baseTheme.components.Title.large.label,
          color: primary[500],
        },
        icon: {
          ...baseTheme.components.Title.large.icon,
          color: grayscale[900],
        },
      },
      medium: {
        ...baseTheme.components.Title.medium,
        box: {
          ...baseTheme.components.Title.medium.box,
          backgroundColor: grayscale[200],
        },
        label: {
          ...baseTheme.components.Title.large.label,
          color: primary[500],
        },
        icon: {
          ...baseTheme.components.Title.large.icon,
          color: grayscale[900],
        },
      },
      small: {
        ...baseTheme.components.Title.small,
        label: {
          ...baseTheme.components.Title.large.label,
          color: primary[500],
        },
        icon: {
          ...baseTheme.components.Title.large.icon,
          color: grayscale[900],
        },
      },
    },
  },
};
