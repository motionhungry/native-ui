export type HeadingSize = 'xlarge' | 'large' | 'medium' | 'small';

type TypeVariant = {
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing: string;
};

export type Heading = Record<HeadingSize, TypeVariant>;

export const heading: Heading = {
  xlarge: {
    fontFamily: 'Poppins-Bold',
    fontSize: '34px',
    fontWeight: 'bold',
    lineHeight: '48px',
    letterSpacing: '1px',
  },
  large: {
    fontFamily: 'Poppins-Bold',
    fontSize: '28px',
    fontWeight: 'bold',
    lineHeight: '40px',
    letterSpacing: '1px',
  },
  medium: {
    fontFamily: 'Poppins-Bold',
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: '34px',
    letterSpacing: '1px',
  },
  small: {
    fontFamily: 'Poppins-Bold',
    fontSize: '20px',
    fontWeight: 'bold',
    lineHeight: '32px',
    letterSpacing: '1px',
  },
};
