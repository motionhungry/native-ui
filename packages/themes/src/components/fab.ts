import { ColorOpacity, color } from '../base/color';

export type FabColorOption = 'primary' | 'secondary';

export type FabColor = Record<FabColorOption, ColorOpacity>;

export type Fab = {
  backgroundColor: string;
  iconColor: string;
  shadowColor: string;
};

export const fab: Fab = {
  backgroundColor: 'secondary',
  iconColor: color.white[100],
  shadowColor: color.indigoBlack[25],
};
