import React from 'react';
import { Box } from '@motionhungry-ui/core';
import { radius } from '@motionhungry-ui/themes';
import { useTheme } from '@motionhungry-ui/hooks';
import { MarginProps } from 'styled-system';

type CardProps = {
  children: React.ReactNode;
} & MarginProps;

const Card = ({ children, ...props }: CardProps): JSX.Element => {
  const theme = useTheme();
  const cardTheme = theme.components.Card;
  const borderRadius = cardTheme.borderRadiusVariant
    ? radius[cardTheme.borderRadiusVariant]
    : undefined;
  return (
    <Box
      padding={cardTheme.padding}
      backgroundColor={cardTheme.backgroundColor}
      borderColor={cardTheme.borderColor}
      borderRadius={borderRadius}
      borderWidth={cardTheme.borderWidth}
    >
      {children}
    </Box>
  );
};

Card.displayName = 'Card';

export { Card };
