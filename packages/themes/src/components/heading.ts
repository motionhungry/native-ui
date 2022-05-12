type HeadingSize = 1 | 2 | 3 | 4;

type TypeVariant = {
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing: string;
};

export type Heading = Record<HeadingSize, TypeVariant>;

export const heading: Heading = {
  1: {
    fontFamily: 'Poppins-Bold',
    fontSize: '34px',
    fontWeight: 'bold',
    lineHeight: '48px',
    letterSpacing: '1px',
  },
  2: {
    fontFamily: 'Poppins-Bold',
    fontSize: '28px',
    fontWeight: 'bold',
    lineHeight: '40px',
    letterSpacing: '1px',
  },
  3: {
    fontFamily: 'Poppins-Bold',
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: '34px',
    letterSpacing: '1px',
  },
  4: {
    fontFamily: 'Poppins-Bold',
    fontSize: '20px',
    fontWeight: 'bold',
    lineHeight: '32px',
    letterSpacing: '1px',
  },
};
