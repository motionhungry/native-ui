import { color } from '../base/color';
import { radius } from '../base/radius';
import { typography, TypeVariantSetting } from '../base/typography';

export interface TextInput {
  backgroundColor: string;
  border: {
    radius: number;
    color: string;
    width: number
  };
  color: string;
  label: {
    typography: TypeVariantSetting;
    color: string;
  };
  typography: TypeVariantSetting;
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
    typography: typography.pretitle,
    color: color.secondary[100],
  },
  typography: typography.listItem,
};
