import React from 'react';
import { Box } from '@motionhungry-ui/core';
import { useTheme } from '@motionhungry-ui/hooks';
import { BadgeWeight, BadgeVariant, radius } from '@motionhungry-ui/themes';
import { MarginProps } from 'styled-system';

import { Text } from '../Text';

type BadgeProps = {
  label: string;
  variant?: BadgeVariant;
  weight?: BadgeWeight;
} & MarginProps;

const Badge = ({
  label = 'string',
  weight = 'filled',
  variant = 'default',
  ...props
}: BadgeProps): JSX.Element => {
  const theme = useTheme();
  const badgeTheme = theme.components.Badge;
  const {
    box: boxProps,
    fontWeight,
    hollowBorderWidth,
    textSize,
    borderRadiusVariant,
    variant: variantTheme,
  } = badgeTheme;

  const variantProps = variantTheme[variant];

  const borderRadius = radius[borderRadiusVariant];

  const boxWeightProps =
    weight === 'filled'
      ? { backgroundColor: variantProps.filledBackgroundColor }
      : {
          borderWidth: hollowBorderWidth,
          borderColor: variantProps.hollowBorderColor,
        };

  return (
    <Box
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      borderRadius={borderRadius}
      borderWidth={weight === 'hollow' ? hollowBorderWidth : 0}
      {...boxProps}
      {...boxWeightProps}
      {...props}
    >
      <Text
        fontWeight={fontWeight}
        size={textSize}
        color={variantProps.textColor}
      >
        {label}
      </Text>
    </Box>
  );
};

Badge.displayName = 'Badge';

export { Badge };
