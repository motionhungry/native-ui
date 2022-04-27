export type BorderRadiusVariant = 'xlarge' | 'large' | 'medium' | 'small';

export type Radius = Record<BorderRadiusVariant, number>;

export const radius: Radius = {
  xlarge: 20,
  large: 16,
  medium: 8,
  small: 6,
};
