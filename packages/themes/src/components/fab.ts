import { palette } from '../base/color';

export type Fab = {
  backgroundColor: string;
  iconColor: string;
  shadowColor: string;
};

export const fab: Fab = {
  backgroundColor: palette.primary[500],
  iconColor: palette.white,
  shadowColor: palette.primary[200],
};
