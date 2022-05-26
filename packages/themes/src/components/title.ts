import { TextSize } from './text';
import { HeadingSize } from './heading';
import { SpaceVariant } from '../base/space';
import { palette } from 'base';

export type TitleSize = 'large' | 'medium' | 'small';

type TitleSizeConfig = {
  box: {
    paddingTop: SpaceVariant;
    paddingBottom: SpaceVariant;
    paddingX: SpaceVariant;
    backgroundColor?: string;
  };
  heading: {
    size: HeadingSize;
    textAlign?: 'left' | 'center' | 'right';
  };
  icon: {
    color: string;
    size: number;
  };
  label: {
    color: string;
    size: TextSize;
  };
};

export type TitleConfig = Record<TitleSize, TitleSizeConfig>;

export const titleConfig: TitleConfig = {
  large: {
    box: {
      backgroundColor: palette.grayscale[200],
      paddingTop: 4,
      paddingBottom: 2.5,
      paddingX: 3,
    },
    heading: {
      size: 'xlarge',
    },
    icon: {
      color: palette.primary[500],
      size: 24,
    },
    label: {
      color: palette.grayscale[900],
      size: 'medium',
    },
  },
  medium: {
    box: {
      backgroundColor: palette.grayscale[200],
      paddingTop: 3,
      paddingBottom: 2.5,
      paddingX: 3,
    },
    heading: {
      size: 'large',
    },
    icon: {
      color: palette.primary[500],
      size: 24,
    },
    label: {
      color: palette.grayscale[900],
      size: 'medium',
    },
  },
  small: {
    box: {
      paddingTop: 1,
      paddingBottom: 1,
      paddingX: 3,
    },
    heading: {
      size: 'small',
      textAlign: 'center',
    },
    icon: {
      color: palette.primary[500],
      size: 24,
    },
    label: {
      color: palette.grayscale[900],
      size: 'medium',
    },
  },
};
