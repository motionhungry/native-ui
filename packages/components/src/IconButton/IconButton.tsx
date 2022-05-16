import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, IconName } from '@motionhungry-ui/core';
import { useTheme } from '@motionhungry-ui/hooks';
import { IconButtonSize, IconButtonVariant } from '@motionhungry-ui/themes';
import { MarginProps } from 'styled-system';

type IconButtonProps = {
  disabled?: boolean;
  icon: IconName;
  size?: IconButtonSize;
  variant?: IconButtonVariant;
  onPress: () => void;
} & MarginProps;

const IconButton = ({
  disabled = false,
  icon,
  size = 'large',
  variant = 'primary',
  onPress,
  ...props
}: IconButtonProps): JSX.Element => {
  const theme = useTheme();
  const {
    components: { IconButton: buttonTheme },
  } = theme;

  const { box: boxVariant, iconColor } = buttonTheme.variant[variant];
  const { box: boxSize, iconSize } = buttonTheme.size[size];

  return (
    <TouchableOpacity
      disabled={disabled}
      justifyContent="center"
      alignItems="center"
      onPress={onPress}
      {...boxVariant}
      {...boxSize}
      {...props}
    >
      <Ionicons name={icon} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};

IconButton.displayName = 'IconButton';

export { IconButton };
