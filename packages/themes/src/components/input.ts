import { palette } from '../base/color';
import { radius } from '../base/radius';
import { FontWeight, TextSize } from './text';

export type InputSize = 'large' | 'small';

export type InputState =
  | 'active'
  | 'inactive'
  | 'disabled'
  | 'error'
  | 'success';

type InputSizeConfig = {
  box: {
    height: string;
    borderRadius: string;
  };
  label: {
    size: TextSize;
    fontWeight: FontWeight;
  };
  input: {
    size: TextSize;
    fontWeight: FontWeight;
  };
  placeholder: {
    size: TextSize;
    fontWeight: FontWeight;
  };
  iconSize: number;
};

type InputStateConfig = {
  box: {
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: string;
  };
  labelColor: string;
  inputColor: string;
};

export type InputConfig = {
  size: Record<InputSize, InputSizeConfig>;
  state: Record<InputState, InputStateConfig>;
};

export const inputConfig: InputConfig = {
  size: {
    large: {
      box: {
        height: '64px',
        borderRadius: radius.medium,
      },
      label: {
        size: 'xsmall',
        fontWeight: 'medium',
      },
      input: {
        size: 'small',
        fontWeight: 'normal',
      },
      placeholder: {
        size: 'small',
        fontWeight: 'normal'
      },
      iconSize: 24,
    },
    small: {
      box: {
        height: '56px',
        borderRadius: radius.medium,
      },
      label: {
        size: 'xsmall',
        fontWeight: 'medium',
      },
      input: {
        size: 'small',
        fontWeight: 'normal',
      },
      placeholder: {
        size: 'small',
        fontWeight: 'normal'
      },
      iconSize: 24,
    },
  },
  state: {
    inactive: {
      box: {
        backgroundColor: palette.grayscale[200],
        borderColor: palette.grayscale[200],
        borderWidth: '2px',
      },
      labelColor: palette.grayscale[500],
      inputColor: palette.grayscale[900],
    },
    active: {
      box: {
        backgroundColor: palette.white,
        borderColor: palette.black[900],
        borderWidth: '2px',
      },
      labelColor: palette.grayscale[500],
      inputColor: palette.grayscale[900],
    },
    disabled: {
      box: {
        backgroundColor: palette.grayscale[100],
        borderColor: palette.grayscale[100],
        borderWidth: '2px',
      },
      labelColor: palette.grayscale[300],
      inputColor: palette.grayscale[300],
    },
    error: {
      box: {
        backgroundColor: palette.danger[100],
        borderColor: palette.danger[900],
        borderWidth: '2px',
      },
      labelColor: palette.danger[900],
      inputColor: palette.grayscale[900],
    },
    success: {
      box: {
        backgroundColor: palette.success[100],
        borderColor: palette.success[900],
        borderWidth: '2px',
      },
      labelColor: palette.success[900],
      inputColor: palette.grayscale[900],
    },
  },
};
