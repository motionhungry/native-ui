type TextSize = 1 | 2 | 3 | 4;

type FontWeight = 'regular' | 'medium' | 'semi-bold' |'bold';

type SizeVariant = {
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
};

export type Text = {
  variant: Record<TextSize, SizeVariant>;
  fontWeight: Record<FontWeight, string>;
};

export const text: Text = {
  variant: {
    1: {
      fontSize: '20px',
      lineHeight: '32px',
      letterSpacing: '0.75px',
    },
    2: {
      fontSize: '17px',
      lineHeight: '28px',
      letterSpacing: '0.75px',
    },
    3: {
      fontSize: '15px',
      lineHeight: '24px',
      letterSpacing: '0.75px',
    },
    4: {
      fontSize: '13px',
      lineHeight: '22px',
      letterSpacing: '0.25px',
    },
  },
  fontWeight: {
    regular: 'Poppins-Regular',
    medium: 'Poppins-Medium',
    'semi-bold': 'Poppins-SemiBold',
    bold: 'Poppins-Bold',
  },
};
