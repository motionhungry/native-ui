export type BorderRadiusVariant = 'large' | 'medium' | 'small';

export type Radius = Record<BorderRadiusVariant, number>;

export const radius: Radius = {
  large: 16,
  medium: 8,
  small: 6,
};
