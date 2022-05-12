import { color } from '../base/color';
import { radius } from '../base/radius';
import { FontSizeVariant, textConfig } from './text';

export interface TextInput {
  backgroundColor: string;
  border: {
    radius: string;
    color: string;
    width: number
  };
  color: string;
  label: { color: string } & FontSizeVariant;
}

export const textInput: TextInput = {
  backgroundColor: color.white[100],
  border: {
    radius: radius.small,
    color: color.shale[100],
    width: 2,
  },
  color: color.indigoBlack[100],
  label: {
    ...textConfig.variant.medium,
    color: color.secondary[100],
  },
};
