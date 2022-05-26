import { palette } from '../base/color';

export type ProgressBarConfig = {
  height: string;
  rounded: boolean;
  backgroundColor: string;
  progressColor: string;
};

export const progressBarConfig: ProgressBarConfig = {
  height: '12px',
  rounded: true,
  backgroundColor: palette.grayscale[100],
  progressColor: palette.primary[500],
};
