import { color } from '../base/color';
import { FontWeight, TextSize } from './text';
import { SpaceVariant } from '../base/space';
import { BorderRadiusVariant } from '../base/radius';

export type BadgeVariant =
  | 'default'
  | 'primary'
  | 'info'
  | 'warning'
  | 'success'
  | 'error';

export type BadgeWeight = 'hollow' | 'filled';

type BadgeVariantConfig = {
  filledBackgroundColor: string;
  hollowBorderColor: string;
  textColor: string;
};

export type BadgeConfig = {
  box: {
    height: string;
    paddingX: SpaceVariant;
  };
  borderRadiusVariant: BorderRadiusVariant;
  textSize: TextSize;
  fontWeight: FontWeight;
  hollowBorderWidth: string;
  variant: Record<BadgeVariant, BadgeVariantConfig>;
};

export const badgeConfig: BadgeConfig = {
  box: {
    height: '28px',
    paddingX: 1,
  },
  borderRadiusVariant: 'small',
  hollowBorderWidth: '1px',
  textSize: 'xsmall',
  fontWeight: 'medium',
  variant: {
    default: {
      filledBackgroundColor: color.shale[25],
      hollowBorderColor: color.shale[25],
      textColor: color.shale[100],
    },
    primary: {
      filledBackgroundColor: color.shale[25],
      hollowBorderColor: color.shale[25],
      textColor: color.shale[100],
    },
    info: {
      filledBackgroundColor: color.shale[25],
      hollowBorderColor: color.shale[25],
      textColor: color.shale[100],
    },
    warning: {
      filledBackgroundColor: color.shale[25],
      hollowBorderColor: color.shale[25],
      textColor: color.shale[100],
    },
    success: {
      filledBackgroundColor: color.shale[25],
      hollowBorderColor: color.shale[25],
      textColor: color.shale[100],
    },
    error: {
      filledBackgroundColor: color.shale[25],
      hollowBorderColor: color.shale[25],
      textColor: color.shale[100],
    },
  },
};
