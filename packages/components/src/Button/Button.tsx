import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import { Box, TouchableOpacity, IconName } from '@motionhungry-ui/core';
import { useTheme } from '@motionhungry-ui/hooks';
import { ButtonSize, ButtonVariant } from '@motionhungry-ui/themes';
import { MarginProps } from 'styled-system';

import { Text } from '../Text';

type ButtonProps = {
  disabled?: boolean;
  label: string;
  leftIcon?: IconName;
  rightIcon?: IconName;
  size?: ButtonSize;
  variant?: ButtonVariant;
  onPress?: () => void;
} & MarginProps;

export const Button = ({
  disabled = false,
  label,
  leftIcon,
  rightIcon,
  size = 'large',
  variant = 'primary',
  onPress = () => {},
  ...props
}: ButtonProps): JSX.Element => {
  const theme = useTheme();
  const {
    components: { Button: buttonTheme },
  } = theme;

  const { box: boxVariant, label: labelVariant } = buttonTheme.variant[variant];
  const { box: boxSize, label: labelSize, iconSize } = buttonTheme.size[size];

  return (
    <TouchableOpacity
      disabled={disabled}
      justifyContent="center"
      alignItems="center"
      onPress={onPress}
      {...boxSize}
      {...boxVariant}
      {...props}
    >
      <Box flexDirection="row">
        {leftIcon && (
          <Box mr={1.5}>
            <Ionicons
              name={leftIcon}
              size={iconSize}
              color={labelVariant.color}
            />
          </Box>
        )}
        <Text textAlign="center" {...labelSize} {...labelVariant}>
          {label}
        </Text>
        {rightIcon && (
          <Box ml={1.5}>
            <Ionicons
              name={rightIcon}
              size={iconSize}
              color={labelVariant.color}
            />
          </Box>
        )}
      </Box>
    </TouchableOpacity>
  );
};
