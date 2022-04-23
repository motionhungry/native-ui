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
    borderRadius: radius.small,
    borderWidth: 0,
    disabledOpacity: 50,
    labelColor: color.white,
  },
  secondary: {
    borderRadius: radius.small,
    borderWidth: 2,
    disabledOpacity: 50,
  },
  tertiary: {
    borderRadius: radius.small,
    borderWidth: 0,
    disabledOpacity: 50,
  },
  typeVariant: typography.buttonText,
};

type BaseIconButton = {
  height: Record<ButtonSize, number>;
  iconSize: Record<ButtonSize, number>;
  width: Record<ButtonSize, number>;
};

export interface IconButton
  extends BaseIconButton,
    Record<ButtonVariant, ButtonVariantSetting> {
  primary: ButtonVariantSetting;
  secondary: ButtonVariantSetting;
  tertiary: ButtonVariantSetting;
}

export const iconButton: IconButton = {
  height: { ...button.height },
  iconSize: {
    default: 32,
    small: 24,
  },
  primary: { ...button.primary },
  secondary: { ...button.secondary },
  tertiary: { ...button.tertiary },
  width: { ...button.height },
};
