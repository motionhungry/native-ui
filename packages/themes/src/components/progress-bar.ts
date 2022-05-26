import { color } from '../base/color';

export type ProgressBarConfig = {
  height: string;
  rounded: boolean;
  backgroundColor: string;
  progressColor: string;
};

export const progressBarConfig: ProgressBarConfig = {
  height: '12px',
  rounded: true,
  backgroundColor: color.shale[25],
  progressColor: color.black[100],
};
