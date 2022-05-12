import React from 'react';

import { TouchableOpacity } from '@motionhungry-ui/core';
import { useTheme } from '@motionhungry-ui/hooks';
import { ButtonSize, ButtonVariant } from '@motionhungry-ui/themes';
import { MarginProps } from 'styled-system';

import { Text } from '../Text';

type ButtonProps = {
  disabled?: boolean;
  label: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  onPress?: () => void;
} & MarginProps;

export const Button = ({
  disabled = false,
  label,
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
  const { box: boxSize, label: labelSize } = buttonTheme.size[size];

  return (
    <TouchableOpacity
      disabled={disabled}
      justifyContent="center"
      onPress={onPress}
      {...boxSize}
      {...boxVariant}
      {...props}
    >
      <Text textAlign="center" {...labelSize} {...labelVariant}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
