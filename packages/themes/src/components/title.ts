import { TextSize } from './text';
import { HeadingSize } from './heading';
import { SpaceVariant } from '../base/space';
import { color } from 'base';

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
      backgroundColor: color.concrete[100],
      paddingTop: 4,
      paddingBottom: 2.5,
      paddingX: 3,
    },
    heading: {
      size: 'xlarge',
    },
    icon: {
      color: color.black[100],
      size: 24,
    },
    label: {
      color: color.black[100],
      size: 'medium',
    },
  },
  medium: {
    box: {
      backgroundColor: color.concrete[100],
      paddingTop: 3,
      paddingBottom: 2.5,
      paddingX: 3,
    },
    heading: {
      size: 'large',
    },
    icon: {
      color: color.black[100],
      size: 24,
    },
    label: {
      color: color.black[100],
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
      color: color.black[100],
      size: 24,
    },
    label: {
      color: color.black[100],
      size: 'medium',
    },
  },
};
