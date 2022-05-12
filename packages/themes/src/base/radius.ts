export type BorderRadiusVariant = 'xlarge' | 'large' | 'medium' | 'small';

export type Radius = Record<BorderRadiusVariant, string>;

export const radius: Radius = {
  xlarge: '20px',
  large: '16px',
  medium: '12px',
  small: '8px',
};
