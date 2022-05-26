import { palette } from '../base/color';
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
      filledBackgroundColor: palette.grayscale[300],
      hollowBorderColor: palette.grayscale[300],
      textColor: palette.grayscale[900],
    },
    primary: {
      filledBackgroundColor: palette.primary[300],
      hollowBorderColor: palette.primary[300],
      textColor: palette.primary[900],
    },
    info: {
      filledBackgroundColor: palette.secondary[300],
      hollowBorderColor: palette.secondary[300],
      textColor: palette.secondary[900],
    },
    warning: {
      filledBackgroundColor: palette.warning[300],
      hollowBorderColor: palette.warning[300],
      textColor: palette.warning[900],
    },
    success: {
      filledBackgroundColor: palette.success[300],
      hollowBorderColor: palette.success[300],
      textColor: palette.success[900],
    },
    error: {
      filledBackgroundColor: palette.danger[300],
      hollowBorderColor: palette.danger[300],
      textColor: palette.success[900],
    },
  },
};
