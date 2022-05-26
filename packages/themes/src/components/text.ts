import { palette } from '../base/color';

export type TextSize = 'large' | 'medium' | 'small' | 'xsmall';

export type FontWeight = 'normal' | 'medium' | 'semi-bold' |'bold';

export type FontSizeVariant = {
  fontSize: string;
  fontWeight?: FontWeight;
  letterSpacing: string;
  lineHeight: string;
};

export type TextConfig = {
  variant: Record<TextSize, FontSizeVariant>;
  fontWeight: Record<FontWeight, string>;
  defaultColor: string;
};

export const textConfig: TextConfig = {
  variant: {
    large: {
      fontSize: '20px',
      lineHeight: '32px',
      letterSpacing: '0.75px',
    },
    medium: {
      fontSize: '17px',
      lineHeight: '28px',
      letterSpacing: '0.75px',
    },
    small: {
      fontSize: '15px',
      lineHeight: '24px',
      letterSpacing: '0.75px',
    },
    xsmall: {
      fontSize: '13px',
      lineHeight: '22px',
      letterSpacing: '0.25px',
    },
  },
  fontWeight: {
    normal: 'Poppins-Regular',
    medium: 'Poppins-Medium',
    'semi-bold': 'Poppins-SemiBold',
    bold: 'Poppins-Bold',
  },
  defaultColor: palette.grayscale[900],
};
