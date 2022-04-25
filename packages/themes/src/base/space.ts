export type SpaceVariant = 0 | 0.5 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type Space = Record<SpaceVariant, number>;

export const space: Space = {
  0: 0,
  0.5: 4,
  1: 8,
  2: 16,
  3: 24,
  4: 32,
  5: 40,
  6: 48,
  7: 56,
  8: 64,
  9: 72,
  10: 80,
};
