import React, { ReactNode } from 'react';
import { Typography } from '@motionhungry-ui/core';
import { useTheme } from '@motionhungry-ui/hooks';

type TextProps = {
  size: 1 | 2 | 3 | 4;
  fontWeight: 'regular' | 'medium' | 'semi-bold' | 'bold';
  children: ReactNode;
};

const Text = ({
  size,
  children,
  fontWeight = 'regular',
}: TextProps): JSX.Element => {
  const theme = useTheme();
  const fontFamily = theme.components.Text.fontWeight[fontWeight];
  return (
    <Typography
      fontFamily={fontFamily}
      {...theme.components.Text.variant[size]}
    >
      {children}
    </Typography>
  );
};

Text.displayName = 'Text';

export { Text };
