export type TypeVariant =
  | 'header1'
  | 'header2'
  | 'header3'
  | 'subtitle'
  | 'body'
  | 'smallBody'
  | 'pretitle'
  | 'buttonText'
  | 'listItem';

export type TypeVariantSetting = {
  fontFamily?: string;
  fontSize: number;
  fontWeight: 400 | 500 | 600 | 700;
  letterSpacing?: number;
  lineHeight?: string | number;
  textAlign?: 'center' | 'left' | 'right';
  textTransform?: 'capitalize' | 'uppercase' | 'lowercase';
};

export interface Typography
  extends Record<TypeVariant, TypeVariantSetting> {
  header1: TypeVariantSetting;
  header2: TypeVariantSetting;
  header3: TypeVariantSetting;
  subtitle: TypeVariantSetting;
  body: TypeVariantSetting;
  smallBody: TypeVariantSetting;
  pretitle: TypeVariantSetting;
  buttonText: TypeVariantSetting;
  listItem: TypeVariantSetting;
}

export const typography: Typography = {
  header1: {
    fontSize: 64,
    fontWeight: 700,
    letterSpacing: -1,
    lineHeight: '120%',
  },
  header2: {
    fontSize: 40,
    fontWeight: 700,
    letterSpacing: -1,
    lineHeight: '120%',
  },
  header3: {
    fontSize: 24,
    fontWeight: 700,
    letterSpacing: -1,
    lineHeight: '120%',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 500,
    lineHeight: '120%',
  },
  body: {
    fontSize: 18,
    fontWeight: 500,
    lineHeight: '140%',
  },
  smallBody: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '120%',
  },
  pretitle: {
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 14,
    letterSpacing: 1,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  listItem: {
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 20,
  },
};
