import { palette } from '../base/color';
import { radius } from '../base/radius';

export type IconButtonSize = 'xlarge' | 'large' | 'medium' | 'small';

export type IconButtonVariant = 'primary' | 'secondary' | 'tertiary';

type IconButtonSizeConfig = {
  box: {
    width: string;
    height: string;
    borderRadius: string;
  };
  iconSize: 24;
};

type IconButtonVariantConfig = {
  box: {
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: string;
  };
  iconColor: string;
};

export type IconButtonConfig = {
  size: Record<IconButtonSize, IconButtonSizeConfig>;
  variant: Record<IconButtonVariant, IconButtonVariantConfig>;
};

export const iconButtonConfig: IconButtonConfig = {
  size: {
    xlarge: {
      box: {
        height: '72px',
        width: '72px',
        borderRadius: radius.large,
      },
      iconSize: 24,
    },
    large: {
      box: {
        height: '64px',
        width: '64px',
        borderRadius: radius.medium,
      },
      iconSize: 24,
    },
    medium: {
      box: {
        height: '56px',
        width: '56px',
        borderRadius: radius.medium,
      },
      iconSize: 24,
    },
    small: {
      box: {
        height: '40px',
        width: '40px',
        borderRadius: radius.small,
      },
      iconSize: 24,
    },
  },
  variant: {
    primary: {
      box: {
        backgroundColor: palette.primary[500],
      },
      iconColor: palette.white,
    },
    secondary: {
      box: {
        borderWidth: '2px',
        borderColor: palette.primary[500],
      },
      iconColor: palette.primary[500],
    },
    tertiary: {
      box: {},
      iconColor: palette.primary[500],
    },
  },
};
