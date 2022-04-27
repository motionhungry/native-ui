import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, IconName } from '@motionhungry-ui/core';
import { useTheme } from '@motionhungry-ui/hooks';
import {
  ButtonSize,
  ButtonVariant,
  ButtonColorOption,
} from '@motionhungry-ui/themes';
import { MarginProps } from 'styled-system';

type IconButtonProps = {
  color?: ButtonColorOption | string;
  disabled?: boolean;
  icon: IconName;
  size?: ButtonSize;
  variant?: ButtonVariant;
  onPress: () => void;
} & MarginProps;

const IconButton = ({
  color = 'primary',
  disabled = false,
  icon,
  size = 'default',
  variant = 'primary',
  onPress,
  ...props
}: IconButtonProps): JSX.Element => {
  const theme = useTheme();
  const {
    components: { IconButton: buttonTheme },
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
      alignItems="center"
      height={
        size === 'default'
          ? buttonTheme.height.default
          : buttonTheme.height.small
      }
      onPress={onPress}
      width={
        size === 'default' ? buttonTheme.width.default : buttonTheme.width.small
      }
      {...props}
    >
      <Ionicons
        name={icon}
        size={buttonTheme.iconSize[size]}
        color={labelColor}
      />
    </TouchableOpacity>
  );
};

IconButton.displayName = 'IconButton';

export { IconButton };
