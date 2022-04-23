import { ColorOpacity, color } from '../base/color';
import { radius } from '../base/radius';
import { typography, TypeVariantSetting } from '../base/typography';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export type ButtonSize = 'default' | 'small';

export type ButtonColorOption = 'primary' | 'secondary';

export type ButtonColor = Record<ButtonColorOption, ColorOpacity>;

export type ButtonVariantSetting = {
  backgroundColor?: string;
  borderColor?: string;
  borderRadius: number;
  borderWidth: number;
  color?: ButtonColor;
  disabledOpacity: keyof ColorOpacity;
  labelColor?: ColorOpacity;
};

type BaseButton = {
  height: Record<ButtonSize, number>;
  typeVariant: TypeVariantSetting;
};

export interface Button
  extends BaseButton,
    Record<ButtonVariant, ButtonVariantSetting> {
  primary: ButtonVariantSetting;
  secondary: ButtonVariantSetting;
  tertiary: ButtonVariantSetting;
}

export const button: Button = {
  height: {
    default: 48,
    small: 32,
  },
  primary: {
    borderRadius: radius.medium,
    borderWidth: 0,
    disabledOpacity: 50,
    labelColor: color.white,
  },
  secondary: {
    borderRadius: radius.medium,
    borderWidth: 2,
    disabledOpacity: 50,
  },
  tertiary: {
    borderRadius: radius.medium,
    borderWidth: 0,
    disabledOpacity: 50,
  },
  typeVariant: typography.buttonText,
};
