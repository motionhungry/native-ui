import { color } from '../base/color';
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
        backgroundColor: color.concrete[100],
        borderColor: color.concrete[100],
        borderWidth: '2px',
      },
      labelColor: color.shale[100],
      inputColor: color.black[100],
    },
    active: {
      box: {
        backgroundColor: color.white[100],
        borderColor: color.black[100],
        borderWidth: '2px',
      },
      labelColor: color.shale[100],
      inputColor: color.black[100],
    },
    disabled: {
      box: {
        backgroundColor: color.shale[25],
        borderColor: color.shale[100],
        borderWidth: '2px',
      },
      labelColor: color.shale[75],
      inputColor: color.shale[100],
    },
    error: {
      box: {
        backgroundColor: color.sangre[25],
        borderColor: color.sangre[100],
        borderWidth: '2px',
      },
      labelColor: color.sangre[100],
      inputColor: color.black[100],
    },
    success: {
      box: {
        backgroundColor: color.highlander[25],
        borderColor: color.highlander[100],
        borderWidth: '2px',
      },
      labelColor: color.highlander[100],
      inputColor: color.black[100],
    },
  },
};
