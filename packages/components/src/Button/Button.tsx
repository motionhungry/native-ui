import React from 'react';

import { TouchableOpacity, Typography } from '@motionhungry-ui/core';
import { useTheme } from '@motionhungry-ui/hooks';
import {
  ButtonSize,
  ButtonVariant,
  ButtonColorOption,
} from '@motionhungry-ui/themes';
import { MarginProps } from 'styled-system';

type ButtonProps = {
  color?: ButtonColorOption;
  disabled?: boolean;
  label: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  onPress: () => void;
} & MarginProps;

export const Button = ({
  color = 'primary',
  disabled = false,
  label,
  size = 'default',
  variant = 'primary',
  onPress,
  ...props
}: ButtonProps): JSX.Element => {
  const theme = useTheme();
  const {
    components: { Button: buttonTheme },
  } = theme;
  const variantTheme = buttonTheme[variant];

  const opacity = disabled ? variantTheme.disabledOpacity : 100;

  const backgroundColor = (() => {
    if (variantTheme.backgroundColor) {
      return variantTheme.backgroundColor;
    }
    if (variant === 'primary') {
      return theme.color[color][opacity];
    }
    return undefined;
  })();

  const borderColor = (() => {
    if (variantTheme.borderWidth > 0) {
      return theme.color[color][opacity];
    }
    return undefined;
  })();

  const labelColor = (() => {
    if (variantTheme.labelColor) {
      return variantTheme.labelColor[opacity];
    }
    return theme.color[color][opacity];
  })();

  return (
    <TouchableOpacity
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderRadius={variantTheme.borderRadius}
      borderWidth={variantTheme.borderWidth}
      disabled={disabled}
      justifyContent="center"
      height={
        size === 'default'
          ? buttonTheme.height.default
          : buttonTheme.height.small
      }
      onPress={onPress}
      {...props}
    >
      <Typography color={labelColor} {...buttonTheme.typeVariant}>
        {label}
      </Typography>
    </TouchableOpacity>
  );
};
