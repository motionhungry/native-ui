import { palette } from '../base/color';
import { radius } from '../base/radius';
import { textConfig, FontSizeVariant } from './text';

export type ButtonSize = 'xlarge' | 'large' | 'medium' | 'small';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

type ButtonSizeConfig = {
  box: {
    height: string;
    borderRadius: string;
  };
  label: FontSizeVariant;
  iconSize: number;
};

type ButtonVariantConfig = {
  box: {
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: string;
  };
  label: {
    color: string;
  };
};

export type ButtonConfig = {
  size: Record<ButtonSize, ButtonSizeConfig>;
  variant: Record<ButtonVariant, ButtonVariantConfig>;
};

const styleLabel = (variant: FontSizeVariant): FontSizeVariant => ({
  ...variant,
  fontWeight: 'semi-bold',
});

export const buttonConfig = {
  size: {
    xlarge: {
      box: {
        height: '72px',
        borderRadius: radius.large,
      },
      label: styleLabel(textConfig.variant.medium),
      iconSize: 24,
    },
    large: {
      box: {
        height: '64px',
        borderRadius: radius.medium,
      },
      label: styleLabel(textConfig.variant.small),
      iconSize: 24,
    },
    medium: {
      box: {
        height: '56px',
        borderRadius: radius.medium,
      },
      label: styleLabel(textConfig.variant.small),
      iconSize: 24,
    },
    small: {
      box: {
        height: '40px',
        borderRadius: radius.small,
      },
      label: styleLabel(textConfig.variant.xsmall),
      iconSize: 24,
    },
  },
  variant: {
    primary: {
      box: {
        backgroundColor: palette.primary[500],
      },
      label: {
        color: palette.white,
      },
    },
    secondary: {
      box: {
        borderWidth: '2px',
        borderColor: palette.primary[500],
      },
      label: {
        color: palette.primary[500],
      },
    },
    tertiary: {
      box: {},
      label: {
        color: palette.primary[500],
      },
    },
  },
};
